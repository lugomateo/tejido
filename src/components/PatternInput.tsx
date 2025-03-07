export default function PatternInput({
  setGridValues,
  columns,
  rows,
}: {
  setGridValues: (gridValues: number[][]) => void
  columns: number
  rows: number
}) {
  const handleCheckerboard = () => {
    const checkerboard = Array(rows)
      .fill(0)
      .map(() => Array(columns).fill(0))

    for (let i = 0; i < rows; i++) {
      const rowStartValue = i % 2

      for (let j = 0; j < columns; j++) {
        checkerboard[i][j] = (rowStartValue + j) % 2
      }
    }
    setGridValues(checkerboard)
  }

  return (
    <div className="pattern-input-container">
      <button onClick={handleCheckerboard} className="pattern-button">
        Checkerboard
      </button>
    </div>
  )
}
