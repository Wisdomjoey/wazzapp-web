import { useCallback, useRef, useState } from "react";
import ChatBox from "./chatBox";
import ChatNavbar from "./chatNavbar";
import MessageTyper from "./messageTyper";

function RightChatScreen() {
	const [recording, setRecording] = useState(false);
	const [frameId, setFrameId] = useState<number>();
	const [audioData, setAudioData] = useState<Blob>();
	const [frequencyData, setFrequencyData] = useState<Uint8Array>();
	const mediaRecorder = useRef<MediaRecorder>();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	let chunks: Blob[] = [];
	let animationId: number;

	const startRecording = async () => {
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: true,
		});
		mediaRecorder.current = new MediaRecorder(stream);

		const audioContext = new AudioContext();
		const source = audioContext.createMediaStreamSource(stream);
		const analyzer = audioContext.createAnalyser();
		source.connect(analyzer);

		const bufferLength = analyzer.frequencyBinCount;
		const dataArray = new Uint8Array(bufferLength);

		analyzer.fftSize = 2048;
		mediaRecorder.current.addEventListener("dataavailable", (e) => {
			chunks.push(e.data);
		});

		mediaRecorder.current.addEventListener("stop", () => {
			const blob = new Blob(chunks, { type: "audio/webm" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");

			setAudioData(blob);
			setRecording(false);

			chunks = [];
			link.href = url;
			link.download = "recording.webm";
			link.click();
		});

		const ctx = canvasRef.current?.getContext("2d");

		const renderFrame = () => {
			analyzer.getByteFrequencyData(dataArray);
			setFrequencyData(dataArray);

			const barWidth = (canvasRef.current!.width / dataArray.length) * 5;
			let barHeight: number;
			let x = 0;

			x = 0;
			ctx!.fillStyle = "#fff";
			ctx!.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);

			for (let i = 0; i < dataArray.length; i++) {
				barHeight = dataArray[i];

				ctx!.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
				ctx!.fillRect(
					x,
					canvasRef.current!.height - barHeight / 2,
					barWidth,
					barHeight / 2
				);

				x += barWidth + 1;
			}
			
			animationId = requestAnimationFrame(renderFrame);
			setFrameId(animationId);
		};

		renderFrame();

		mediaRecorder.current.start();
		setRecording(true);
	};

	const stopRecording = () => {
		mediaRecorder.current!.stop();
		cancelAnimationFrame(animationId!);
	};

	return (
		<div className="h-full bg-darker flex items-center justify-between flex-col">
			<ChatNavbar />

			<div className="w-full flex-1 flex flex-col-reverse overflow-auto py-[20px] gap-[20px]">
				<div>
					{recording ? (
						<button onClick={stopRecording} className="text-[white]">
							Stop Recording
						</button>
					) : (
						<button onClick={startRecording} className="text-[white]">
							Start Recording
						</button>
					)}

					<canvas
						width={500}
						height={100}
						style={{ border: "1px solid yellow" }}
						ref={canvasRef}
					></canvas>

					{audioData && (
						<audio src={URL.createObjectURL(audioData)} controls></audio>
					)}
				</div>

				<ChatBox id={0} />
			</div>

			<MessageTyper />
		</div>
	);
}

export default RightChatScreen;
