import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const TutorDetails = () => {
  const [tutor, setTutor] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const { details } = useParams();

  useEffect(() => {
    fetchTutorDetails();
  }, []);

  const fetchTutorDetails = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/tutor/${details}`);
      setTutor(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBookTutor = async () => {
    if (!userEmail) return toast.error("Please enter your email");

    if (userEmail === tutor.email) {
      return toast.error("You can't book yourself!");
    }

    const bookingData = {
      tutorId: tutor.id,
      name: tutor.name,
      photo: tutor.photo,
      language: tutor.language,
      price: tutor.price,
      tutorEmail: tutor.email,
      userEmail,
    };

    try {
      const { data } = await axios.post("http://localhost:5000/booked-tutors", bookingData);
      if (data.success || data.insertId) {
        Swal.fire({
          title: "Tutor booked successfully!",
          icon: "success",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pt-12 md:pt-16 lg:pt-20">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Tutor Details</h2>
        <div className="flex flex-col md:flex-row justify-between gap-6 border p-6 shadow-lg rounded-lg">
          {/* Left: Tutor Info */}
          <div className="flex flex-col md:flex-row gap-4 md:w-2/3">
            <div className="w-full md:w-32 h-64">
              <img
                src={tutor.photo}
                alt={tutor.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="md:w-3/5">
              <h2 className="text-2xl font-bold">{tutor.name}</h2>
              <p className="text-sm mt-1 text-gray-500">Super Tutor</p>
              <p className="text-base mt-2">
                Language: <strong>{tutor.language}</strong>
              </p>
              <p className="text-base text-gray-700 mt-2">{tutor.description}</p>
            </div>
          </div>

          {/* Right: Booking Info */}
          <div className="flex flex-col w-full md:w-auto gap-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 font-bold text-xl">★ 5</span>
              <span className="text-lg">({tutor.review} reviews)</span>
            </div>
            <div>
              <p className="text-xl font-semibold">BDT {tutor.price}</p>
              <p className="text-sm">50-min lesson</p>
            </div>

            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />

            <button
              onClick={handleBookTutor}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-lg rounded-md"
            >
              Book Trial Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
