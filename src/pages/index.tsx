import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="bg-smoke h-screen">
      <Head>
        <title>Quizzical Trivia</title>
        <meta name="description" content="Trivia Quizz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 flex-col justify-center items-center h-full py-16 overflow-hidden relative">
        <div className="absolute -top-[80px] -right-[80px]">
          <Image
            src="/images/lemon-blob.svg"
            alt="blob"
            height={235}
            width={297}
          />
        </div>

        <h1 className="text-lavender-500 text-5xl text-center">Quizzical</h1>

        <p className="text-lavender-500 text-center mt-2 text-xl">
          Some description if needed
        </p>

        <div className="flex flex-row gap-1 mt-2">
          <div className="bg-lave bg-lavender-600 w-8 h-8 rounded-md"></div>
          <div className="bg-lave bg-lavender-500 w-8 h-8 rounded-md"></div>
          <div className="bg-lave bg-lavender-100 w-8 h-8 rounded-md"></div>
          <div className="bg-lave bg-salmon w-8 h-8 rounded-md"></div>
          <div className="bg-lave bg-leaf w-8 h-8 rounded-md"></div>
        </div>
        <Link href="/quiz">
          <a className="bg-lavender-600 py-3 px-6 text-xl font-semibold text-smoke rounded-lg mt-6 text-center">
            Satrt Quiz
          </a>
        </Link>

        <div className="absolute -bottom-[80px] -left-[80px]">
          <Image
            src="/images/azure-blob.svg"
            alt="blob"
            height={235}
            width={297}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
