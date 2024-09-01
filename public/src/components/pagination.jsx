const Pagination = ({ pagination, setPage }) => {
  const totalPage = [];
  for (let i = 0; i < pagination; i++) {
    totalPage.push(i + 1);
  }

  return (
    <div className="join flex justify-center mb-10">
      {totalPage.map((el) => (
        <input
          key={el}
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label={el}
          onClick={() => {
            setPage(el);
          }}
        />
      ))}
    </div>
  );
};

export default Pagination;
