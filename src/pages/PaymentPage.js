import React, { useEffect } from "react";
import LayoutDashBoard from "../layout/LayoutDashBoard";
import Button from "../components/button/Button";

const PaymentPage = () => {
    useEffect((() => {
        document.title="Payment"
    }),[])
  return (
    <LayoutDashBoard>
      <div className="w-[630px] mx-auto mt-7">
        <div>
          <h1 className="text-text1 dark:text-white font-bold text-2xl text-center mb-5">
            Connect Your Payment Processor
          </h1>
          <p className="text-text3 font-normal text-sm  text-center">
            To Start Processing credit card payments and donations, you will
            need to select either Paypal or Payoneer{" "}
          </p>
        </div>
        <div className="mt-[60px] flex items-center gap-x-12 rounded-lg justify-center">
          <div className="p-6 bg-white dark:bg-darksecondary flex flex-col gap-y-6 items-center rounded-lg">
            <img
              src="/payment1.png"
              alt=""
              className="w-[80px] h-[80px] object-cover "
            />
            <span className="mt-5 font-normal text-text3 text-sm">
              Get paid directly via Paypal.
            </span>
            <Button className="bg-secondary bg-opacity-10 text-secondary py-2 w-full">
              Connect
            </Button>
          </div>
          <div className="p-6 bg-white dark:bg-darksecondary flex flex-col gap-y-6 items-center rounded-lg">
            <img
              src="/payment2.png"
              alt=""
              className="w-[80px] h-[80px] object-cover "
            />
            <span className="mt-5 font-normal text-text3 text-sm">
            Get paid worldwide your Work.
            </span>
            <Button className="bg-secondary bg-opacity-10 text-secondary py-2 w-full">
              Connect
            </Button>
          </div>
        </div>
      </div>
    </LayoutDashBoard>
  );
};

export default PaymentPage;
