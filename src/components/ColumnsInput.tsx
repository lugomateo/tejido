import { useTejido } from "../hooks/useTejido"

export default function ColumnsInput() {
  const { columns, setColumns } = useTejido()

  return (
    <div className="columns-input-container">
      <label className="columns-input-label" htmlFor="columns">
        Columns
      </label>
      <div className="columns-input-buttons-container">
        <button
          className="columns-minus-button"
          onClick={() => {
            if (columns > 1) {
              setColumns(columns - 1)
            }
          }}
        >
          -
        </button>
        <div className="columns-value">{columns}</div>
        <button
          className="columns-plus-button"
          onClick={() => setColumns(columns + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}
