import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";

const EditImage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const Update = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      await axios.patch(`https://ffznrr.dev/product/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
          "Content-Type": "multipart/from-data",
        },
      });

      navigate("/home");
      Toastify({
        text: "Success Patch Image",
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
      console.log(err.name);
      Toastify({
        text: "Error Patching",
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
    }
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <form onChange={Update}>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={Update}
          />
        </form>
        <button></button>
      </div>
    </>
  );
};

export default EditImage;
