'use client';
import { useState } from "react";

export default function QuickiePost() {
	const [text, setText] = useState("");

	return (
		<div className="bg-white border border-gray-200 p-4 rounded-md shadow-sm mx-auto">
			<input
				type="text"
				value={text}
				maxLength={256}
				onChange={(e) => setText(e.target.value)}
				placeholder="What's on your mind?"
				className="w-full border border-blue-400 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<div className="text-xs text-gray-500 mt-2 flex items-center justify-between">
				<span>
					<strong>Quickie Posts (beta)</strong> show up in the feed but not
					notifications or your profile —{" "}
					<a href="#" className="text-blue-600 hover:underline">
						Open Full Editor
					</a>
				</span>
				<span className="text-gray-400">{text.length}/256</span>
				<button
					className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded"
					disabled={!text.trim()}
				>
					Post
				</button>
			</div>
		</div>
	);
}
