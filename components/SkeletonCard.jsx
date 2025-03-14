import React from "react";

const SkeletonCard = () => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="flex flex-col">
            <div className="w-24 h-4 bg-gray-200 animate-pulse rounded"></div>
            <div className="w-32 h-3 bg-gray-200 animate-pulse rounded mt-2"></div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full h-16 bg-gray-200 animate-pulse rounded"></div>
      <div className="mt-4 w-20 h-4 bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
};

export default SkeletonCard;
