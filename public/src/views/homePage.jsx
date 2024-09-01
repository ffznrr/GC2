import { useEffect, useState } from "react";
import Card from "../components/card";
import Carousel from "../components/carousel";
import axios from "axios";
import Search from "../components/search";
import Pagination from "../components/pagination";
import Button from "../components/button";
import ButtonFilter from "../components/buttonFilter";
import Pagination2 from "../components/pagination2";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(1);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("ASC");

  const getData = async () => {
    await axios
      .get(
        `http://ffznrr.dev/pub/products/?page=${page}&search=${search}${
          filter ? `&filter=${filter}` : ""
        }&sort=${sort}`,
      )
      .then((response) => {
        setData(response.data.rows);
        setLoading(true);
        setPagination(response.data.totalPage);
      })
      .catch((response) => {
        console.log(response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [search, page, filter, sort]);
  return (
    <>
      <div className="font-body">
        <Carousel />
        <Pagination2
          pagination={pagination}
          page={page}
          setPage={setPage}
        />
        <div>
          <div className="flex justify-end md:mr-20">
            <ButtonFilter setFilter={setFilter} />
            <Button setSort={setSort} />
            <Search setSearch={setSearch} />
          </div>
          <h2 className="text-3xl mb-2 text-center">PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              data.map((el, i) => (
                <Link
                  to={`/details/${el.id}`}
                  key={el.id}
                >
                  <Card
                    name={el.name}
                    description={el.description}
                    price={el.price}
                  />
                </Link>
              ))
            )}
          </div>
          <Pagination
            pagination={pagination}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
