import { BlogPost } from "@/models/BlogPost";
import Link from "next/link";

export default function Article({ id, title, tags, views }: BlogPost) {
    return (
        <article className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-2">
                <div className="rounded-full bg-gray-300 w-10 h-10 flex justify-center items-center overflow-hidden">
                    <span className="text-lg">👩‍💻</span>
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">User {id}</h3>
                    <p className="text-sm text-gray-500">Apr 23</p>
                </div>
            </div>
            <Link href={`/posts/${id}`} >
                <h2 className="text-2xl font-bold mb-3 ml-5 transition-all hover:text-blue-900">
                    {title}
                </h2>
            </Link>
            <div className="flex space-x-2 text-sm">
                {tags.map((tag, index) => (
                    <span key={index} className="m-2 hover:text-blue-500">#{tag}</span>
                ))}
            </div>
            <div className="flex justify-between items-center mt-4">
                <button className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    💬 Add Comment
                </button>
                <span className="text-sm text-gray-500">Views: {views}</span>
            </div>
        </article>
    )
}