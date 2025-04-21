import React from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, setTours }) => {
    const handleRemoveTour = (id) => {
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    };

    if (tours.length === 0) {
        return (
            <div className="empty-state">
                <h2>No tours left</h2>
                <button onClick={() => window.location.reload()}>Refresh</button>
            </div>
        );
    }

    return (
        <section className="tour-list">
            {tours.map((tour) => (
                <TourCard
                    key={tour.id}
                    id={tour.id}
                    name={tour.name}
                    info={tour.info}
                    image={tour.image}
                    price={tour.price}
                    onRemove={handleRemoveTour}
                />
            ))}
        </section>
    );
};

export default Gallery;