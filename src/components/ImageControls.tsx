import DownloadImageButton from "./DownloadImageButton"
import UploadImageButton from "./UploadImageButton"

export default function ImageControls() {
  return (
    <div className="image-controls-container">
      <span className="image-controls-label">image controls</span>
      <UploadImageButton />
      <DownloadImageButton />
    </div>
  )
}
