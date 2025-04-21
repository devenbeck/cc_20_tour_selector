import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, setTours, onRemove }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchTours = async () => {
        try {
            const res = await fetch("https://course-api.com/react-tours-project");
            const data = await res.json();
            const trimmed = data.map((tour) => ({
                id: tour.id,
                name: tour.name,
                info: tour.info[0]?.name || "Unknown",
            }));
            setTours(trimmed);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Something went wrong...</h2>;
    }

    if (tours.length === 0) {
        return (
            <div>
                <h2>No tours left</h2>
                <button onClick={fetchTours}>Refresh</button>
            </div>
        );
    }

    return (
        <section className="tour-list">
            {tours.map((tour) => (
                <TourCard
                    key={tour.id}
                    {...tour}
                    onRemove={onRemove}
                />
            ))}
        </section>
    );
};

export default Gallery;