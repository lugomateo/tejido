import { useTejido } from "../hooks/useTejido"

export default function ColumnsCounter() {
  const { columns, setColumns } = useTejido()

  return (
    <div className="counter-container">
      <label className="counter-label" htmlFor="columns">
        columns
      </label>
      <div className="counter-buttons-container">
        <button
          className="counter-minus-button"
          onClick={() => {
            if (columns > 1) {
              setColumns(columns - 1)
            }
          }}
        >
          -
        </button>
        <div className="counter-value">{columns}</div>
        <button
          className="counter-plus-button"
          onClick={() => setColumns(columns + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}
