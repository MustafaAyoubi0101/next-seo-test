import ClapButton from "@/components/ClapButton";
import { delay } from "@/lib/utils";
import { BlogPost, BlogPostsResponse } from "@/models/BlogPost";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";

interface BlogPostPageProps {
  params: { postId: string };
}

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  return posts.map(({ id }) => id);
}

// Manually deduplicate requests if not using fetch
// const getPost = cache(async (postId: string) => {
//   const post = await prisma.post.findUnique(postId);
//   return post;
// })

export async function generateMetadata({
  params: { postId },
}: BlogPostPageProps): Promise<Metadata> {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const post: BlogPost = await response.json();

  return {
    title: post.title,
    description: post.body,
    // openGraph: {
    //   images: [
    //     {
    //       url: post.imageUrl
    //     }
    //   ]
    // }
  };
}

export default async function BlogPostPage({
  params: { postId },
}: BlogPostPageProps) {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const { title, body }: BlogPost = await response.json();

  if (response.status === 404) {
    notFound();
  }

  await delay(1000);

  return (
    <article className="max-w-5xl m-auto space-y-5">
      <div className="min-h-screen font-sans">
        <Link href="/posts">
          <div className="flex items-center ml-32 py-5 text-blue-500">
            <ArrowLeft /> Posts
          </div>
        </Link>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-teal-500 text-white p-6 flex items-center ">
            <Image
              src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqh8ujtwuyr3wbxegw5ai.webp"
              alt="Software Testing Guide"
              width={800}
              height={400}
              className="rounded-xl"
            />
          </div>

          <div className="p-8 space-y-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-lg">
              Whether you&apos;re a developer, QA wizard, or tech enthusiast extraordinaire — software testing is as essential as coffee on a Monday morning! ☕
            </p>
            <p className="text-md">
              {body}. 🐞🥾
            </p>

            <h2 className="text-4xl font-semibold text-gray-800 mt-8">Testing types you can&apos;t ignore:</h2>
            <ul className="list-disc list-inside text-lg">
              <li><strong>Unit Testing:</strong> Tiny tests, mighty importance.</li>
              <li><strong>Integration Testing:</strong> Because teamwork makes the dream work.</li>
              <li><strong>Functional Testing:</strong> Ensuring your buttons aren&apos;t just for show.</li>
              <li><strong>Performance Testing:</strong> Faster than your Wi-Fi when your boss is watching.</li>
              <li><strong>Security Testing:</strong> Keep your app safer than grandma&apos;s cookie recipe.</li>
            </ul>

            <div className="mt-8 p-6 bg-purple-100 rounded-xl">
              <p className="text-purple-800 font-semibold">
                Want more fun guides like this? Smash that follow button or leave a quirky comment! 🎉🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
