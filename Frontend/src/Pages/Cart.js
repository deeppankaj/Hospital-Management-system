import React from "react";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  incCartvalue,
  decCartvalue,
  removesingleProduct,
} from "../Redux-toolkit/Slices/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => {
    return state.Cart;
  });
  const cartProduct = data.products;

  let incQty = (product) => {
    dispatch(incCartvalue(product));
  };
  let decQty = (product) => {
    if (product.qty > 1) {
      dispatch(decCartvalue(product));
    }
  };
  let remProduct = (product) => {
    dispatch(removesingleProduct(product));
  };

  return (
    <>
      <section className="mb-5 d-table w-100 bg-light">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4">Shop Cart</h3>
                <p className="para-desc mx-auto text-muted">
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>

                <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                  <div className="breadcrumb bg-light rounded mb-0 bg-transparent">
                    <Link to={"/"} className="breadcrumb-item">
                      Home
                    </Link>
                    <Link to={"/shop"} className="breadcrumb-item">
                      Shop
                    </Link>
                    <Link
                      to={"/cart"}
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Cart
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="table-responsive bg-white shadow rounded">
                <table className="table table-center table-padding mb-0">
                  <thead>
                    <tr>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "20px" }}
                      ></th>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "300px" }}
                      >
                        Product
                      </th>
                      <th
                        className="border-bottom text-center p-3"
                        style={{ minWidth: "160px" }}
                      >
                        Price
                      </th>
                      <th
                        className="border-bottom text-center p-3"
                        style={{ minWidth: "190px" }}
                      >
                        Qty
                      </th>
                      <th
                        className="border-bottom text-end p-3"
                        style={{ minWidth: "50px" }}
                      >
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartProduct.map((product, i) => {
                      return (
                        <tr key={i}>
                          <td className="h5 ps-4 pt-4 text-center mt-4 ">
                            <RxCross2
                              onClick={() => remProduct(product)}
                              color="red"
                            />
                          </td>
                          <td className="p-3">
                            <div className="d-flex align-items-center">
                              <img
                                src={product.img}
                                width="50px"
                                className="img-fluid rounded shadow"
                                style={{ height: "auto" }}
                                alt=""
                              />
                              <h6 className="mb-0 ms-3">{product.name}</h6>
                            </div>
                          </td>
                          <td className="text-center p-3">
                            <BiRupee /> {product.price}.00
                          </td>
                          <td className="text-center shop-list p-3">
                            <div className="row justify-content-center gap-1">
                              <button
                                onClick={() => decQty(product)}
                                className="btn btn-icon btn-primary"
                              >
                                -
                              </button>
                              <div className="btn btn-icon btn-primary flex">
                                {product.qty}
                              </div>
                              <button
                                onClick={() => incQty(product)}
                                className="btn btn-icon btn-primary"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="text-end font-weight-bold p-3">
                            <BiRupee /> {product.price}.00
                          </td>
                        </tr>
                      );
                    })}                    
                  </tbody>                  
                </table>
                {cartProduct.length===0 && <h5 className="text-center p-4 col-12">No Products added to cart</h5>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6 mt-4 pt-2">
              <Link to={"/shop"} className="btn bg-soft-primary">
                Shop More
              </Link>
              <Link to={"/shop"} className="btn bg-soft-primary ms-2">
                Update Cart
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 ms-auto mt-4 pt-2">
              <div className="table-responsive bg-white rounded shadow">
                <table className="table table-center table-padding mb-0">
                  <tbody>
                    <tr>
                      <td className="h6 p-3">Subtotal</td>
                      <td className="text-end font-weight-bold p-3">{data.totalprice}.00 <BiRupee /></td>
                    </tr>
                    <tr>
                      <td className="h6 p-3">Taxes</td>
                      <td className="text-end font-weight-bold p-3">$ 219</td>
                    </tr>
                    <tr className="bg-light">
                      <td className="h6 p-3">Total</td>
                      <td className="text-end font-weight-bold p-3">$ 2409</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 pt-2 text-end">
                <Link to={"/"} className="btn btn-primary">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
