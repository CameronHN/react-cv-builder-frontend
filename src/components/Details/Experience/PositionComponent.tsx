import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import { IPosition } from "../../../interfaces/IPosition";
import { IPositionResponsibility } from "../../../interfaces/IPositionResponsibility";

const PositionComponent: React.FC = () => {
    // State to hold the positions and responsibilities data
    const [positions, setPositions] = useState<IPosition[]>([]);
    // State to hold any error messages
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      // Function to fetch responsibilities for a specific position
      const fetchResponsibilities = async (positionId: number) => {
        try {
          const response = await axiosInstance.get(`/PositionResponsibility/position/${positionId}`);
          const data = response.data;
          // Return the responsibilities if the data format is as expected
          return Array.isArray(data.$values) ? data.$values : [];
        } catch (error) {
          console.error(`Error fetching responsibilities for position ${positionId}:`, error);
          // Return an empty array if an error occurs
          return [];
        }
      };

    // Function to fetch positions and their responsibilities
    const fetchData = async () => {
        try {
          const response = await axiosInstance.get('/Position/user/1');
          const data = response.data;
  
          // Check if the data format is as expected
          if (data && Array.isArray(data.$values)) {
            const fetchedPositions = data.$values;
            // Fetch responsibilities for each position
            const positionsWithResponsibilities = await Promise.all(fetchedPositions.map(async (position: any) => {
              const responsibilities = await fetchResponsibilities(position.$id);
              // Combine the position with its responsibilities
              return { ...position, responsibilities };
            }));
            // Set the positions with responsibilities to the state
            setPositions(positionsWithResponsibilities.reverse());
          } else {
            setError('Unexpected data format received');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Failed to fetch position data');
        }
      };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (positions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {positions.map((position) => (
        <div key={position.id}>
          <h3>-- {position.role} --</h3>
          <p><b>Dates: </b>{position.startDate} / {position.endDate}</p>
          <h4>Responsibilities:</h4>
          {position.responsibilities &&
            position.responsibilities.map(
              (responsibility: IPositionResponsibility) => (
                <div key={responsibility.id}>{responsibility.responsibility}</div>
              )
            )}
        </div>
      ))}
    </div>
  );
};

export default PositionComponent;
