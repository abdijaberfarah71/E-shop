import React from "react";
import { Link } from "react-router-dom";

const Content = ({ data }) => {
  // const [product, setProduct] = useState(shoping);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/shopinDetails/${item.id}`}>
              {item.id} {item.product}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
