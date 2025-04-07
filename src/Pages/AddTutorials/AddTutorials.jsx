import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const AddTutorials = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = Object.fromEntries(new FormData(form));
    formData.review = 0;

    try {
      const { data } = await axios.post("http://localhost:5000/tutors", formData);
      if (data.insertId) {
        Swal.fire({
          title: "Tutor added successfully!",
          icon: "success",
        });
        navigate("/my-tutorials");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pt-12 md:pt-16 lg:pt-20">
      <div className="container">
        <div className="w-full max-w-lg overflow-hidden rounded-lg shadow-lg border mx-auto bg-white">
          <div className="w-full px-6 py-8 md:px-8">
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b lg:w-1/4"></span>
              <div className="text-xl font-bold text-center uppercase hover:underline">Add Tutorials</div>
              <span className="w-1/5 border-b lg:w-1/4"></span>
            </div>
            <form onSubmit={handleAdd}>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-4 py-2 border rounded-lg"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-2 border rounded-lg"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium">Image</label>
                <input
                  name="photo"
                  required
                  className="block w-full px-4 py-2 border rounded-lg"
                  type="text"
                  placeholder="Paste image URL"
                />
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium">Language</label>
                <select
                  name="language"
                  required
                  className="block w-full px-4 py-2 border rounded-lg"
                >
                  <option disabled selected>Pick your language</option>
                  <option>Bangla</option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>German</option>
                  <option>French</option>
                  <option>Chinese</option>
                  <option>Japanese</option>
                  <option>Arabic</option>
                  <option>Italian</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium">Price</label>
                <input
                  name="price"
                  required
                  className="block w-full px-4 py-2 border rounded-lg"
                  type="number"
                  placeholder="Enter price"
                />
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  required
                  className="block w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter description"
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTutorials;
