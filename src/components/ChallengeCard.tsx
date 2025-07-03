import React from "react";
import Image, { StaticImageData } from "next/image";

interface ChallengeCardItem {
  sectionTitle: string;
  sectionEmoji: string;
  image: { src: StaticImageData | string; width: number; height: number };
  link: { href: string; text: string };
  description: string;
}

interface ChallengeCardProps {
  headerTitle: string;
  headerEmoji: string;
  items: ChallengeCardItem[];
  footer?: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ headerTitle, headerEmoji, items, footer }) => (
  <div className="bg-white rounded-xl shadow border p-3 max-w-md mx-auto mb-3">
    <div className="flex items-center gap-2 mb-2 text-gray-700 text-sm font-semibold">
      <span>{headerEmoji}</span>
      <span>{headerTitle}</span>
    </div>
    <h2 className="text-xl font-bold mb-2 flex items-center gap-1">Challenges <span>🤗</span></h2>
    {items.map((item, idx) => (
      <div key={idx} className="border rounded-lg mb-4 overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b bg-gray-50 text-sm font-semibold">
          <span>{item.sectionTitle}</span>
          <span>{item.sectionEmoji}</span>
        </div>
        <Image src={item.image.src} alt="Challenge" width={item.image.width} height={item.image.height} className="w-full h-28 object-cover" />
        <div className="p-3">
          <a href={item.link.href} className="text-blue-700 font-bold hover:underline text-base" target="_blank" rel="noopener noreferrer">
            {item.link.text}
          </a>
          <div className="text-gray-600 text-sm italic mt-1">{item.description}</div>
        </div>
      </div>
    ))}
    {footer && <div className="text-sm font-semibold text-gray-700 mt-2 flex items-center gap-1">{footer} <span>❤️</span></div>}
  </div>
);

export default ChallengeCard; 