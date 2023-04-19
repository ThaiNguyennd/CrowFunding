import React, { useEffect } from "react";
import LayoutDashBoard from "../layout/LayoutDashBoard";
import Button from "../components/button/Button";

const WithDrawPage = () => {
  useEffect(() => {
    document.title = "WithDraw";
  }, []);
  return (
    <LayoutDashBoard>
      <div className="grid grid-cols-[2fr,1fr] mt-5 text-text1 dark:text-white">
        <table>
          <thead>
            <tr className="rounded-lg bg-[#22222B]">
              <th className=" py-4 text-left px-7">Campaign</th>
              <th className=" py-4 text-left">Category</th>
              <th className=" py-4 text-left">Amount</th>
              <th className=" py-4 text-center">Backer</th>
            </tr>
          </thead>
          <tbody>
            <WithDrawItem></WithDrawItem>
            <WithDrawItem></WithDrawItem>
            <WithDrawItem></WithDrawItem>
            <WithDrawItem></WithDrawItem>
            <WithDrawItem></WithDrawItem>
            <WithDrawItem></WithDrawItem>
            <WithDrawItem></WithDrawItem>
          </tbody>
        </table>
        <div className="w-full bg-white dark:bg-darksecondary px-5 py-10 flex flex-col ">
          <div className="w-full items-center flex flex-col  mb-10">
            <img src="withdraw.png" alt="" className="" />
            <span className="font-medium text-lg dark:text-white text-text2 mt-4">
              Your Balance
            </span>
            <span className="font-bold text-[40px] mt-3">1,206.89</span>
            <div className="flex items-baseline gap-x-2">
              <img src="usa.png" alt="" />
              <span>USD</span>
            </div>
            <Button className="bg-primary text-white px-12 py-3 flex items-center gap-x-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <span className="text-xl ">Withdraw</span>
            </Button>
          </div>

          <div className="px-7">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xl text-texxt1 dark:text-white">
                Activity
              </span>
              <span className="font-semibold text-xl text-secondary">
                View All
              </span>
            </div>
            <div className=" mt-8">
              <RightItem></RightItem>
              <RightItem></RightItem>
              <RightItem></RightItem>
              <RightItem></RightItem>
              <RightItem></RightItem>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashBoard>
  );
};
function WithDrawItem() {
  return (
    <tr className="bg-white dark:bg-darksecondary ">
      <td className="pl-7 py-5">
        <div className="flex items-center gap-x-3">
          <img
            src="https://plus.unsplash.com/premium_photo-1679589214550-6028ebf28203?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-[66px] h-[50px] object-cover rounded-sm"
          />
          <div className="flex flex-col gap-y-1">
            <span className="text-text1 dark:text-white font-medium ">
              One Special 4K Camera
            </span>
            <span className="text-sm text-text4">Date: 25 Oct 2021</span>
          </div>
        </div>
      </td>
      <td className="text-text3 font-normal">Camera Gear</td>
      <td>$ 5,850</td>
      <td>
        <div className="flex gap-x-3 items-center justify-end pr-8">
          <img
            src="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="flex flex-col ">
            <span>Mahfuzul Nabil</span>
            <span>⭐ ⭐ ⭐ ⭐ ⭐ </span>
          </div>
        </div>
      </td>
    </tr>
  );
}
function RightItem() {
  return (
    <div className="flex items-center gap-x-5 w-full justify-between mt-5">
      <div className="w-[60px] h-[60px]">
        <img
          src="payment1.png"
          alt=""
          className="w-full h-full object-cover "
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <span className="font-semibold text-text1 dark:text-white text-xl ">
          Paypal Withdraw
        </span>
        <span className="text-text3 font-medium text-lg">31 Oct, 11:00pm</span>
      </div>
      <span className="font-medium text-erros text-xl">$500.00</span>
    </div>
  );
}
export default WithDrawPage;
