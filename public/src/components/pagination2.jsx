const Pagination2 = ({ page, setPage, pagination }) => {
  const handlePrev = () => {
    if (page === 1) {
      setPage(page - 0);
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page >= pagination) {
      setPage(page + 0);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="join grid grid-cols-2 mx-10 mb-10">
        <button
          className="join-item btn btn-outline"
          onClick={handlePrev}
        >
          Previous page
        </button>
        <button
          className="join-item btn btn-outline"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination2;
