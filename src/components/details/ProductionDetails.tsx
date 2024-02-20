import React from "react";

type Props = {
  items: string[];
  label: string;
  val: number;
};

const ProductionDetails = ({ items, label, val }: Props) => {
  return (
    <div
      className={`flex items-center ${
        label === "Genre" ? "gap-12" : `gap-${val}`
      } pb-1`}>
      <span className="text-[#fff] text-base font-semibold">{label}:</span>
      <div className="flex flex-wrap text-sm">{items.join(", ")}</div>
    </div>
  );
};

export default ProductionDetails;
