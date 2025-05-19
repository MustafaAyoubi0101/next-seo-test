import Image from "next/image";
import banner from '@/assets/banner.svg';

export default async function BlogPage() {
  return (
    <div className="m-auto space-y-5">
      <h1 className="text-4xl max-w-3xl text-center m-auto mb-16 mt-10 font-bold leading-10">Let us solve your critical website development challenges</h1>
      <Image
        src={banner}
        alt="Hero Image"
        width={750}
        height={390}
        className="rounded-lg m-auto max-w-5xl"
      />
    </div>
  );
}
