interface DownloadGridButtonProps {
  grid: {
    values: number[][]
    columns: number
    rows: number
  }
  filename?: string
}

export default function DownloadGridButton({
  grid,
  filename = "tejido-grid.json",
}: DownloadGridButtonProps) {
  const handleDownload = () => {
    // Convert the grid object to a JSON string
    const gridJSON = JSON.stringify(grid, null, 2)

    // Create a blob with the JSON data
    const blob = new Blob([gridJSON], { type: "application/json" })

    // Create a URL for the blob
    const url = URL.createObjectURL(blob)

    // Create a temporary anchor element
    const a = document.createElement("a")
    a.href = url
    a.download = filename

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
