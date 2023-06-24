import './Experience.css';
import ExperienceCard from "./ExperienceCard";
import {useEffect, useState} from "react";
function Experience() {
    const [exp,setExp] = useState([])

    useEffect(() => {
        fetch('/TNAF-Zal/ExperienceHistory.json')
            .then(response => response.json())
            .then(data => {
                setExp(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="mainBox">
            <h1>Experience</h1>
            <div className="timeline">
                <div className="outer">
                    {exp.map(element =>
                        <ExperienceCard
                            companyName={element.companyName}
                            startDate={element.startDate}
                            endDate={element.endDate}
                            description={element.description}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experience;
