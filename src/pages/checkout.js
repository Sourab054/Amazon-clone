import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { session } from "next-auth/client";
import Currency from "react-currency-formatter";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-50">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left section */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl font-semibold border-b pb-4">
              {items.length === 0
                ? "Your Shopping Cart is empty. "
                : "Shopping Cart"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                rating={item.rating}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="bg-white flex flex-col mt-2 mx-5 px-2">
          {items.length > 0 && (
            <>
              <h2 className="font-semibold whitespace-nowrap m-3">
                Subtotal ({items.length} items) :
                <span className="font-bold ml-2">
                  <Currency quantity={total} currency="INR" />
                </span>
              </h2>

              <button
                disabled={!session}
                className={`button text-base mt-2${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-300 text-white cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed for payment"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
