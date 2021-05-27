import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Header from "../components/Header";

function success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="mx-auto">
            <script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/nkmsrxys.json"
              trigger="loop"
              colors="primary:#121331,secondary:#fbbf24"
              style={{ width: "250px", height: "250px" }}
            ></lord-icon>
          </div>
          <div className="flex items-center space-x-2 mx-auto mb-5">
            <CheckCircleIcon className="text-green-500 h-12" />
            <h1 className="font-semibold text-3xl">
              Thank you,your order has been placed.
            </h1>
          </div>
          <p className="mx-auto text-center">
            Thank you for shopping with us.We'll send you a confirmation mail on
            your registered mail ID/phone number. You can check the order status
            of the product in the order section.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to Orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;
