import * as React from "react"

interface ImageProps {
  src?: string
  width?: string
  height?: string
}

const EImage: React.FC<ImageProps> = ({ src = "", width, height }) => {
  return (
    <>
      <img
        src={src}
        style={{
          width: width || "auto",
          maxWidth: "500px",
          height: height || "auto",
          maxHeight: "500px",
          overflow: "hidden",
          objectFit: "cover",
          display: "block",
        }}
      ></img>
    </>
  )
}

export default EImage
