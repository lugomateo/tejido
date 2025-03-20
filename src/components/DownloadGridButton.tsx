import { useTejido } from "../hooks/useTejido"

export default function DownloadGridButton() {
  const { squareSize, grid } = useTejido()

  const handleDownload = () => {
    const gridJSON = JSON.stringify(
      {
        ...grid,
        squareSize,
      },
      null,
      2
    )
    const blob = new Blob([gridJSON], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "tejido-grid.json"

    document.body.appendChild(a)
    a.click()

    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <button onClick={handleDownload} className="download-button">
      Download Pattern
    </button>
  )
}
