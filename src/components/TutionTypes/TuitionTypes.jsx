import image1 from "./../../assets/images/lovepik-teacher-who-gives-home-tutoring-png-image_401202180_wh1200-removebg-preview.png";
import image2 from "./../../assets/images/video_conferece_02-removebg-preview.png";
import image3 from "./../../assets/images/7680-removebg-preview.png";

const TuitionTypes = () => {
  return (
    <div className="container mt-10">
      <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-center">
        Tuition Types
      </h2>
      <p className="text-center my-2 opacity-70">
        Find the Best Tuition Type which suits you most
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {/* Home Tutoring */}
        <div className="flex flex-col items-center justify-center border rounded-lg shadow-xl p-6">
          <img src={image1} alt="Home Tutoring" className="w-full" />
          <div className="space-y-2 mt-2">
            <h2 className="text-lg md:text-xl font-bold text-center">Home Tutoring</h2>
            <p className="text-sm opacity-80 text-center">
              Looking for one-to-one classes?
            </p>
            <p className="text-center font-semibold opacity-70">
              It’s a unique opportunity to learn in the home with your
              expected future in different categories everything is in favor
              of your need.
            </p>
          </div>
        </div>

        {/* Online Tutoring */}
        <div className="flex flex-col items-center justify-center border rounded-lg shadow-xl p-6">
          <img src={image2} alt="Online Tutoring" className="w-full" />
          <div className="space-y-2 mt-2">
            <h2 className="text-lg md:text-xl font-bold text-center">Online Tutoring</h2>
            <p className="text-sm opacity-80 text-center">
              Are you left with any doubts?
            </p>
            <p className="text-center font-semibold opacity-70">
              Connect with the best tutors from anywhere and take online
              classes using modern tools. Make your life easier with this process.
            </p>
          </div>
        </div>

        {/* Group Tutoring */}
        <div className="flex flex-col items-center justify-center border rounded-lg shadow-xl p-6">
          <img src={image3} alt="Group Tutoring" className="w-full" />
          <div className="space-y-2 mt-2">
            <h2 className="text-lg md:text-xl font-bold text-center">Group Tutoring</h2>
            <p className="text-sm opacity-80 text-center">
              Need a competitive & affordable experience?
            </p>
            <p className="text-center font-semibold opacity-70">
              A group of students can fulfill their hunger for learning
              with more affordable fees. Get the opportunity for
              knowledge-sharing!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionTypes;
