import ActiveDiscussions from "@/components/activeDiscussions";
import Article from "@/components/article";
import DevWelcomeCard from "@/components/devWelcomeCard";
import QuickiePost from "@/components/quickiePost";
import Sidebar from "@/components/sidebar";
import { BlogPostsResponse } from "@/models/BlogPost";

export default async function BlogPage() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();
  return (
    <div className="m-auto">
      <div className="flex justify-between">
        <aside className="w-64 hidden md:block">
          <Sidebar />
        </aside>
        <div className="flex-1 p-1 max-w-3xl mx-3">
          <QuickiePost />
          <DevWelcomeCard />
          {posts.map(({ id, title, tags, views }, i) => (
            <Article key={i} id={id} title={title} tags={tags} views={views} body="" />
          ))}
        </div>
        <ActiveDiscussions />
      </div>
    </div>
  );
}
