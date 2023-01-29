import Link from 'next/link'
import {RiHomeHeartFill} from 'react-icons/ri'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="py-3 mb-12 flex justify-between">
      <Link href=".">
        <RiHomeHeartFill className="cursor-pointer text-4xl hover:text-5xl dark:text-violet-50" />
      </Link>
      <ul className="flex items-center pl-5">
        <li>
          <BsFillMoonStarsFill onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer text-2xl hover:text-3xl dark:text-violet-50"/>
        </li>
        <li>
          <Link className="font-burtons bg-gradient-to-r from-pink-200 to-pink-500 px-4 py-2 rounded-md ml-8 hover:text-lg dark:bg-gradient-to-r dark:from-violet-300 dark:to-violet-700" href="experience">experience</Link>
        </li>
        <li>
          <Link className="font-burtons bg-gradient-to-r from-pink-500 to-pink-200 px-4 py-2 rounded-md ml-8 hover:text-lg dark:bg-gradient-to-r dark:from-violet-300 dark:to-violet-700" href="projects">projects</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
