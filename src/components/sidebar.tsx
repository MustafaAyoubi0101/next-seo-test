import React from "react";
import { ReactNode } from "react";
import { BookOpen, FileQuestion, Library, MessageSquare, Phone, Podcast, Video } from "lucide-react";
import Link from "next/link";

type NavItem = {
  icon: ReactNode;
  label: string;
  url: string;
};

const mainLinks: NavItem[] = [
  { icon: <MessageSquare />, label: "Posts", url: "/posts" },
  { icon: <Podcast />, label: "Podcasts", url: "/podcasts" },
  { icon: <BookOpen />, label: "Reading List", url: "/reading-list" },
  { icon: <Video />, label: "Videos", url: "/videos" }
];

const otherLinks: NavItem[] = [
  { icon: <Library />, label: "Privacy Policy", url: "/privacy" },
  { icon: <Phone />, label: "Contact", url: "/contact" },
  { icon: <FileQuestion />, label: "FAQ", url: "/faq" }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 p-4 border-gray-200 text-sm">
      <nav className="space-y-6">
        <ul className="space-y-2">
          {mainLinks.map((item) => (
            <Link key={item.label} href={item.url}>
              <li className="flex items-center gap-3 hover:bg-violet-100  px-3 py-2 rounded-md cursor-pointer transition"              >
                <span className="text-lg">{item.icon}</span>
                <span className="hover:text-violet-800 hover:underline">{item.label}</span>
              </li>
            </Link>
          ))}
        </ul>

        <div>
          <h4 className="text-xs font-bold text-gray-500 mb-2 uppercase">Other</h4>
          <ul className="space-y-2">
            {otherLinks.map((item) => (
              <Link key={item.label} href={item.url}>
                <li className="flex items-center gap-3 hover:bg-violet-100 px-3 py-2 rounded-md cursor-pointer transition" >
                  <span className="text-lg">{item.icon}</span>
                  <span className="hover:text-violet-800 hover:underline">{item.label}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
