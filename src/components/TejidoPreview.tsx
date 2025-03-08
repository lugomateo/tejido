import { useEffect } from "react"

export default function TejidoPreview({
  setPreviewImage,
  previewImage,
  firstImageWidth,
  secondImageWidth,
  squareSize,
  firstImage,
  secondImage,
  gridValues,
  columns,
  rows,
}: {
  setPreviewImage: (previewImage: string) => void
  previewImage: string
  firstImageWidth: number
  secondImageWidth: number
  squareSize: number
  firstImage: string
  secondImage: string
  gridValues: number[][]
  columns: number
  rows: number
}) {
  useEffect(() => {
    const generatePreviewImage = async () => {
      if (firstImage !== "" && secondImage !== "") {
        try {
          // Calculate output dimensions
          const outputWidth = columns * squareSize
          const outputHeight = rows * squareSize

          // Create first image element
          const img1 = new Image()
          img1.crossOrigin = "anonymous"
          img1.src = firstImage

          // Create second image element
          const img2 = new Image()
          img2.crossOrigin = "anonymous"
          img2.src = secondImage

          // Wait for both images to load
          await Promise.all([
            new Promise((resolve) => {
              img1.onload = resolve
            }),
            new Promise((resolve) => {
              img2.onload = resolve
            }),
          ])

          // Resize first image using the firstImageWidth
          const resizedImg1Canvas = document.createElement("canvas")
          const aspectRatio1 = img1.height / img1.width
          resizedImg1Canvas.width = firstImageWidth
          resizedImg1Canvas.height = firstImageWidth * aspectRatio1
          const ctx1 = resizedImg1Canvas.getContext("2d")
          if (!ctx1) {
            throw new Error("Could not get canvas context for first image")
          }
          ctx1.drawImage(
            img1,
            0,
            0,
            firstImageWidth,
            firstImageWidth * aspectRatio1
          )
          const resizedImg1 = new Image()
          resizedImg1.src = resizedImg1Canvas.toDataURL()
          await new Promise((resolve) => {
            resizedImg1.onload = resolve
          })

          // Resize second image using the secondImageWidth
          const resizedImg2Canvas = document.createElement("canvas")
          const aspectRatio2 = img2.height / img2.width
          resizedImg2Canvas.width = secondImageWidth
          resizedImg2Canvas.height = secondImageWidth * aspectRatio2
          const ctx2 = resizedImg2Canvas.getContext("2d")
          if (!ctx2) {
            throw new Error("Could not get canvas context for second image")
          }
          ctx2.drawImage(
            img2,
            0,
            0,
            secondImageWidth,
            secondImageWidth * aspectRatio2
          )
          const resizedImg2 = new Image()
          resizedImg2.src = resizedImg2Canvas.toDataURL()
          await new Promise((resolve) => {
            resizedImg2.onload = resolve
          })

          // Create an offscreen canvas
          const canvas = document.createElement("canvas")
          canvas.width = outputWidth
          canvas.height = outputHeight
          const ctx = canvas.getContext("2d")

          if (!ctx) {
            throw new Error("Could not get canvas context")
          }

          // Process each cell in the grid
          for (let rowIndex = 0; rowIndex < gridValues.length; rowIndex++) {
            for (
              let cellIndex = 0;
              cellIndex < gridValues[rowIndex].length;
              cellIndex++
            ) {
              const cell = gridValues[rowIndex][cellIndex]

              // Calculate source coordinates taking into account the resized images
              const sourceX1 =
                (cellIndex * squareSize * resizedImg1.width) / outputWidth
              const sourceY1 =
                (rowIndex * squareSize * resizedImg1.height) / outputHeight
              const sourceX2 =
                (cellIndex * squareSize * resizedImg2.width) / outputWidth
              const sourceY2 =
                (rowIndex * squareSize * resizedImg2.height) / outputHeight

              // Position in the output image
              const targetX = cellIndex * squareSize
              const targetY = rowIndex * squareSize

              // Draw square based on cell value
              if (cell === 1) {
                // Draw square from first image
                ctx.drawImage(
                  resizedImg1,
                  sourceX1,
                  sourceY1,
                  (squareSize * resizedImg1.width) / outputWidth,
                  (squareSize * resizedImg1.height) / outputHeight,
                  targetX,
                  targetY,
                  squareSize,
                  squareSize
                )
              } else {
                // Draw square from second image
                ctx.drawImage(
                  resizedImg2,
                  sourceX2,
                  sourceY2,
                  (squareSize * resizedImg2.width) / outputWidth,
                  (squareSize * resizedImg2.height) / outputHeight,
                  targetX,
                  targetY,
                  squareSize,
                  squareSize
                )
              }
            }
          }

          // Convert to base64 for display
          const base64Image = canvas.toDataURL("image/jpeg")

          // Update state with the new image
          setPreviewImage(base64Image)
        } catch (error) {
          console.error("Error generating preview image:", error)
        }
      }
    }

    generatePreviewImage()
  }, [
    firstImage,
    secondImage,
    gridValues,
    squareSize,
    columns,
    rows,
    firstImageWidth,
    secondImageWidth,
    setPreviewImage,
    previewImage,
  ])

  return (
    <div className="tejido-preview">
      <div className="tejido-preview__image">
        {firstImage !== "" && secondImage !== "" && (
          <img
            src={previewImage ? previewImage : firstImage}
            alt="Preview Image"
          />
        )}
      </div>
    </div>
  )
}
