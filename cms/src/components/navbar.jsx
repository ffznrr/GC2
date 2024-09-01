import Button from "./button";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const handleLogOut = () => {
    navigate("/");
    localStorage.clear();
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-100 flex justify-between">
        <Link to={"/home"}>
          <img
            className="w-28"
            src="./adidas.png"
          />
        </Link>
        <div onClick={handleLogOut}>
          <Button name={"Log Out"} />
        </div>
      </div>
    </>
  );
};
export default Navbar;
