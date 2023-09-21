import { useState, useEffect } from "react";
import StoreData from "../json/store.json";
import redstone from "../imgs/redstone.png";

const Store = () => {
  const [storecategoriesFirst, setStoreCategoriesFirst] = useState("Ranks");
  const [store, setStore] = useState([]);
  const [storecategories, setStoreCategories] = useState([]);
  const [selected, setSelected] = useState("Ranks");

  useEffect(() => {
    setStore(StoreData);

    const storecategories = ["Ranks", "Crates", "Keys", "Cosmetics", "Other"];
    const uniqueStoreCategories = Array.from(new Set(storecategories));
    setStoreCategories(uniqueStoreCategories);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mb-3 text-decoration-underline">
        {storecategoriesFirst}
      </h1>
      <div className="row">
        <div className="col-lg-3">
          <div className="d-flex flex-column">
            {storecategories.map((category, index) => (
              <button
                className={`btn text-white white-underline mb-2 ${
                  selected === category ? "active" : ""
                }`}
                key={index}
                onClick={() => {
                  setSelected(category);
                  setStoreCategoriesFirst(category);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {store.map((product, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-2 text-center text-white">
                  <div className="card-body">
                    <img
                      src={redstone}
                      alt={product.name}
                      className="img-fluid"
                    />
                    <h3 className="card-title">
                      {product.name.charAt(0).toUpperCase() +
                        product.name.slice(1)}
                    </h3>
                    <p className="card-text txt-green">${product.price}</p>
                    <div className="d-flex flex-column align-items-center">
                      <button className="btn text-white bg-transparent white-outline mb-2 w-50">
                        Info
                      </button>
                      <button className="btn text-white bg-transparent white-outline w-50">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
