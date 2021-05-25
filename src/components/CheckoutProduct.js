import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import Image from "next/image";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  key,
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
}) {
  const dispatch = useDispatch();

  const addItem = () => {
    const product = {
      id,
      title,
      rating,
      price,
      description,
      category,
      image,
    };
    dispatch(addToBasket(product));
  };

  const removeItem = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p className="font-semibold">{title}</p>
        <div className="flex my-2">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs text-gray-500 my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="INR" />
      </div>
      <div className="flex flex-col my-2 space-y-4 justify-self-end">
        <button className="button">Checkout</button>
        <button className="button" onClick={removeItem}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
