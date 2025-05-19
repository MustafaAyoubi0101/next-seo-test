import Article from "@/components/article";
import { delay } from "@/lib/utils";
import { BlogPostsResponse } from "@/models/BlogPost";
import Link from "next/link";

export default async function BlogPage() {
    const response = await fetch("https://dummyjson.com/posts");
    const { posts }: BlogPostsResponse = await response.json();

    await delay(1000);

    return (
        <div className="m-auto space-y-5">
            <h1 className="text-3xl text-center mb-3 font-bold">Posts</h1>
            {posts.map(({ id, title, tags, views }, i) => (
                <Article key={i} id={id} title={title} tags={tags} views={views} body=""/>
            ))}
        </div>
    );
}