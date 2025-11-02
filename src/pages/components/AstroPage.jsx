import React from "react";

export default function AstroPage() {
  return (
    <div className="relative w-[1440px] h-[2430px] bg-[#D9D9D9] overflow-y-scroll font-['Roboto_Mono']">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full h-[122px] bg-[#D9D9D9] flex items-center justify-between px-[100px]">
        <div className="flex items-center gap-4">
          <div className="w-[83px] h-[83px] border border-black" />
          <h1 className="text-[48px] font-bold">Astro/Blog</h1>
        </div>
        <div className="flex gap-10 text-[36px]">
          <span>Tags</span>
          <span>Blog</span>
          <div className="w-[38px] h-[38px] bg-black rounded-full"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="absolute left-[57px] top-[117px] w-[1326px] h-[624px] bg-[#D9D9D9] p-[52px]">
        <h2 className="text-[48px] font-bold mb-4">Hi, I am Max</h2>
        <p className="text-[24px] leading-[32px] mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
          esse non molestias eos excepturi, inventore atque cupiditate. Sed
          voluptatem quas omnis culpa, et odit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tenetur vero esse non molestias eos
          excepturi, inventore atque cupiditate.
        </p>
        <div className="flex gap-6 mt-8">
          <button className="bg-[#B8B8B8] rounded-[10px] px-6 py-4 text-[20px] font-bold">
            Button 1
          </button>
          <button className="bg-[#B8B8B8] rounded-[10px] px-6 py-4 text-[20px] font-bold">
            Button 2
          </button>
        </div>
      </section>

      {/* Graph Section */}
      <section className="absolute left-[84px] top-[682px] w-[1271px] h-[846px] bg-[#D9D9D9] p-[40px]">
        <h2 className="text-[48px] font-bold mb-8">This is what I do</h2>
        <div className="w-[1232px] h-[462px] bg-[#B8B8B8] rounded-[10px] mb-8" />
        <p className="text-[24px] leading-[32px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
          esse non molestias eos excepturi, inventore atque cupiditate. Sed
          voluptatem quas omnis culpa, et odit.
        </p>
      </section>

      {/* Latest Posts */}
      <section className="absolute left-[109px] top-[1593px]">
        <h2 className="text-[48px] font-bold mb-8">Latest Posts</h2>
        <div className="flex gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-[245px] h-[277px] bg-[#B8B8B8] rounded-[10px]"
            ></div>
          ))}
        </div>
      </section>

      {/* Tags Section */}
      <section className="absolute left-[109px] top-[2093px]">
        <h2 className="text-[48px] font-bold mb-8">Tags</h2>
        <div className="flex gap-8">
          <div className="w-[160px] h-[80px] bg-[#B8B8B8] rounded-[10px] flex items-center justify-center text-[24px] font-bold">
            Projects
          </div>
          <div className="w-[160px] h-[80px] bg-[#B8B8B8] rounded-[10px] flex items-center justify-center text-[24px] font-bold">
            Hobbies
          </div>
          <div className="w-[160px] h-[80px] bg-[#B8B8B8] rounded-[10px] flex items-center justify-center text-[24px] font-bold">
            Work
          </div>
        </div>
      </section>
    </div>
  );
}