import React, { useState } from "react";

function TravelForm() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const travelData = {
      destination,
      budget,
      days
    };

    try {
      const response = await fetch("http://localhost:5000/api/travel/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(travelData)
      });

      const data = await response.json();
      alert(data.message);

      setDestination("");
      setBudget("");
      setDays("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Travel Suggestion Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TravelForm;