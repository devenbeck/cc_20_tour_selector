import React from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, setTours, loading, error }) => {
    const handleRemoveTour = (id) => {
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Something went wrong. Please try again later.</h2>;
    }

    if (tours.length === 0) {
        return (
            <div>
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
                    onRemove={handleRemoveTour}
                />
            ))}
        </section>
    );
};

export default Gallery;