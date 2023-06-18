import {useState} from "react";

function ExperienceCard(props) {
    let companyName = props.companyName
    let startDate = props.startDate
    let endDate = props.endDate
    let description = props.description

    return (
        <div className="card">
            <div className="info">
                <span className="title">{companyName}</span>
                <span className="titleDate">{startDate}-{endDate}</span>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ExperienceCard;
