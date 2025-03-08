export default function SquareSize({
  squareSize,
  setSquareSize,
}: {
  squareSize: number
  setSquareSize: (squareSize: number) => void
}) {
  return (
    <div className="square-size-input-container">
      <label className="square-size-input-label" htmlFor="square-size">
        Square Size
      </label>
      <div className="square-size-input-buttons-container">
        <button
          className="square-size-minus-button"
          onClick={() => {
            if (squareSize > 1) {
              setSquareSize(squareSize - 1)
            }
          }}
        >
          -
        </button>
        <div className="square-size-value">{squareSize}</div>
        <button
          className="square-size-plus-button"
          onClick={() => setSquareSize(squareSize + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}
