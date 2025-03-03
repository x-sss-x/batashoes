import Image from "next/image";
import React from "react";

export function VideoCard() {
  return (
    <div>
      <Image
        src={"https://source.unsplash.com/400x225/?technology"}
        height={155}
        width={276}
        alt="image"
        className="bg-[var(--background)]"
      />
      <div className="pt-3 gap-3 pb-6 flex">
        <Image
          src={"https://github.com/spotify.png"}
          height={36}
          width={36}
          alt="channel"
          className="rounded-full aspect-square h-fit"
        />
        <div>
          <h3 className="text-xs">Welcome my new blog</h3>
          <div className="text-xs  text-[var(--gray)]">
            <p>Spotify</p>
            <p>12M views • 2 weeks ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
