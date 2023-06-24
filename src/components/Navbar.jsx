/* eslint-disable react/prop-types */
import {Searcher} from "./Searcher"
import logo from "../assets/logo.svg"
function Navbar({filters,setFilters}) {
  return (
    <nav className="flex w-full justify-between pt-8 flex-col gap-10 md:flex-row">
        <img className="w-36" src={logo} alt="logo" />
        <Searcher filters={filters} setFilters={setFilters}/>
    </nav>
  )
}

export {Navbar}