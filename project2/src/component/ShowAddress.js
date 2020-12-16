const ShowAddress = (props) => {
  const address = props.address;

  const displayAddress = () => {
    let floorNumber = address.floorNumber;
    let unitNumber = address.unitNumber;
    if (floorNumber.length === 1) {
      floorNumber = "0" + floorNumber;
    }
    if (unitNumber.length === 1) {
      unitNumber = "0" + unitNumber;
    }

    const fullAddress = `${address.block} ${address.streetName} ${
      address.floorNumber !== "" ? `#${floorNumber}-${unitNumber}` : ""
    } Singapore ${address.postalCode}`;

    return (
      <div>
        <p>{fullAddress}</p>
        <p>
          Check out the place on{" "}
          <a
            href={`https://www.google.com.sg/maps/?q=${fullAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            maps
          </a>{" "}
          now!
        </p>
      </div>
    );
  };

  return (
    <>
      <hr />
      <h4>Address:</h4>
      {address === undefined ? (
        <p>No information available</p>
      ) : (
        displayAddress()
      )}
    </>
  );
};

export default ShowAddress;
