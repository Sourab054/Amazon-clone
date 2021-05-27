import moment from "moment";
import Currency from "react-currency-formatter";

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD-MM-YYYY")}</p>
        </div>
        <div>
          <p className="font-bold text-xs">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="INR" />
          </p>
        </div>
        <p className="text-yellow-500 text-sm whitespace-nowrap font-semibold sm:text-xl text-right self-end flex-1">
          {items.length > 1 ? `${items.length} Items` : `${items.length} Item`}
        </p>
      </div>
      <div className="p-10 sm:p-14">
        <div className="flex space-x-8 overflow-x-auto">
          {images.map((image) => (
            <img src={image} alt="" className="h-20 object-contain sm:h-32" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
