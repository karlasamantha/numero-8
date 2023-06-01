import React from "react";

function Card({ children}) {
  return (
    <div
      className={`
        rounded-lg
        border
        p-4
        mb-3
        flex
        flex-col
        md:flex-row
      `
    }>{children}</div>
  )
}

export default Card