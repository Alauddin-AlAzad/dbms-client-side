import { Link } from "react-router-dom";

const TutorCard = ({ tutor }) => {
  const { name, photo, language, review, description, id } = tutor;

  return (
    <div className="p-6 rounded-md shadow-md border bg-white">
      <img
        src={photo}
        alt={name}
        className="object-cover object-center w-full rounded-md h-72"
      />
      <div className="flex items-center justify-between mt-6 mb-2">
        <div>
          <span className="block text-xs font-medium uppercase text-gray-500">
            Tutor
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
        <div>
          <span className="block text-xs font-medium uppercase text-gray-500">
            Language
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{language}</h2>
        </div>
      </div>
      <p className="text-gray-700">{description?.substring(0, 100)}...</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm font-medium text-gray-600">
          Review: {review}
        </span>
        <Link to={`/tutor/${id}`}>
          <button
            type="button"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-sm py-2 px-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TutorCard;
