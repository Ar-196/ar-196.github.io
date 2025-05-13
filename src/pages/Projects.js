function Projects() {
  return (
    <div id="projects">
      <div className="mx-auto w-3/4 items-center justify-between flex flex-col p-5">
        <p className="text-3xl font-poppins"> 
          Some of my personal projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-center p-5 md:p-10">
          <ProjectItem 
            title="MemGame" 
            year="2021"
            img="images/MemGame.png"
            desc="An old project I made as an assignment for Year 11 SDD. 
              It is a small application with two games: Image Match and Word Blitz.
              It uses Visual Basic, and is coded for .NET 4.0."
            links={[
              {
                href: "https://github.com/Ar-196/MemGame",
                buttonContent: <><span className="fa-brands fa-github"></span> GitHub</>
              },
              {
                href: "./files/MemGame.zip",
                buttonContent: <><span className="fa-solid fa-download"></span> Download</>
              }
            ]}
          />
          <ProjectItem 
            title="TTKOF" 
            year="2022"
            img="images/TTKOF_2.png"
            desc="A very short platformer/beat-em-up game that I made for my SDD className in Year 12.
              Coded in Unity and C#, I consider it the best thing I made in high school. 
              Unfortunately, I don't have any of the source code for this game,
              only the final build."
            links={[
              {
                href: "./files/TTKOF.zip",
                buttonContent: <><span className="fa-solid fa-download"></span> Download</>
              }
            ]}
          />
          <ProjectItem 
            title="ar-196.github.io" 
            year="2024"
            desc="A website I made to flesh out and show my personal projects, 
            and also to get exposure to web development (and also some practice 
            for COMP3900). Uses React.js and Tailwindcss."
            links={[
              {
                href: "https://github.com/Ar-196/ar-196.github.io",
                buttonContent: <><span className="fa-brands fa-github"></span> GitHub</>
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function ProjectItem({ title, year, img, desc, links }) {
  return (
    <div className="rounded p-4 bg-slate-100 flex flex-col justify-center">
      <p className="text-2xl font-semibold font-mono">
        {title} 
      </p>
      <p className="text-xl">
        {year}
      </p>
      <img className="rounded p-4" src={img} />
      <p className="text-base px-4 pb-4 font-redrose">
        {desc}
      </p>
      <div className="justify-evenly">
        {
          links.map((linkInfo) => <ProjectLink key={linkInfo.href + Math.random()} href={linkInfo.href} buttonContent={linkInfo.buttonContent} />)
        }
      </div>
    </div>
  )
}

function ProjectLink({ href, buttonContent }) {
  return (
    <a className="px-1" href={href}>
      <button className="bg-sky-500 hover:bg-sky-700 active:bg-violet-500 text-white font-bold py-2 px-4 rounded">
        {buttonContent}
      </button>
    </a>
  );
}

export default Projects;