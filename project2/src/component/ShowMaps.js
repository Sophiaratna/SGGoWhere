const ShowMaps = (props) => {
  const address = props.address;
  const fullAddress = `${address.block} ${address.streetName} ${
    address.floorNumber !== ""
      ? `#${address.floorNumber}-${address.unitNumber}`
      : ""
  } Singapore ${address.postalCode}`;
  const API_KEY = "AIzaSyCkHtziKDVfFoMagibsAKu37094paNkK5g";
  // const imgSrc = `https://www.google.com/maps/embed/v1/view?key=${API_KEY}&center=${props.latitude},${props.longitude}&zoom=18&maptype=satellite`;

  const imgSrc = `https://www.google.com/maps/embed/v1/search?key=${API_KEY}&center=${props.latitude},${props.longitude}&zoom=18&maptype=satellite`;

  return (
    <div>
      <hr />
      <h4>Address:</h4>
      <p>{fullAddress}</p>
      <p>Check out the place on the maps now!</p>
      {/* <iframe
        src={imgSrc}
        style={{ width: "900", height: "600", frameborder: "0" }}
      ></iframe> */}
    </div>
  );
};

export default ShowMaps;
