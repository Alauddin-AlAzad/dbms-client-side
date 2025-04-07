import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateTutorial = () => {
  const [tutor, setTutor] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const { name, email, description, photo, language, price, review } = tutor;

  useEffect(() => {
    fetchTutor();
  }, []);

  const fetchTutor = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/tutor/${id}`);
      setTutor(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = Object.fromEntries(new FormData(form));
    formData.review = review;

    try {
      const { data } = await axios.put(`http://localhost:5000/tutors/${id}`, formData);
      if (data.success || data.affectedRows > 0) {
        Swal.fire({
          title: "Tutor updated successfully!",
          icon: "success",
        });
        navigate("/my-tutorials");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pt-12 md:pt-16 lg:pt-20 container">
      <div className="w-full max-w-lg overflow-hidden rounded-lg shadow-lg border mx-auto bg-white">
        <div className="w-full px-6 py-8 md:px-8">
          <h2 className="text-xl font-bold text-center uppercase mb-6">Update Tutorial</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                name="name"
                defaultValue={name}
                required
                className="input input-bordered w-full"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                name="email"
                defaultValue={email}
                required
                className="input input-bordered w-full"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Image</label>
              <input
                name="photo"
                defaultValue={photo}
                required
                className="input input-bordered w-full"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Language</label>
              <select
                name="language"
                defaultValue={language}
                required
                className="select select-bordered w-full"
              >
                <option disabled>Pick your language</option>
                <option>Bangla</option>
                <option>English</option>
                <option>Spanish</option>
                <option>German</option>
                <option>French</option>
                <option>Chinese</option>
                <option>Japanese</option>
                <option>Arabic</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Price</label>
              <input
                name="price"
                defaultValue={price}
                required
                className="input input-bordered w-full"
                type="number"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">Description</label>
              <textarea
                name="description"
                defaultValue={description}
                rows="5"
                required
                className="textarea textarea-bordered w-full"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTutorial;
