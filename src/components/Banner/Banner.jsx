import React from "react";

function Banner() {
  return (
    <div className="grid absolute top-0 left-[20%]">
      <div className="bg-green-500/75 h-20 w-[800px]">
        <p className="font-extrabold text-white text-xl text-center mt-4">Product added successfully!</p>
      </div>
    </div>
  )
}

export default Banner