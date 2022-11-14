import React from "react";
import { useParams } from "react-router-dom";

const ShopingDetails = ({ data }) => {
  const { id } = useParams();
  const item = data.filter((item) => item.id === parseInt(id));

  return (
    <div>
      <h1>product deatils </h1>
      {item.map((item, index) => (
        <div key={index}>
          <p> {item.id}</p>
          <p> {item.product}</p>
        </div>
      ))}
    </div>
  );
};

export default ShopingDetails;
