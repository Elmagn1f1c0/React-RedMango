import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetMenuItemByIdQuery } from "../Apis/menuItemApi";

function MenuItemDetails() {
  const { menuItemId } = useParams();
  const { data, isLoading } = useGetMenuItemByIdQuery(menuItemId);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (counter: number) => {
    let newQuantity = quantity + counter;
    if (newQuantity == 0) {
      newQuantity = 1;
    }
    setQuantity(newQuantity);
    return;
  };

  return (
    <div className="container pt-4 pt-md-5">
      {!isLoading ? (
        <div className="row">
          <div className="col-7">
            <h2 className="text-success">{data.result?.name}</h2>
            <span>
              <span
                className="badge text-bg-dark pt-2"
                style={{ height: "40px", fontSize: "20px" }}
              >
                {data.result?.category}
              </span>
            </span>
            <span>
              <span
                className="badge text-bg-light pt-2"
                style={{ height: "40px", fontSize: "20px" }}
              >
                {data.result?.specialTag}
              </span>
            </span>
            <p style={{ fontSize: "20px" }} className="pt-2">
              {data.result?.description}
            </p>
            <span className="h3">${data.result?.price}</span> &nbsp;&nbsp;
            <span
              className="pb-1 pb-1 d-inline-flex align-items-center"
              style={{ border: "1px solid #333", borderRadius: "30px" }}
            >
              <i
                onClick={() => {
                  handleQuantity(-1);
                }}
                className="bi bi-dash p-1"
                style={{
                  fontSize: "25px",
                  cursor: "pointer",
                  verticalAlign: "middle",
                }}
              ></i>
              <span
                className="h3 mt-1 px-3"
                style={{ verticalAlign: "middle" }}
              >
                {quantity}
              </span>
              <i
                onClick={() => {
                  handleQuantity(+1);
                }}
                className="bi bi-plus p-1"
                style={{
                  fontSize: "25px",
                  cursor: "pointer",
                  verticalAlign: "middle",
                }}
              ></i>
            </span>
            <div className="row pt-4">
              <div className="col-5">
                <button className="btn btn-success form-control">
                  Add to Cart
                </button>
              </div>
              <div className="col-5">
                <button
                  className="btn btn-secondary form-control"
                  onClick={() => navigate(-1)}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
          <div className="col-5">
            <img
              src={data.result.image}
              width="100%"
              style={{ borderRadius: "50%" }}
              alt="No content"
            ></img>
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-contenter-center"
          style={{ width: "100%" }}
        >
          <div>Loading...</div>
        </div>
      )}
    </div>
  );
}

export default MenuItemDetails;
