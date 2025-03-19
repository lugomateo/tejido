import { useTejido } from "../hooks/useTejido"

export default function TejidoGrid() {
  const {
    firstImage,
    secondImage,
    squareSize,
    grid,
    showBorders,
    setGridValues,
    gridContainerRef,
  } = useTejido()

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const newGridValues = [...grid.values]
    newGridValues[rowIndex][colIndex] =
      newGridValues[rowIndex][colIndex] === 0 ? 1 : 0
    setGridValues(newGridValues)
  }

  const containerWidth = grid.columns * squareSize
  const containerHeight = grid.rows * squareSize

  return (
    <div className="tejido__container">
      <div
        ref={gridContainerRef}
        className="tejido-grid__container"
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
        }}
      >
        {grid.values.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((value, colIndex) => {
              const bgPositionX = -(colIndex * squareSize)
              const bgPositionY = -(rowIndex * squareSize)

              return (
                <div
                  key={colIndex}
                  className={`cell ${value ? "active" : ""} ${
                    showBorders ? "border" : ""
                  }`}
                  style={{
                    width: `${squareSize}px`,
                    height: `${squareSize}px`,
                    backgroundColor: value ? "black" : "white",
                    backgroundImage: value
                      ? secondImage !== ""
                        ? `url(${secondImage})`
                        : "none"
                      : firstImage !== ""
                      ? `url(${firstImage})`
                      : "none",
                    backgroundSize: `${containerWidth}px ${containerHeight}px`,
                    backgroundPosition: `${bgPositionX}px ${bgPositionY}px`,
                  }}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                ></div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
