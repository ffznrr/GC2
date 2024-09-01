const Navbar = () => {
  return (
    <>
      <div>
        <div className="navbar bg-base-100 border shadow-lg">
          <div className="navbar-start">
            <div className="dropdown hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
            </div>
            <a className="md:ml-20">
              <img
                src="./adidas.png"
                alt=""
                className="w-32"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
