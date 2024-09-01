import { useEffect, useState } from "react";
import Form from "../components/form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";

const AddPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [categoryId, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const PostData = async () => {
    try {
      await axios.post(
        "https://ffznrr.dev/product",
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
        text: "Success Add Data",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "green",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } catch (err) {
      navigate("/home");
      Toastify({
        text: err.response.data.message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  };

  useEffect(() => {
    if (name) {
      PostData();
    }
  }, [name]);

  return (
    <>
      <div>
        <div>
          <button
            className="btn"
            onClick={() => navigate("/home")}
          >
            {" "}
            Back To Home{" "}
          </button>
        </div>
        <h1 className="text-center mb-10">ADD NEW DATA</h1>
        <Form
          setName={setName}
          setDescription={setDescription}
          setStock={setStock}
          setImage={setImage}
          setCategory={setCategory}
          setPrice={setPrice}
        />
      </div>
    </>
  );
};

export default AddPage;
