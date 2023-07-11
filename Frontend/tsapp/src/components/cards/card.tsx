import React from "react";

type productType = {
  product: {
    name: string,
    url: string,
    price: number,
    qty: number,
    imgUrl: string
  }
}

export const Card = (props: productType) => {
  return (
    <div className="card mb-2" style={{ width: "20rem" }}>
      <img src={props.product.imgUrl} height="300px" className="card-img-top" alt={props.product.name} />
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text"> Price: {props.product.price} </p>
        <p className="card-text"> Qty: {props.product.qty} </p>
        <a href="#" className="btn btn-primary">
          Buy
        </a>
      </div>
    </div >
  );
}
