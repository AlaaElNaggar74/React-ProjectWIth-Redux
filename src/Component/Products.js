import "./AllComponentCss.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchproductapi } from "../Reduxfile/Slice/ProductSlice";

import { addcart } from "../Reduxfile/Slice/CartSlice";

const Products = () => {
  let stateProducts = useSelector((state) => state.product);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchproductapi());
  }, []);

  return (
    <div>
      <h1 className="text-center mt-4">Welcome To The Page</h1>
      <h1 className="text-center mt-4">Products</h1>
      <p className="text-center">
        *********************
      </p>

      <div className="container">
        <div className="row">
          {stateProducts.map((product) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={product.id}>
              <div className="card">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title.slice(0, 25)}</h5>
                  <p className="card-text">
                    {product.description.slice(0, 100)}
                  </p>
                  <p className="card-text">Price : {product.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(addcart(product));
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
