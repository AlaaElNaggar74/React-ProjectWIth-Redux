import { useDispatch, useSelector } from "react-redux";
import { deletcart, clearall } from "../Reduxfile/Slice/CartSlice";

import "./AllComponentCss.css";

const Cart = () => {
  let cartstate = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let total = cartstate.reduce((acc, cart) => {
    return (acc += cart.price * cart.countprod);
  }, 0);

  return (
    <div>
      <h3 className="text-center mt-4">Welcome To The Page</h3>
      <h3 className="text-center ">Cart</h3>
      <p className="text-center">
        *********************
      </p>

      <div className="bttt text-center">
        <button
          type="button"
          className="btn btn-dark my-4 fs-1 fw-bold"
          onClick={() => {
            dispatch(clearall());
          }}
        >
          Clear ALL
        </button>
      </div>

      <div className="container">
        <div className="row">
          <div className="tablllecontent">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Image</th>
                  <th scope="col">Operation</th>
                </tr>
              </thead>
              <tbody>
                {cartstate.map((cart) => (
                  <tr key={cart.id}>
                    <th scope="row">{cart.id}</th>
                    <td>{cart.title.slice(0, 20)}</td>
                    <td>{cart.category}</td>
                    <td>{cart.price}</td>
                    <td>{cart.countprod}</td>
                    <td>
                      <img src={cart.image} alt="errrr" />
                    </td>

                    <td>
                      <button type="button" className="btn btn-primary me-1">
                        Primary
                      </button>
                      <button type="button" className="btn btn-success me-1">
                        Success
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          dispatch(deletcart(cart));
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="mt-5">The Total Price Of Product : {total.toFixed(2)} </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
