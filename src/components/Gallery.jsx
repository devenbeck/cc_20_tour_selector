import React from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, setTours }) => {
    // Function to handle removing a tour
    const handleRemoveTour = (id) => {
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    };

    // Render the list of tours
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