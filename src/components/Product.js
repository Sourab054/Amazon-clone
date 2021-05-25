import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Currency from "react-currency-formatter";
import { addToBasket } from "../slices/basketSlice";

const Max = 5;
const Min = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  const [rating] = useState(Math.floor(Math.random() * (Max - Min) + 1));
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = { id, title, rating, price, description, category, image };

    //Sends the product as an action to redux store
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white p-10 z-30 shadow-2xl">
      <p className="absolute top-2 right-2 capitalize text-sm italic text-gray-400">
        {category}
      </p>

      <Image src={image} width={250} height={200} objectFit="contain" />

      <h4 className="font-semibold my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="line-clamp-2 text-xs my-2">{description}</p>

      <div className="font-semibold mb-5">
        <Currency quantity={price} currency="INR" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="button mt-auto">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
