import TejidoProvider from "../contexts/TejidoContext"
import DownloadGridButton from "../components/DownloadGridButton"
import RowsInput from "../components/RowsInput"
import TejidoGrid from "../components/TejidoGrid"
import ColumnsInput from "../components/ColumnsInput"
import PatternInput from "../components/PatternInput"
import UploadGridButton from "../components/UploadGridButton"
import UploadImageButton from "../components/UploadImageButton"
import SquareSize from "../components/SquareSize"
import DownloadImageButton from "../components/DownloadImageButton"
import ShowBorders from "../components/ShowBorders"

export default function Landing() {
  return (
    <TejidoProvider>
      <div>
        <h1 className="title">tejido</h1>
        <div className="ui-container">
          <div className="input-container">
            <ColumnsInput />
            <RowsInput />
            <SquareSize />
            <ShowBorders />
            <PatternInput />
            <UploadImageButton />
            <DownloadGridButton />
            <UploadGridButton />
            <DownloadImageButton />
          </div>
          <div className="tejido-preview-container">
            <TejidoGrid />
          </div>
        </div>
      </div>
    </TejidoProvider>
  )
}
