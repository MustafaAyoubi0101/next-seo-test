// components/ActiveDiscussions.jsx

const discussions = [
	{ title: "Meme Monday", comments: 75 },
	{ title: "What was your win this week??", comments: 60 },
	{ title: "Code, Coffee & Chaos (My Full Stack Journey So Far)", comments: 7 },
	{ title: "The SEO Game Has Changed", comments: 9 },
	{ title: "How to Contribute to Code Reviews Like a Pro", comments: 2 },
	{ title: "Focus on the product, not the tech stack", comments: 15 },
	{ title: "After 100 Job Rejections, Here’s What I Realized About Being a Developer", comments: 1 },
	{ title: "How I used NLP and LLM to supercharge my Japanese learning", comments: 1 },
];

export default function ActiveDiscussions() {
	return (
		<aside className="max-w-sm max-h-fit bg-white border-l shadow-md rounded-lg p-4 hidden lg:block">
			<h2 className="text-lg font-semibold mb-4">Active discussions</h2>
			<hr />
			<ul className="space-y-4">
				{discussions.map((item, idx) => (
					<li key={idx}>
						<p className="text-gray-700 hover:underline cursor-pointer">{item.title}</p>
						<p className="text-sm text-gray-500">{item.comments} comments</p>
						<hr />
					</li>
				))}
			</ul>
		</aside>
	);
}
