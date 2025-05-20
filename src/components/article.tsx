import { BlogPost } from "@/models/BlogPost";
import Link from "next/link";

export default function Article({ id, title, tags, views }: BlogPost) {
    return (
        <article className="max-w-4xl mx-auto bg-white mt-3 p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-2">
                <div className="rounded-full bg-gray-300 w-10 h-10 flex justify-center items-center overflow-hidden">
                    <span className="text-lg">👩‍💻</span>
                </div>
                <div className="ml-4">
                    <h3 className="text-base font-semibold">User by Id {id}</h3>
                    <p className="text-sm text-gray-500">Apr 23 (2 hour ago)</p>
                </div>
            </div>
            <Link href={`/posts/${id}`} >
                <h2 className="text-2xl font-bold mb-3 ml-14 mt-6 transition-all hover:text-blue-900">
                    {title}
                </h2>
            </Link>
            <div className="flex space-x-2 text-sm ml-12">
                {tags.map((tag, index) => (
                    <span key={index} className="m-2 hover:text-blue-500 hover:bg-slate-50 p-1">#{tag}</span>
                ))}
            </div>
            <div className="flex justify-between items-center mt-4 ml-14">
                <button className="text-gray-600 hover:text-blue-500 transition-colors duration-300 hover:bg-slate-50 p-1">
                    💬 Add Comment
                </button>
                <span className="text-sm text-gray-500">Views: {views}</span>
            </div>
        </article>
    )
}