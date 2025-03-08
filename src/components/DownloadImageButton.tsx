export default function DownloadImageButton({
  previewImage,
}: {
  previewImage: string
}) {
  return (
    <button
      className="download-image-button"
      onClick={() => {
        const link = document.createElement("a")
        link.href = previewImage
        link.download = "preview.png"
        link.click()
      }}
    >
      Download Image
    </button>
  )
}
