import { IEducation } from "../../../interfaces/IEducation";

export const EducationComponent: React.FC<{ data: IEducation[] }> = ({ data }) => (
    <div>
        {
            data.map((educationSet, index) => (
                <div key={index}>
                    <h3>{educationSet.institute}</h3>
                    <p>{educationSet.qualification}, {educationSet.dateOfGraduation}</p>
                    <b>Majors:</b>
                    {educationSet.major.map((major) => (
                        <div>{major}</div>
                    ))}
                </div>
            ))
        }
        <br />
    </div>

);

export default EducationComponent;