import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import DestinationSelector from "./DestinationSelector";

const App = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState("All Destinations");

    const fetchTours = async () => {
        try {
            const res = await fetch("https://course-api.com/react-tours-project");
            const data = await res.json();
            setTours(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    const filteredTours =
        selectedDestination === "All Destinations"
            ? tours
            : tours.filter((tour) => tour.name === selectedDestination);

    return (
        <div>
            <h1>Tour Destination Selector</h1>
            <DestinationSelector
                tours={tours}
                selectedDestination={selectedDestination}
                setSelectedDestination={setSelectedDestination}
            />
            <Gallery tours={filteredTours} setTours={setTours} loading={loading} error={error} />
        </div>
    );
};

export default App;