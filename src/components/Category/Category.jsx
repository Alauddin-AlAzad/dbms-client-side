import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import img1 from "./../../assets/images/icons/clock-tower.png"
import img2 from "./../../assets/images/icons/building-tower.png"
import img3 from "./../../assets/images/icons/landmark.png"
import img4 from "./../../assets/images/icons/condominium.png"
import img5 from "./../../assets/images/icons/skyscraper.png"
import img6 from "./../../assets/images/icons/building.png"
import img7 from "./../../assets/images/icons/jesus.png"
import img8 from "./../../assets/images/icons/parthenon.png"
import img9 from "./../../assets/images/icons/poland.png"

const languages = [
  { name: "English", img: img1 },
  { name: "Spanish", img: img2 },
  { name: "French", img: img3 },
  { name: "German", img: img4 },
  { name: "Italian", img: img5 },
  { name: "Bangla", img: img6 },
  { name: "Japanese", img: img7 },
  { name: "Portugal", img: img8 },
  { name: "Arabic", img: img9 },
];

const Category = () => {
  return (
    <div className="container grid grid-cols-2 md:grid-cols-3 gap-2 py-16">
      <h2 className="col-span-2 md:col-span-3 text-center font-bold text-2xl lg:text-3xl mb-3">
        Category
      </h2>

      {languages.map((lang) => (
        <Link to={`/find-tutors/${lang.name}`} key={lang.name}>
          <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <img src={lang.img} alt={lang.name} className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">{lang.name} tutors</h2>
              </div>
            </div>
            <div className="text-lg">
              <IoIosArrowForward />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
