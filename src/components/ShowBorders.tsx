export default function ShowBorders({
  showBorders,
  setShowBorders,
}: {
  showBorders: boolean
  setShowBorders: (showBorders: boolean) => void
}) {
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
