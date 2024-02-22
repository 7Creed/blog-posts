import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and welcome 👋&nbsp;
        <span className="whitespace-norap">
          I&apos;m <span className="font-bold underline">Creed</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
