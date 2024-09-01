import { useEffect, useState } from "react";
import FormUser from "../components/formUser";
import axios from "axios";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const [username, setUsernamePost] = useState();
  const [email, setEmailPost] = useState();
  const [password, setPasswordPost] = useState();
  const [phone, setPhonePost] = useState();
  const [address, setAddressPost] = useState();
  const navigate = useNavigate();

  const postData = async () => {
    try {
      await axios.post(
        "https://ffznrr.dev/add-user",
        {
          username,
          email,
          password,
          phoneNumber: phone,
          role: "Staff",
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        },
      );
      navigate("/home");
      Toastify({
        text: "Success Add User",
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
    if (username) {
      postData();
    }
  }, [username, email, password, phone, address]);

  return (
    <>
      <div>
        <FormUser
          setUsernamePost={setUsernamePost}
          setEmailPost={setEmailPost}
          setPasswordPost={setPasswordPost}
          setPhonePost={setPhonePost}
          setAddressPost={setAddressPost}
        />
      </div>
    </>
  );
};

export default AddUserPage;
