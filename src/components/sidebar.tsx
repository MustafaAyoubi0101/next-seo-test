import { ReactNode } from "react";
import { BookOpen, Code, Eye, FileQuestion, FunctionSquareIcon, Home, Library, MessageCircleDashed, MessageSquare, MessageSquareShare, Microchip, PaintRollerIcon, PanelRightInactive, Phone, Podcast, ShoppingBag, Tags, Video } from "lucide-react";

type NavItem = {
  icon: ReactNode;
  label: string;
};

const mainLinks: NavItem[] = [
  { icon: <MessageSquare />, label: "Posts" },
  { icon: <Podcast />, label: "Podcasts" },
  { icon: <BookOpen />, label: "Reading List" },
  { icon: <Video />, label: "Videos" }
];

const otherLinks: NavItem[] = [
  { icon: <Library />, label: "Privacy Policy" },
  { icon: <Phone />, label: "Contact" },
  { icon: <FileQuestion />, label: "FAQ" }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 p-4 border-gray-200 text-sm">
      <nav className="space-y-6">
        <ul className="space-y-2">
          {mainLinks.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 hover:bg-violet-100  px-3 py-2 rounded-md cursor-pointer transition"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="hover:text-violet-800 hover:underline">{item.label}</span>
            </li>
          ))}
        </ul>

        <div>
          <h4 className="text-xs font-bold text-gray-500 mb-2 uppercase">Other</h4>
          <ul className="space-y-2">
            {otherLinks.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 hover:bg-violet-100 px-3 py-2 rounded-md cursor-pointer transition"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hover:text-violet-800 hover:underline">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
