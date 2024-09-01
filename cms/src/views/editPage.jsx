import axios from "axios";
import Button from "../components/button";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "../components/form";
import Toastify from "toastify-js";

const EditPage = () => {
  const { id } = useParams();
  console.log(id);
  const [productName, setNamed] = useState("");
  const [productDescription, setDescriptione] = useState("");
  const [productStock, setStocked] = useState("");
  const [productImage, setImaged] = useState("");
  const [productCategoryId, setCategories] = useState("");
  const [productPrice, setPriced] = useState("");

  const [name, setName] = useState();
  const [Description, setDescription] = useState();
  const [Stock, setStock] = useState();
  const [Image, setImage] = useState();
  const [CategoryId, setCategory] = useState();
  const [Price, setPrice] = useState();

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const { data } = await axios.get(`https://ffznrr.dev/product/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setNamed(data.name);
      setDescriptione(data.description);
      setStocked(data.stock);
      setImaged(data.imgUrl);
      setPriced(data.price);
      setCategories(data.categoryId);
    } catch (err) {
      console.log(err);
    }
  };

  const updateData = async (
    name,
    description,
    stock,
    image,
    categoryId,
    price,
  ) => {
    try {
      const { data } = await axios.put(
        `https://ffznrr.dev/product/${id}`,
        {
          name: name,
          description: description,
          stock: stock,
          imgUrl: image,
          categoryId: categoryId,
          price: price,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        },
      );

      navigate("/home");
      Toastify({
        text: data.message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    if (name) {
      updateData(name, Description, Stock, Image, CategoryId, Price);
    }
  }, [name]);
  return (
    <>
      <div>
        <Link to="/home">
          <Button name={"Back To Home Page"} />
        </Link>
        <div>
          <Form
            productName={productName}
            productDescription={productDescription}
            productStock={productStock}
            productImage={productImage}
            productCategoryId={productCategoryId}
            productPrice={productPrice}
            setName={setName}
            setDescription={setDescription}
            setStock={setStock}
            setImage={setImage}
            setCategory={setCategory}
            setPrice={setPrice}
          />
        </div>
      </div>
    </>
  );
};

export default EditPage;
