import ColumnsCounter from "./ColumnsCounter"
import DownloadGridButton from "./DownloadGridButton"
import PatternEffects from "./PatternEffects"
import RowsCounter from "./RowsCounter"
import BordersToggle from "./BordersToggle"
import SquareSizeCounter from "./SquareSizeCounter"
import UploadGridButton from "./UploadGridButton"

export default function GridControls() {
  return (
    <div className="grid-controls-container">
      <span className="grid-controls-label">grid controls</span>
      <ColumnsCounter />
      <RowsCounter />
      <SquareSizeCounter />
      <PatternEffects />
      <BordersToggle />
      <DownloadGridButton />
      <UploadGridButton />
    </div>
  )
}
