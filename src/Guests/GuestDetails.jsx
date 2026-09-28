const GuestDetails = ({ selectedGuest, setSelectedGuest }) => {
  return (
    <div>
      <h3>{selectedGuest.name}</h3>
      <h3>{selectedGuest.email}</h3>
      <h3>{selectedGuest.phone}</h3>
      <h3>{selectedGuest.bio}</h3>
      <h3>{selectedGuest.job}</h3>
      <button
        onClick={() => {
          setSelectedGuest(null);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default GuestDetails;
