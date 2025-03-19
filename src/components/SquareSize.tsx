import { useTejido } from "../hooks/useTejido"

export default function SquareSize() {
  const { squareSize, setSquareSize } = useTejido()

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
