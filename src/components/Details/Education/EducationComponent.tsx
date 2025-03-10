import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import { Education } from "../../../types/Education";

const UserEducationComponent: React.FC = () => {
  const [educationList, setEducationList] = useState<Education[]>([]);
  const [error, setError] = useState<string | null>(null);
  const userId = 1;

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axiosInstance.get(`/Education/user/${userId}`);
        const data = response.data;
        console.log("Fetched Education:", data);

        if (data && Array.isArray(data.$values)) {
          setEducationList(data.$values);
        } else {
          setError("Unexpected data format received");
        }
      } catch (error) {
        console.error("Error fetching education data:", error);
        setError("Failed to fetch education data");
      }
    };

    fetchEducation();
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (educationList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {educationList.map((education) => (
        <div key={education.id}>
          <h3>{education.institution}</h3>
          <p>Graduated with <b>{education.qualification}</b> in <b>{education.fieldOfStudy}</b></p>
          <p>Graduated <b>{education.endDate}</b></p>
          {education.major && <p>Majored in <b>{education.major}</b></p>}
        </div>
      ))}
    </div>
  );
};

export default UserEducationComponent;
