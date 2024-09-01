const Button = ({ setSort }) => {
  const data = (e) => {
    e.preventDefault();
    setSort(e.target.value);
  };
  return (
    <>
      <form>
        <select
          className="select w-full max-w-xs"
          onChange={(e) => {
            data(e);
          }}
        >
          <option
            disabled
            selected
          >
            Sort
          </option>
          <option value={"ASC"}>Newest Data</option>
          <option value={"DESC"}>Oldest Data</option>
        </select>
      </form>
    </>
  );
};

export default Button;
