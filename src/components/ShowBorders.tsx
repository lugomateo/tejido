import { useTejido } from "../hooks/useTejido"

export default function ShowBorders() {
  const { showBorders, setShowBorders } = useTejido()

  return (
    <div>
      <button
        className="image-controls__button"
        onClick={() => setShowBorders(!showBorders)}
      >
        {showBorders ? "Hide" : "Show"} Borders
      </button>
    </div>
  )
}
