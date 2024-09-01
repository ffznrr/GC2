import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/card";

const Detail = () => {
  let { id } = useParams();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const getData = async () => {
    await axios
      .get(`http://ffznrr.dev/pub/product/${id}`)
      .then((data) => {
        setDescription(data.data.product.description);
        setName(data.data.product.name);
        setPrice(data.data.product.price);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <div className="min-h-screen">
        <div className="mt-40">
          <Card
            name={name}
            price={price}
            description={description}
          />
        </div>
        <div className="btn flex justify-center">
          <Link to="/">
            <button className="btn btn-outline">Back to Home Page</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Detail;
