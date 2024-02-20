import React from "react";

const SkeltonLoading = () => {
  return (
    <div className="my-4">
      <div className="max-w-[210px] h-8 rounded bg-[#bbd6e3] animate-pulse mb-2"></div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="h-[270px] rounded bg-[#bbd6e3] animate-pulse"></div>
        ))}
      </div>
    </div>
  );
};

export default SkeltonLoading;
