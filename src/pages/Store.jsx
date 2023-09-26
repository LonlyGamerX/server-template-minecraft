import { useState, useEffect } from "react";
import StoreData from "../json/store.json";
import redstone from "../imgs/redstone.png";
import master from "../imgs/TNT.png";
import diamond from "../imgs/diamond.png";
import emerald from "../imgs/emerald.png";
import gold from "../imgs/gold.png";
import silver from "../imgs/silver.png";
import bronze from "../imgs/bronze.png";
import grandmaster from "../imgs/command-block.png";
import platinum from "../imgs/platinum.png";

const imageMap = {
  redstone,
  master,
  diamond,
  emerald,
  gold,
  silver,
  bronze,
  grandmaster,
  platinum,
};

const Store = () => {
  const [store, setStore] = useState([]);
  const [storecategories, setStoreCategories] = useState([]);
  const [selected, setSelected] = useState("ranks");

  useEffect(() => {
    setStore(StoreData);

    const storecategories = ["ranks", "crates", "keys", "cosmetics", "other"];
    const uniqueStoreCategories = Array.from(new Set(storecategories));
    setStoreCategories(uniqueStoreCategories);
  }, []);

  const filteredStore = store.filter(
    (product) => product.category === selected
  );

  return (
    <div className="container">
      <h1 className="text-center mb-3 text-decoration-underline">
        {selected.charAt(0).toUpperCase() + selected.slice(1)}
      </h1>
      <div className="row">
        <div className="col-md-3">
          <div className="d-flex flex-column">
            {storecategories.map((category, index) => (
              <button
                className={`btn text-white white-underline mb-2 ${
                  selected === category ? "active" : ""
                }`}
                key={index}
                onClick={() => {
                  setSelected(category);
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-9">
          <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
            {filteredStore.map((product, index) => (
              <div
                className="col-md-4"
                key={index}
                style={{ marginBottom: "15px" }}
              >
                <div className="card mb-2 text-center text-white">
                  <div className="card-body" style={{ flex: 1 }}>
                    <img
                      src={imageMap[product.name]}
                      alt={product.name}
                      className="img-fluid"
                    />
                    <h3 className="card-title">
                      {product.name.charAt(0).toUpperCase() +
                        product.name.slice(1)}
                    </h3>
                    <p className="card-text txt-green">${product.price}</p>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center"
                    style={{ flex: "0 0 auto" }}
                  >
                    <button className="btn text-white bg-transparent white-outline mb-2 w-50">
                      Info
                    </button>
                    <button className="btn text-white bg-transparent white-outline mb-2 w-50">
                      Buy
                    </button>
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
