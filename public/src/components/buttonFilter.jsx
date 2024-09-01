const ButtonFilter = ({ setFilter }) => {
  const getData = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div>
        <form>
          <select
            className="select w-full max-w-xs bg-slate-400"
            onChange={(e) => {
              getData(e);
            }}
          >
            <option
              disabled
              selected
            >
              Category
            </option>
            <option value={1}>Tshirt</option>
            <option value={2}>Jersey</option>
            <option value={3}>Shoes</option>
          </select>
        </form>
      </div>
    </>
  );
};

export default ButtonFilter;
