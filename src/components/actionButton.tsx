import { ArrowRight } from "lucide-react";

export default function ActionButton({ emoji, text }: any) {
	return (
		<button className="w-full flex items-center justify-between bg-[#5C6BC0] hover:bg-[#7986CB] transition-colors text-white px-4 py-3 rounded-md shadow-md">
			<span>{emoji}</span>
			<span className="flex-1 ml-3 text-left font-medium">{text}</span>
			<span className="ml-auto"><ArrowRight width={24} height={24} /></span>
		</button>
	);
}