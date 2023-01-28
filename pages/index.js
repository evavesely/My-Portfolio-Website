import Navbar from 'components/navbar'
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai'
import {AiFillFilePdf} from 'react-icons/ai'
import {BsStars} from 'react-icons/bs'
import Image from "next/image"
import ppic from '../public/PPic.png'
import Script from "next/script"

export default function Home() {
  return (
    <>
      <div>
      <Script src="https://unpkg.com/cursor-effects@latest/dist/browser.js" onLoad={() => {new cursoreffects.fairyDustCursor()}}></Script>
      <main className="bg-pink-50 px-10 md:px-10 lg:px-20 dark:bg-violet-900">
        <section className=" bg-pink-50 min-h-screen dark:bg-violet-900">
          <Navbar />
          <div className="lg:flex lg:gap-16 mt-36">
            <div>
              <div className="p-5 flex gap-16 justify-center dark:text-violet-50">
                <BsStars className="text-3xl -mr-12"/>
                <h2 className="text-5xl font-medium font-burtons md:text-6xl"> Eva Vesely </h2>
                <BsStars className="text-3xl -ml-12"/>
              </div>
              <div className="text-center p-5">
                <h3 className="text-2xl -mt-10 mb-5 font-medium text-pink-900 py-2  md:text-3xl dark:text-violet-300">Computer Science Major at Princeton University</h3>
                <p className="text-md max-w-2xl mx-auto text-pink-800 py-3 leading-8 md:text-xl dark:text-violet-300">
                  Hey! My name is Eva and I&apos;m a Junior majoring in CS with a minor in Statistics and Machine Learning at Princeton University. 
                  In my free time I like to read, write, do yoga, and work as a barista at my school&apos;s student run coffee shop :)
                </p>
              </div>
              <div className="cursor-pointer text-5xl flex gap-16 justify-center dark:text-violet-50">
                <a href="https://www.linkedin.com/in/eva-vesely-17a275204/">
                  <AiFillLinkedin className="hover:text-6xl" />
                </a>
                <a href="https://github.com/evavesely">
                  <AiFillGithub className="hover:text-6xl" />
                </a>
                <a href="https://drive.google.com/file/d/1VUHL5nbnKMk1zi_MVFc1TDIkxQ9o1Kha/view?usp=share_link">
                  <AiFillFilePdf className="hover:text-6xl" />
                </a>
              </div>
            </div>
            <div className="relative rounded-full overflow-hidden mx-auto w-80 h-80 shrink-0 mt-8 lg:h-96 lg:w-96 lg:mt-0 shadow-xl dark:shadow-violet-700">
            <Image src={ppic} alt="" fill="True" object-fit="cover" /> 
            </div>
          </div>
        </section>
      </main>
      </div>
    </>
  )
}