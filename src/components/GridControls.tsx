import ColumnsCounter from "./ColumnsCounter"
import DownloadGridButton from "./DownloadGridButton"
import PatternEffects from "./PatternEffects"
import RowsCounter from "./RowsCounter"
import ShowBorders from "./ShowBorders"
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
      <ShowBorders />
      <DownloadGridButton />
      <UploadGridButton />
    </div>
  )
}
