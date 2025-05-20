import { Metadata } from "next";
import aboutLogo from '@/assets/technology-communication-icons-symbols-concept.jpg'
import Image from "next/image";
export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl m-auto space-y-3 bg-white p-14 rounded-lg">
      <h1 className="text-3xl font-bold">About DevScope</h1>
      <p>
        Welcome to the blog where words sometimes cooperate and form
        sentences... sometimes. I&apos;m your guide through the jungle of
        jumbled thoughts, the maestro of misplaced commas, the captain of
        creative chaos. If you&apos;re looking for perfectly crafted prose,
        well, you might want to keep looking.
      </p>
      <p>
        But if you&apos;re up for a
        rollercoaster ride through the realm of semi-organized randomness,
        buckle up and join me on this linguistic adventure! Disclaimer: Expect
        puns, occasional wit (or attempted wit), and a whole lot of trial and
        error. Stick around, and together, we&apos;ll navigate this whirlwind of
        words!
      </p>
      <Image
        src={aboutLogo}
        alt="Profile"
        width={800}
        height={200}
        className="rounded-md"
      />
      <p>We believe in transparency and adding value to
        the ecosystem. We hope you enjoy poking around and
        participating!
      </p>
      <h2>Happy coding ❤️</h2>
    </div>
  );
}
