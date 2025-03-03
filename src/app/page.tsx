import { VideoCard } from "@/components/video-card";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="h-14 flex items-center gap-3 border-y px-6 bg-[var(--background)]">
        <div className="bg-[var(--white)] w-fit text-sm rounded-full px-3 py-2 text-[var(--black)]">
          All
        </div>
        {[
          "For you",
          "Trending",
          "Music",
          "Gaming",
          "News",
          "Movies",
          "Fashion",
          "Learning",
          "Live",
          "Spotlight",
        ].map((value, i) => (
          <div
            key={i}
            className="border-[0.3px] border-gray-800 w-fit text-sm rounded-full px-3 py-2  bg-[var(--border)]"
          >
            {value}
          </div>
        ))}
      </div>
      <div className="p-6 grid h-full grid-cols-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <VideoCard key={i} />
        ))}
      </div>
    </div>
  );
}
