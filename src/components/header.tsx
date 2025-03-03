import React from "react";
import {
  BellIcon,
  LayoutGridIcon,
  MenuIcon,
  Mic,
  PlusSquareIcon,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex z-50 h-14 sticky inset-0 top-0 bg-[var(--background)] justify-between items-center px-6">
      <div className="flex gap-6">
        <MenuIcon size={24} strokeWidth={1.25} />
        <Image src={"/yt-logo.svg"} height={20} width={90} alt="Youtube Logo" />
      </div>

      {/**Search Input */}
      <div className="flex items-center h-10">
        <input
          placeholder="Search"
          className="h-full w-96 px-4 border focus-visible:outline-1 z-10 focus-visible:outline-blue-600 bg-[var(--secondary-background)]"
        />
        <button className="h-10 w-16 border flex items-center justify-center bg-[var(--border)]">
          <SearchIcon strokeWidth={1.25} size={24} />
        </button>
        <button className="size-fit p-2 ml-3 rounded-full bg-[var(--black)]  flex items-center justify-center ">
          <Mic strokeWidth={1.25} size={24} />
        </button>
      </div>

      {/**Action content */}
      <div className="flex gap-6 items-center">
        <PlusSquareIcon size={24} strokeWidth={1.25} />
        <LayoutGridIcon size={24} strokeWidth={1.25} />
        <BellIcon size={24} strokeWidth={1.25} />

        <Image
          src={"https://github.com/theo.png"}
          height={32}
          width={32}
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </header>
  );
}
