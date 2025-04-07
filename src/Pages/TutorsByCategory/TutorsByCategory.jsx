import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TutorCard from '../../components/TutorCard/TutorCard';

const TutorsByCategory = () => {
  const [tutors, setTutors] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/tutors');
        // Filter by category (language) in frontend
        const filtered = data.filter(tutor =>
          tutor.language?.toLowerCase() === category?.toLowerCase()
        );
        setTutors(filtered);
      } catch (err) {
        console.error(err);
      }
    };

    loadData();
  }, [category]);

  return (
    <div className="pt-12 md:pt-16 lg:pt-20 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Tutors for: {category}</h2>
        {tutors.length === 0 ? (
          <p>No tutors found for this category.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorsByCategory;
