import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const MyBookTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (email) {
      fetchBookedTutors();
    }
  }, [email]);

  const fetchBookedTutors = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/booked-tutors?email=${email}`
      );
      setTutors(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleReview = async (id) => {
    try {
      const { data } = await axios.post("http://localhost:5000/booked-tutors", {
        userEmail: email,
        id,
      });
      if (data.success) {
        toast.success("Review submitted successfully");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pt-12 md:pt-16 lg:pt-20 min-h-[calc(100vh-300px)]">
      <div className="container mx-auto">
        <h2 className="font-bold text-lg md:text-xl lg:text-2xl my-5">
          My Booked Tutors
        </h2>

        <input
          type="email"
          placeholder="Enter your email to view bookings"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full max-w-md mb-6"
        />

        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead>
              <tr>
                <th className="p-3 md:text-xl">Image</th>
                <th className="p-3 md:text-xl">Tutor</th>
                <th className="p-3 md:text-xl">Language</th>
                <th className="p-3 md:text-xl">Price</th>
                <th className="p-3 md:text-xl">Review</th>
              </tr>
            </thead>
            <tbody>
              {tutors.map((tutor, index) => (
                <tr key={index} className="border shadow-md">
                  <td className="w-24 h-24 p-2">
                    <img
                      src={tutor?.photo_url || tutor?.photo}
                      alt="Tutor"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </td>
                  <td className="p-3 text-center md:text-lg">{tutor?.name}</td>
                  <td className="p-3 text-center md:text-lg">
                    {tutor?.language}
                  </td>
                  <td className="p-3 text-center md:text-lg">
                    BDT {tutor?.price}
                  </td>
                  <td className="p-3 text-center md:text-lg">
                    <button
                      onClick={() => handleReview(tutor?.tutor_id)}
                      className="btn btn-sm btn-accent"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookTutors;
