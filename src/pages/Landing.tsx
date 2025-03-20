import TejidoProvider from "../contexts/TejidoContext"
import TejidoGrid from "../components/TejidoGrid"
import ImageControls from "../components/ImageControls"
import GridControls from "../components/GridControls"

export default function Landing() {
  return (
    <TejidoProvider>
      <div>
        <h1 className="title">tejido</h1>
        <div className="ui-container">
          <div className="input-container">
            <GridControls />
            <ImageControls />
          </div>
          <div className="tejido-preview-container">
            <TejidoGrid />
          </div>
        </div>
      </div>
    </TejidoProvider>
  )
}
