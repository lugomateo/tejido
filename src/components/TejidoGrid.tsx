interface TejidoGridProps {
  firstImage: string
  secondImage: string
  firstImageWidth: number
  secondImageWidth: number
  firstImagePreview: boolean
  secondImagePreview: boolean
  squareSize: number
  grid: {
    values: number[][]
    columns: number
    rows: number
  }
  setGridValues: (values: number[][]) => void
}

export default function TejidoGrid({
  firstImage,
  secondImage,
  firstImageWidth,
  secondImageWidth,
  firstImagePreview,
  secondImagePreview,
  squareSize,
  grid,
  setGridValues,
}: TejidoGridProps) {
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const newGridValues = [...grid.values]
    newGridValues[rowIndex][colIndex] =
      newGridValues[rowIndex][colIndex] === 0 ? 1 : 0
    setGridValues(newGridValues)
  }

  return (
    <div className="tejido__container">
      <div
        className="tejido-grid__container"
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
        }}
      >
        {grid.values.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((value, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${value ? "active" : ""}`}
                style={{
                  width: `${squareSize}px`,
                  height: `${squareSize}px`,
                }}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      {firstImagePreview && (
        <div
          className="tejido-grid__image-container"
          style={{
            width: `${firstImageWidth}px`,
          }}
        >
          {firstImage !== "" && <img src={firstImage} alt="First Image" />}
        </div>
      )}
      {secondImagePreview && (
        <div
          className="tejido-grid__image-container"
          style={{
            width: `${secondImageWidth}px`,
          }}
        >
          {secondImage !== "" && <img src={secondImage} alt="Second Image" />}
        </div>
      )}
    </div>
  )
}
