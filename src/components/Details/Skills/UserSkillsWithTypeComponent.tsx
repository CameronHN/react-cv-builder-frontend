import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

interface SkillWithType {
  skillId: number;
  skillName: string;
  skillType: {
    skillTypeId: number;
    skillTypeName: string;
  };
}

interface UserSkillsResponse {
  userId: number;
  skills: {
    $values: SkillWithType[];
  };
}

const UserSkillsWithTypeComponent: React.FC = () => {
  const [skillsWithTypes, setSkillsWithTypes] = useState<SkillWithType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const userId = 1;

  useEffect(() => {
    const fetchSkillsWithTypes = async () => {
      try {
        const response = await axiosInstance.get(
          `/UserSkill/${userId}/skills-with-type`
        );
        const data: UserSkillsResponse = response.data;
        console.log("Fetched Skills with Types:", data);

        if (data && data.skills && Array.isArray(data.skills.$values)) {
          setSkillsWithTypes(data.skills.$values);
        } else {
          setError("Unexpected data format received");
        }
      } catch (error) {
        console.error("Error fetching skills with types:", error);
        setError("Failed to fetch skills data");
      }
    };

    fetchSkillsWithTypes();
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (skillsWithTypes.length === 0) {
    return <div>Loading...</div>;
  }

  // Group skills by skillType
  const groupedSkills: Record<string, string[]> = skillsWithTypes.reduce(
    (acc, skill) => {
      const { skillTypeName } = skill.skillType;
      if (!acc[skillTypeName]) {
        acc[skillTypeName] = [];
      }
      acc[skillTypeName].push(skill.skillName);
      return acc;
    },
    {} as Record<string, string[]>
  );

  return (
    <div>
      {Object.entries(groupedSkills).map(([skillTypeName, skillNames]) => (
        <div key={skillTypeName}>
          <h3>{skillTypeName}</h3>
          <div>
            {skillNames.map((skillName, index) => (
              <div key={index}>{skillName}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserSkillsWithTypeComponent;
