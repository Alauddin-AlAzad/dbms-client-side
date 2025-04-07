import axios from "axios";
import { useEffect, useState } from "react";

const Stats = () => {
  const [tutors, setTutors] = useState([]);
  const [userCount, setUserCount] = useState({});

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/tutors");
        setTutors(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTutors();
  }, []);

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/totalUser");
        setUserCount(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserStats();
  }, []);

  const totalReviews = tutors.reduce((sum, tutor) => sum + tutor.review, 0);

  return (
    <div className="container mt-16">
      <div className="text-center">
        <div className="flex flex-wrap justify-between md:w-4/5 mx-auto gap-4">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl lg:text-4xl">{tutors.length}+</h2>
            <p className="text-sm md:text-base">Experienced Tutors</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl lg:text-4xl">{totalReviews}+</h2>
            <p className="text-sm md:text-base">5-star Tutor Reviews</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl lg:text-4xl">9+</h2>
            <p className="text-sm md:text-base">Subjects Taught</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl lg:text-4xl">{userCount.result}+</h2>
            <p className="text-sm md:text-base">Tutor Nationalities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
