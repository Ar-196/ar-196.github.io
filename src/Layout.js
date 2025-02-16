import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div className="max-w-full bg-slate-50 text-black">
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-sky-400 p-6 rounded-b-3xl fixed w-screen top-0 shadow">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link className="-m-1.5 p-1.5 font-semibold text-xl tracking-tight" to="/">Ar-196</Link>
          </div>
          <button type="button" data-collapse-toggle = "navbar-collapsible" aria-controls = "navbar-collapsible" aria-expanded = "false" className="md:hidden text-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
          <div id="navbar-collapsible" className="w-full block flex-grow md:flex lg:items-center md:w-auto hidden">
            <div className="text-sm lg:flex-grow">
              <ul className="md:flex items-center justify-left">
                <HeaderButton href="/projects" displayText="Projects" />
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div class="pt-20"/>

      <Outlet/>
    </div>
  );
}

function HeaderButton({ href, displayText }) {
  return (
    <li className="mr-6 hover:text-white">
        <Link to={href}>{displayText}</Link>
    </li>
  );
}