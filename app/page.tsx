import { Suspense } from "react";
import CardWrapper from "./ui/components/cardWrapper"
import { inter } from "./ui/fonts"

export default function Home() {
  return (
    <main className="flex-1 p-16 flex flex-col gap-20">
      <header>
        <h1 className={`${inter.className} text-2xl font-semibold font-['Inter']`}>Posts</h1>
        <h2 className="text-xl text-secondary font-normal leading-normal">Latest posts</h2>
      </header>
      <Suspense fallback={(<p>Loading...</p>)}>
        <CardWrapper />
      </Suspense>
    </main>
  );
}
