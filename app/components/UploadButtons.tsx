"use client"
import Button from "./Button"
function UploadButtons() {
  return (
    <div className="flex justify-around w-1/2">
      <Button text="Upload Image" action={() => console.log("Upload Image")} />
      <Button text="Analyze Chips" action={() => console.log("Analyze Chips")} />
    </div>
  )
}

export default UploadButtons