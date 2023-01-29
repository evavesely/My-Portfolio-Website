import Navbar from 'components/navbar'
import Image from "next/image"
import tiger3 from '../public/tiger3.png'
import tiger2 from '../public/tiger2.png'
import {BsStars} from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <main className="bg-pink-50 px-10 md:px-10 lg:px-20 dark:bg-violet-900">
        <section className=" bg-pink-50 min-h-screen dark:bg-violet-900">
          <Navbar />
          
          <div className="p-5 flex gap-16 justify-center">
            <BsStars className="text-3xl text-pink-900 -mr-12 dark:text-violet-50"/>
            <h3 className="text-2xl sm:text-3xl text-pink-900 font-burtons text-center md:text-4xl dark:text-violet-50">Space Tiger</h3>
            <BsStars className="text-3xl text-pink-900 -ml-12 dark:text-violet-50"/>
          </div>

          <div className="text-center max-w-xl mx-auto p-5">
            <h3 className="text-xl sm:text-2xl font-medium mb-10 md:text-3xl dark:text-violet-300">A website for students to find and review spaces on campus</h3>
            <div className="h-auto">
                <Image src={tiger3} alt="" className="rounded-lg object-cover shadow-lg dark:shadow-violet-700"/>
            </div>
            <h1 className="font-semibold text-md text-justify py-5 md:text-xl dark:text-violet-200">
            Project Overview
            </h1>

            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            I worked in a team of five students to develop a web app for students to discover spaces on campus as a final project for my COS333 (Advanced Programming) class. The app allows students to search and filter for a space that fits their needs, add a new space to the website, review a space they&apos;ve been to, and favorite a space to view it on their profile later.
            <br></br>
            <br></br>
            I was mainly on the backend, and my main contributions were:
            </p>

            <ul className="list-disc text-md text-justify mt-5 leading-8 md:text-xl dark:text-violet-200">
            <li>Designing the database framework in Figma by deciding which tables would be in our database, the datatypes of each column, and the relationships between the tables </li>
            <br></br>
            <div className="h-auto">
                <Image src={tiger2} alt="" className="rounded-lg object-cover shadow-lg dark:shadow-violet-700" />
            </div>
            <br></br>
            <li>Developing the APIs that would be used by the frontend for search and review capabilities</li>
            <br></br>
            <li>And finally, writing database functions using SQLAlchemy which allow API calls to manipulate our SQL tables (which are hosted on ElephantSQL). This allowed for functionalities like posting a review, adding a space, or updating a space&apos;s average rating based on a posted review</li>
            </ul>

            <h1 className="font-semibold text-md text-justify py-5 leading-8 md:text-xl dark:text-violet-200">
            My Takeaways
            </h1>
            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            I had never used SQL or built a web app before this class, so this project was a huge learning experience for me. I found SQLAlchemy to be really intuitive and helpful, though I could see the benefits of using a document-oriented database in the future.
            <br></br>
            <br></br>
            In addition, I had never worked in a group on a CS project before (only with partners) and found it to be a really enjoyable experience! Everyone was helpful and eager to collaborate, and the way we organized our team into frontend and backend was very efficient. 
            Overall, it was super cool to see everyone&apos;s different knowledge bases come together to form one cohesive final product. 
            </p>
          </div>
        </section>
      </main>
    </>
  )
}