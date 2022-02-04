import React, { useState, useEffect } from "react";
import Loading from "./Tours-project/Loading";
import Tours from "./Tours-project/Tours";
const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  // fetch data
  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      // console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      // console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};

export default App;
