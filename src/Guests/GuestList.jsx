const Guests = ({ guests, setSelectedGuest }) => {
  return (
    <div>
      <h3>Name</h3>
      {guests.map((guest) => {
        return (
          <div key={guest.id}>
            <h4
              onClick={() => {
                setSelectedGuest(guest);
              }}
            >
              {guest.name}
            </h4>
          </div>
        );
      })}
      <h3>Email</h3>
      {guests.map((guest) => {
        return (
          <div key={guest.id}>
            <h4>{guest.email}</h4>
          </div>
        );
      })}
      <h3>Phone Number</h3>
      {guests.map((guest) => {
        return (
          <div key={guest.id}>
            <h4>{guest.phone}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Guests;
