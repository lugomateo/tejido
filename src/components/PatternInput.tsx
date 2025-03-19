import { useTejido } from "../hooks/useTejido"

export default function PatternInput() {
  const { gridValues, setGridValues, columns, rows } = useTejido()

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

  const handleRandom = () => {
    const random = Array(rows)
      .fill(0)
      .map(() => Array(columns).fill(0))

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        random[i][j] = Math.floor(Math.random() * 2)
      }
    }
    setGridValues(random)
  }

  const handleInvert = () => {
    setGridValues(
      gridValues.map((row) => row.map((cell) => (cell === 0 ? 1 : 0)))
    )
  }

  return (
    <div className="pattern-input-container">
      <button onClick={handleCheckerboard} className="pattern-button">
        Checkerboard
      </button>
      <button onClick={handleRandom} className="pattern-button">
        Random
      </button>
      <button onClick={handleInvert} className="pattern-button">
        Invert
      </button>
    </div>
  )
}
