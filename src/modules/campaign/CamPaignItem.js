import React from "react";
import { Link } from "react-router-dom";
import CamPaignImage from "./parts/CamPaignImage";
import CamPaignCategory from "./parts/CamPaignCategory";
import CamPaignTitle from "./parts/CamPaignTitle";
import CamPaignDesc from "./parts/CamPaignDesc";
import CamPaignMeta from "./parts/CamPaignMeta";
import CamPaignAuthor from "./parts/CamPaignAuthor";

const CamPaignItem = () => {
  return (
    <div className="dark:bg-darksecondary rounded-2xl bg-white">
      <CamPaignImage></CamPaignImage>
      <div className="px-4 py-3">
        <CamPaignCategory></CamPaignCategory>
        <div className="mb-4">
          <CamPaignTitle></CamPaignTitle>
          <CamPaignDesc></CamPaignDesc>
        </div>
        <div className="flex items-center gap-x-2 justify-between">
          <CamPaignMeta></CamPaignMeta>
          <CamPaignMeta amount="173" raised="Total backers"></CamPaignMeta>
        </div>
        <CamPaignAuthor>Sami Ahmed</CamPaignAuthor>
      </div>
    </div>
  );
};

export default CamPaignItem;
