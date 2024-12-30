function App() {
  return (
    <div class="max-w-full bg-slate-50 text-black">
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav class="flex items-center justify-between flex-wrap bg-sky-400 p-6 rounded-b-3xl fixed w-screen top-0 shadow">
        <div class="flex items-center flex-shrink-0 mr-6">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="font-semibold text-xl tracking-tight">Ar-196</span>
          </a>
        </div>
        <button type="button" data-collapse-toggle = "navbar-collapsible" aria-controls = "navbar-collapsible" aria-expanded = "false" class="md:hidden text-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
        <div id="navbar-collapsible" class="w-full block flex-grow md:flex lg:items-center md:w-auto hidden">
          <div class="text-sm lg:flex-grow">
            <ul class="md:flex items-center justify-left">
              <HeaderButton href="#about-me" displayText="About me" />
              <HeaderButton href="#projects" displayText="Projects" />
              <HeaderButton href="#" displayText="Opt 3" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
function HeaderButton({ href, displayText }) {
  return (
    <li class="mr-6 hover:text-white">
      <a href={href}>
        {displayText}
      </a>
    </li>
  );
}

function AboutMe() {
  return (
    <div id="about-me" class="pt-20">
      <div class="border-2 p-10 md:p-15 flex flex-col justify-center items-center w-3/4 mx-auto">
        <p class="text-3xl"> 
          Welcome to my site! 
        </p>
        <p class="pt-6 pb-3">
          Hello, my name is Ar-196, and this is my website, which I made mainly 
          to mess around with web development. 
          <br /><br />
          There are also a few projects from high school which I haven't maintained properly, 
          but would still like to show nonetheless.
          <br /><br />
          I would also like to show a few more things, 
          like future projects, and other things that I have done.
        </p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="projects" class="pt-20">
      <div class="mx-auto w-3/4 items-center justify-between flex flex-col p-5">
        <p class="text-3xl"> 
          Some of my personal projects
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-center p-5 md:p-10">
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
                buttonContent: <><span class="fa-brands fa-github"></span>GitHub</>
              },
              {
                href: "./files/MemGame.zip",
                buttonContent: <><span class="fa-solid fa-download"></span>Download</>
              }
            ]}
          />
          <ProjectItem 
            title="TTKOF" 
            year="2022"
            img="images/TTKOF_2.png"
            desc="A very short platformer/beat-em-up game that I made for my SDD class in Year 12.
              Coded in Unity and C#, I consider it the best thing I made in high school. 
              Unfortunately, I don't have any of the source code for this game,
              only the final build."
            links={[
              {
                href: "./files/TTKOF.zip",
                buttonContent: <><span class="fa-solid fa-download"></span>Download</>
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
    <div class="rounded p-4 bg-slate-100">
      <p class="text-2xl font-semibold">
        {title} 
      </p>
      <p class="text-xl">
        {year}
      </p>
      <img class="rounded p-4" src={img} />
      <p class="text-base px-4 pb-4">
        {desc}
      </p>
      <div class="justify-evenly">
        {
          links.map((linkInfo) => <ProjectLink href={linkInfo.href} buttonContent={linkInfo.buttonContent} />)
        }
      </div>
    </div>
  )
}

function ProjectLink({ href, buttonContent }) {
  return (
    <a class="px-1" href={href}>
      <button class="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
        {buttonContent}
      </button>
    </a>
  );
}

export default App;
