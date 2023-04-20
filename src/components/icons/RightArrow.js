import * as React from "react"

const RightArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.75 6.75 5.5 5.25-5.5 5.25M19 12H4.75"
    />
  </svg>
)
export default RightArrow
