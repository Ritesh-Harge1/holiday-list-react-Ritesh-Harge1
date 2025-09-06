import { useState, useEffect } from "react";

function App() {
  // List of cities with country
  const vacationCities = [
    { city: "Mumbai", country: "India" },
    { city: "Delhi", country: "India" },
    { city: "Goa", country: "India" },
    { city: "New York", country: "USA" },
    { city: "London", country: "UK" },
    { city: "Chennai", country: "India" },
    { city: "Tokyo", country: "Japan" },
  ];

  const [indianCities, setIndianCities] = useState([]);

  // Filter Indian cities once when component mounts
  useEffect(() => {
    const filtered = vacationCities.filter((place) => place.country === "India");
    setIndianCities(filtered);
  }, []);

  return (
    <div className="App">
      <h1>Holiday List - Indian Cities</h1>
      <ol>
        {indianCities.map((place, index) => (
          <li key={`location${index + 1}`}>{place.city}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
