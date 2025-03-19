import { useTejido } from "../hooks/useTejido"

export default function DownloadGridButton() {
  const { squareSize, grid } = useTejido()

  const handleDownload = () => {
    // Convert the grid object to a JSON string
    const gridJSON = JSON.stringify(
      {
        ...grid,
        squareSize,
      },
      null,
      2
    )
    // Create a blob with the JSON data
    const blob = new Blob([gridJSON], { type: "application/json" })

    // Create a URL for the blob
    const url = URL.createObjectURL(blob)

    // Create a temporary anchor element
    const a = document.createElement("a")
    a.href = url
    a.download = "tejido-grid.json"

    // Trigger the download
    document.body.appendChild(a)
    a.click()

    // Clean up
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <button onClick={handleDownload} className="download-button">
      Download Pattern
    </button>
  )
}
