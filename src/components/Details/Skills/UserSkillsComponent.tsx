import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';

const UserSkillsComponent: React.FC = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const userId = 1;

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axiosInstance.get(`/UserSkill/${userId}/skills`);
        const data = response.data;
        console.log('Fetched Skills:', data);

        // Check if the data format includes $values
        if (data && Array.isArray(data.$values)) {
          setSkills(data.$values);
        } else {
          setError('Unexpected data format received');
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
        setError('Failed to fetch skills data');
      }
    };

    fetchSkills();
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (skills.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default UserSkillsComponent;
