import Navbar from 'components/navbar'
import Experiencecard from 'components/experiencecard'
import userData from 'constants/data'

export default function Home() {
  return (
    <>
      <main className="bg-pink-50 px-10 md:px-10 lg:px-20 dark:bg-violet-900">
        <section className=" bg-pink-50 min-h-screen dark:bg-violet-900">
          <Navbar />
          <h1 className="text-4xl -mt-10 mb-10 text-pink-900 font-burtons text-center md:text-5xl dark:text-violet-50">My Experience</h1>
          <p className="text-md -mt-5 mb-5 text-center max-w-lg mx-auto text-pink-800 leading-8 md:text-l dark:text-violet-200">Some skills I&apos;ve picked up along the way include: JavaScript, Java, Python (NumPy, pandas, sklearn, PyTorch), R, C, Jira, Confluence, Slack,
          GitHub, SQL/ SQLite/ SQLAlchemy, Flask, Node.js, HTML/CSS, and REST API</p>
          <div>
            <div className="grid grid-cols-1 max-w-xl mx-auto pt-10">
              {/* Experience card */}
              {userData.experience.map((exp, idx) => (
                <>
                  <Experiencecard
                    key={idx}
                    title={exp.title}
                    desc={exp.desc}
                    year={exp.year}
                    company={exp.company}
                  />
                  {idx === userData.experience.length - 1 ? null : (
                    <div className="divider-container flex flex-col items-center -mt-2">
                      <div className="w-4 h-4 bg-pink-700 rounded-full relative z-10 dark:bg-violet-700">
                        <div className="w-4 h-4 bg-pink-700 rounded-full relative z-10 animate-ping dark:bg-violet-700"></div>
                      </div>
                      <div className="w-1 h-24 bg-pink-200 rounded-full -mt-2 dark:bg-violet-200"></div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}