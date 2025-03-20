import { useTejido } from "../hooks/useTejido"

export default function SquareSizeCounter() {
  const { squareSize, setSquareSize } = useTejido()

  return (
    <div className="counter-container">
      <label className="counter-label" htmlFor="square-size">
        square size (px)
      </label>
      <div className="counter-buttons-container">
        <button
          className="counter-minus-button"
          onClick={() => {
            if (squareSize > 1) {
              setSquareSize(squareSize - 1)
            }
          }}
        >
          -
        </button>
        <div className="counter-value">{squareSize}</div>
        <button
          className="counter-plus-button"
          onClick={() => setSquareSize(squareSize + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}
