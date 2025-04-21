import React from "react";

const DestinationSelector = ({ tours, selectedDestination, setSelectedDestination }) => {
    const uniqueDestinations = ["All Destinations", ...new Set(tours.map((tour) => tour.name))];

    return (
        <select
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
        >
            {uniqueDestinations.map((destination, index) => (
                <option key={index} value={destination}>
                    {destination}
                </option>
            ))}
        </select>
    );
};

export default DestinationSelector;