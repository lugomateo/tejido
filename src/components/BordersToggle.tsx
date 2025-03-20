import { useTejido } from "../hooks/useTejido"

export default function BordersToggle() {
  const { showBorders, setShowBorders } = useTejido()

  return (
    <div>
      <button
        className={`toggle-button ${showBorders ? "active" : ""}`}
        onClick={() => setShowBorders(!showBorders)}
      >
        {showBorders ? "hide" : "show"} borders
      </button>
    </div>
  )
}
