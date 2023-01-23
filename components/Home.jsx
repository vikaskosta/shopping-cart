import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const Home = () => {
  const productlist = [
    {
      name: "Mac Book",
      price: 1200,
      imgSrc: img1,
      id: "jnikm",
    },
    {
      name: "Book",
      price: 450,
      imgSrc: img2,
      id: "rfrfjnyhm",
    },
  ];

  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    dispatch({type:"addToCart",payload:options});
    dispatch({type:"calculatePrice"});
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productlist.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productcard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add To Cart
    </button>
  </div>
);

export default Home;
