export default function RowsInput({
  rows,
  setRows,
}: {
  rows: number
  setRows: (rows: number) => void
}) {
  return (
    <div className="rows-input-container">
      <label className="rows-input-label" htmlFor="rows">
        Rows
      </label>
      <div className="rows-input-buttons-container">
        <button
          className="rows-minus-button"
          onClick={() => {
            if (rows > 1) {
              setRows(rows - 1)
            }
          }}
        >
          -
        </button>
        <div className="rows-value">{rows}</div>
        <button className="rows-plus-button" onClick={() => setRows(rows + 1)}>
          +
        </button>
      </div>
    </div>
  )
}
