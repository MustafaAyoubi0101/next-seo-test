'use client';
import logo from "@/assets/logo1.jpg";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold">SEO</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center" style={{ marginLeft: '-8rem' }}>
          <Link href="/" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">Home</Link>
          <Link href="/posts" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">Posts</Link>
          <Link href="/about" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">About</Link>
          <Link href="/privacy" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">Privacy</Link>
        </nav>

        <div className="hidden md:flex hover:text-green-700">
          <Link href="/">
            {/* <Image
            src="https://i.imgur.com/FNP4R0K.png"
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full"
            /> */}
            <div className="rounded-full bg-gray-300 w-10 h-10 flex justify-center items-center overflow-hidden">
              <span className="text-lg">👩‍💻</span>
            </div>
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden px-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <nav className="flex flex-col gap-4 py-4">
          <Link href="/" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">Home</Link>
          <Link href="/posts" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">Posts</Link>
          <Link href="/about" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">About</Link>
          <Link href="/privacy" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">Privacy</Link>
          <Link href="/" className="flex items-center gap-2 hover:text-green-700">
            {/* <Image
              src="https://i.imgur.com/FNP4R0K.png"
              alt="Profile"
              width={30}
              height={30}
              className="rounded-full"
            /> */}
            <div className="rounded-full bg-gray-300 w-10 h-10 flex justify-center items-center overflow-hidden">
              <span className="text-lg">👩‍💻</span>
            </div>
            <span className="font-medium">Profile</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
