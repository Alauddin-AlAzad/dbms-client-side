import { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyTutorials = () => {
  const [tutors, setTutors] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (email) {
      fetchTutorsByEmail();
    }
  }, [email]);

  const fetchTutorsByEmail = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/tutors/${email}`);
      setTutors(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This tutorial will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/tutors/${id}`);
          Swal.fire("Deleted!", "Tutorial has been deleted.", "success");
          fetchTutorsByEmail();
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

  return (
    <div className="pt-12 md:pt-16 lg:pt-20">
      <div className="container mx-auto">
        <h2 className="font-bold text-xl lg:text-2xl mb-4">My Tutorials</h2>

        <input
          type="email"
          placeholder="Enter your email to view tutorials"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full max-w-md mb-6"
        />

        <div className="overflow-x-auto">
          <table className="min-w-full text-xs lg:text-sm">
            <thead className="bg-gray-200">
              <tr className="text-center">
                <th className="p-3">Image</th>
                <th className="p-3">Tutor</th>
                <th className="p-3">Language</th>
                <th className="p-3">Price</th>
                <th className="p-3">Description</th>
                <th className="p-3">Review</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tutors.map((tutor) => (
                <tr key={tutor.id} className="border-b text-center">
                  <td className="p-2 w-24 h-24">
                    <img
                      src={tutor.photo}
                      alt="Tutor"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </td>
                  <td className="p-3">{tutor.name}</td>
                  <td className="p-3">{tutor.language}</td>
                  <td className="p-3">BDT {tutor.price}</td>
                  <td className="p-3">
                    {tutor.description?.substring(0, 30)}...
                  </td>
                  <td className="p-3">{tutor.review}</td>
                  <td className="p-3">
                    <div className="flex gap-3 justify-center">
                      <button onClick={() => handleDelete(tutor.id)}>
                        <MdDeleteForever size={20} />
                      </button>
                      <Link to={`/update/${tutor.id}`}>
                        <FaRegPenToSquare size={18} />
                      </Link>
                    </div>
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

export default MyTutorials;
