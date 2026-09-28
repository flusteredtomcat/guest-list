import { useState, useEffect } from "react";
import Guests from "./Guests/GuestList";
import GuestDetails from "./Guests/GuestDetails.jsx";
import axios from "axios";

function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState();

  useEffect(() => {
    const fetchGuests = async () => {
      const { data } = await axios.get(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/guests",
      );
      console.log(data);
      setGuests(data.data);
    };
    fetchGuests();
  }, []);

  return (
    <>
      <h1>Guest List</h1>
      <Guests guests={guests} setSelectedGuest={setSelectedGuest} />
      {selectedGuest ? (
        <GuestDetails
          selectedGuest={selectedGuest}
          setSelectedGuest={setSelectedGuest}
        />
      ) : (
        <h5>Please select a guest</h5>
      )}
    </>
  );
}

export default App;
