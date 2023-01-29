const Experiencecard = ({ title, desc, year, company}) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white z-10 mx-4 dark:bg-violet-50 dark:shadow-violet-600">
      <h1 className="absolute -top-10 -left-5 text-2xl sm:text-4xl text-gray-200 font-bold dark:text-violet-700">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <h1 className="text-gray-500 dark:text-gray-700"> {company}</h1>
      <p className="text-gray-600 dark:text-gray-900">{desc}</p>
    </div>
  )
}

export default Experiencecard