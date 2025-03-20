import { useTejido } from "../hooks/useTejido"

export default function RowsCounter() {
  const { rows, setRows } = useTejido()

  return (
    <div className="counter-container">
      <label className="counter-label" htmlFor="rows">
        rows
      </label>
      <div className="counter-buttons-container">
        <button
          className="counter-minus-button"
          onClick={() => {
            if (rows > 1) {
              setRows(rows - 1)
            }
          }}
        >
          -
        </button>
        <div className="counter-value">{rows}</div>
        <button
          className="counter-plus-button"
          onClick={() => setRows(rows + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}
