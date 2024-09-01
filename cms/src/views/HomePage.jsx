import axios from "axios";
import { useEffect, useState } from "react";
import Toastify from "toastify-js";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const { data } = await axios.get("https://ffznrr.dev/product", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setProduct(data.product);
    } catch (err) {
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
    getData();
  }, []);

  const handleDelete = async (num) => {
    try {
      const { response } = await axios.delete(
        `https://ffznrr.dev/product/${num}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        },
      );
      Toastify({
        text: "Success to Delete",
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

      getData();
    } catch (err) {
      Toastify({
        text: "Failed To Delete",
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

  return (
    <>
      <div>
        <div className="flex justify-end mb-5 mr-5 gap-2">
          <Link to="/add-user">
            <Button name={"Add User"} />
          </Link>
          <Link to="/category">
            <Button name={"Category"} />
          </Link>
          <Link to="/add-page">
            <Button name={"Add Data"} />
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3"
                >
                  Product name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                >
                  Stock
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {product.map((el) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={el.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {el.name}
                  </th>
                  <td className="px-6 py-4">{el.imgUrl}</td>
                  <td className="px-6 py-4">{el.stock}</td>
                  <td className="px-6 py-4">{el.price}</td>
                  <td className="px-6 py-4">{el.description}</td>
                  <td className="px-6 py-4 text-right flex gap-1">
                    <div onClick={() => navigate(`/edit-image/${el.id}`)}>
                      <Button name={"Edit Image"} />
                    </div>
                    <div onClick={() => navigate(`/edit-page/${el.id}`)}>
                      <Button name={"Edit"} />
                    </div>
                    <div onClick={() => handleDelete(el.id)}>
                      <Button name={"Delete"} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HomePage;
