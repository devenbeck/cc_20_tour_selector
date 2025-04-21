import React from "react";

const TourCard = ({ id, name, info, onRemove }) => {
    return (
        <article className="tour-card">
            <h2>{name}</h2>
            <p>{info}</p>
            <button onClick={() => onRemove(id)}>Remove Tour</button>
        </article>
    );
};

export default TourCard;