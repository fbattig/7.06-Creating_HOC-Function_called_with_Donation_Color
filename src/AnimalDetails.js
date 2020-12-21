import React from "react";
const AnimalDetail = (props) => {
  const { name, number, endangered, donation } = props.detail;
  return (
    <div>
      <p>{props.image}</p>
      <p>Animal: {name} </p>
      <p>Number: {number} </p>
      <p> Endangered: {endangered ? "Yes" : "No"}</p>
      <p style={{ color: props.donationColor }}>Donation Amount: ${donation}</p>
    </div>
  );
};

export default AnimalDetail;
