import React from "react";
import { Link } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import ErrosComponent from "../components/commom/ErrosComponent";
import propTypes from "prop-types";

const LayOutAuthencaiton = ({ children, heading="" }) => {
  return (
    <div className="relative w-full min-h-screen p-10 isolate bg-graySoft dark:bg-dark">
      <img
        src="/ellipse.png"
        alt="bg"
        className="lg:block absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]"
      />
      <Link to="./" className="inline-block mb-5 lg:mb-16">
        <img src="/Logo.png" alt="logo" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darksecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto ">
        <h1 className="mb-1 text-lg font-semibold lg:font-bold lg:text-3xl text-center lg:mb-3 text-text1 dark:text-white">
          {" "}
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayOutAuthencaiton.propTypes = {
  heading: propTypes.string,
  children: propTypes.node,
};
export default withErrorBoundary(LayOutAuthencaiton, {
  FallbackComponent: ErrosComponent,
});
