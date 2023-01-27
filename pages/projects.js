import Navbar from 'components/navbar'
import Image from "next/image"
import tiger from '../public/tiger.png'
import music from '../public/music.png'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="bg-pink-50 px-10 md:px-10 lg:px-20 dark:bg-violet-900">
        <section className=" bg-pink-50 min-h-screen dark:bg-violet-900">
          <Navbar />
          <h1 className="text-4xl -mt-10 mb-10 text-pink-900 font-burtons text-center md:text-5xl dark:text-violet-50">My Projects</h1>
          <p className="text-md -mt-5 text-center max-w-lg mx-auto text-pink-800 leading-8 md:text-l dark:text-violet-200">A WIP! I like working with data/ML and also have some backend experience. This website is my first large-scale frontend project and I had a ton of fun making it my own :) </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="cursor-pointer basis-1/3 flex-1 hover:bg-pink-100 dark:hover:bg-violet-800">
              <Link href="/tigerproj">
                <Image src={tiger} alt=""  className="rounded-lg object-cover shadow-lg dark:shadow-violet-700"/>
                <h3 className="text-xl font-medium text-center py-2 dark:text-violet-50">SpaceTiger</h3>
                <p className="text-md text-justify mx-auto leading-7 dark:text-violet-200"> A website for students to find and review spaces on campus! I worked in a group of 5, mainly on the backend, and learned how to use tools like SQL and SQLAlchemy along the way. </p>
              </Link>
            </div>
            <div className=" cursor-pointer basis-1/3 flex-1 hover:bg-pink-100 dark:hover:bg-violet-800">
              <Link href="/songproj">
                <Image src={music} alt="" className="rounded-lg object-cover shadow-lg dark:shadow-violet-700" />
                <h3 className="text-xl font-medium text-center py-2 dark:text-violet-50">Song Popularity Prediction</h3>
                <p className="text-md text-justify mx-auto leading-7 dark:text-violet-200">I wanted to know if it was possible to predict the popularity of a song using its acoustic features alone. I used Machine Learning (and several Python libraries like NumPy, pandas, and sklearn) to find out!</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}