import ActionButton from "./actionButton";

export default function DevWelcomeCard() {
  return (
    <div className="bg-[#3B49DF] text-white rounded-lg p-8 mx-auto mt-4 shadow-2xl">
      <div className="flex items-center mb-6">
        <div className="bg-black p-4 rounded">
          <span className="text-white text-xl font-bold">DevScope</span>
        </div>
        <h1 className="text-3xl font-extrabold ml-4">You&apos;re now a part of the community!</h1>
      </div>

      <p className="text-sm uppercase mb-6 text-white/80">Suggested things you can do</p>

      <div className="space-y-4">
        <ActionButton emoji="😊" text="Join the Welcome thread" />
        <ActionButton emoji="✍️" text="Write your first DevScope Community post" />
        <ActionButton emoji="🖌️" text="Customize your profile" />
        <ActionButton emoji="🚀" text="Join DevScope" />
      </div>
    </div>
  );
}