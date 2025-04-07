import { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyTutorials = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetchAllTutors();
  }, []);

  const fetchAllTutors = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/tutors");
      setTutors(data);
    } catch (err) {
      console.error("Error fetching tutors:", err);
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
          fetchAllTutors(); // Refresh the list
        } catch (err) {
          console.error("Delete failed:", err);
        }
      }
    });
  };

  return (
    <div className="pt-12 md:pt-16 lg:pt-20">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-xl lg:text-2xl mb-6 text-center">All Tutorials</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-center border border-gray-300 rounded">
            <thead className="bg-gray-200">
              <tr>
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
              {tutors.length > 0 ? (
                tutors.map((tutor) => (
                  <tr key={tutor.id} className="border-b">
                    <td className="p-3 w-24 h-24">
                      <img
                        src={tutor.photo}
                        alt="Tutor"
                        className="w-full h-full object-cover rounded-full"
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
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleDelete(tutor.id)}
                          className="text-red-600 hover:text-red-800"
                          title="Delete"
                        >
                          <MdDeleteForever size={20} />
                        </button>
                        <Link to={`/update/${tutor.id}`} title="Edit">
                          <FaRegPenToSquare size={18} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="p-4 text-gray-500">
                    No tutorials found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTutorials;
