import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";

const App = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchTours = async () => { //use fetch  and use effect to get data
        try {
            const res = await fetch("https://course-api.com/react-tours-project");
            const data = await res.json();
            setTours(data); // Store the fetched tours in state
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    return (
        <div>
            <h1>Tour Destination Selector</h1>
            <Gallery
                tours={tours}
                setTours={setTours}
                loading={loading}
                error={error}
            />
        </div>
    );
};

export default App;