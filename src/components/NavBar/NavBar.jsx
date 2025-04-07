import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/images/tutor-removebg-preview.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed container mx-auto w-full top-0 z-50 border-b shadow-md bg-white text-black">
      <nav className="container flex items-center justify-between relative py-2">
        <Link to="/">
          <div className="flex items-center">
            <div className="w-10 md:w-12 lg:w-16">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="text-lg font-semibold ml-2">TutorTap</h1>
          </div>
        </Link>

        <div
          className={`absolute top-14 container px-2 mx-auto flex justify-center w-full bg-white rounded-md py-4 shadow-md transition-all lg:static lg:w-auto lg:mx-0 lg:bg-transparent ${
            open ? "left-0 right-0" : "left-[800px]"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-2 lg:gap-5 text-black">
            <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/find-tutors" onClick={() => setOpen(false)}>Find Tutors</NavLink></li>
            <li><NavLink to="/addTutorials" onClick={() => setOpen(false)}>Add Tutorials</NavLink></li>
            <li><NavLink to="/my-tutorials" onClick={() => setOpen(false)}>My Tutorials</NavLink></li>
            <li><NavLink to="/my-booked-tutors" onClick={() => setOpen(false)}>My Booked Tutors</NavLink></li>
          </ul>
        </div>

        <div className="lg:hidden z-50 pr-4">
          <div
            className="cursor-pointer text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoCloseOutline /> : <RiMenu3Fill />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
