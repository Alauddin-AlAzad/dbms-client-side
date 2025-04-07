import { CiLinkedin } from "react-icons/ci";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-10 bg-gray-100">
      <footer className="py-10 shadow-lg border rounded-md container px-4 bg-white">
        <div className="container mx-auto text-center space-y-4">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 text-xl">
            <Link className="hover:text-blue-600 transition">
              <FaFacebook />
            </Link>
            <Link className="hover:text-pink-600 transition">
              <FaInstagramSquare />
            </Link>
            <Link className="hover:text-sky-500 transition">
              <FaTwitter />
            </Link>
            <Link className="hover:text-blue-500 transition">
              <CiLinkedin />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="space-x-8 text-sm uppercase font-bold">
            <Link to="/" className="hover:text-gray-500 transition">
              Home
            </Link>
            <Link to="/find-tutors" className="hover:text-gray-500 transition">
              Find Tutors
            </Link>
            <Link to="/my-tutorials" className="hover:text-gray-500 transition">
              My Tutorials
            </Link>
            <Link className="hover:text-gray-500 transition">Contact Us</Link>
            <Link className="hover:text-gray-500 transition">Our Team</Link>
          </div>

          {/* Copyright Text */}
          <div className="text-sm border-t pt-4">
            <p>
              Copyright © {new Date().getFullYear()}; All Rights Reserved by{" "}
              <span className="font-bold">TutorTap</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
