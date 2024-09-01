import axios from "axios";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const [data, setData] = useState();
  const geData = async () => {
    const { data } = await axios.get("https://ffznrr.dev/category", {
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
    setData(data.category);
  };

  useEffect(() => {
    geData();
  }, []);
  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="overflow-x-auto border">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Cateogry Name</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((el, i) => (
                    <tr>
                      <th>{i + 1}</th>
                      <td>{el.name}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
