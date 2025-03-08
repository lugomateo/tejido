interface ImageControlsProps {
  firstImagePreview: boolean
  secondImagePreview: boolean
  setFirstImagePreview: (preview: boolean) => void
  setSecondImagePreview: (preview: boolean) => void
  setFirstImageWidth: (width: number) => void
  setSecondImageWidth: (width: number) => void
  firstImageWidth: number
  secondImageWidth: number
}

export default function ImageControls({
  firstImagePreview,
  secondImagePreview,
  setFirstImagePreview,
  setSecondImagePreview,
  setFirstImageWidth,
  setSecondImageWidth,
  firstImageWidth,
  secondImageWidth,
}: ImageControlsProps) {
  return (
    <div className="image-controls">
      <div className="image-controls__input-container">
        <label htmlFor="first-image-width">
          First Image Width: {firstImageWidth}px
        </label>
        <input
          id="first-image-width"
          type="range"
          min="0"
          max="1600"
          value={firstImageWidth}
          onChange={(e) => setFirstImageWidth(Number(e.target.value))}
        />
      </div>
      <div className="image-controls__input-container">
        <label htmlFor="second-image-width">
          Second Image Width: {secondImageWidth}px
        </label>
        <input
          id="second-image-width"
          type="range"
          min="0"
          max="1600"
          value={secondImageWidth}
          onChange={(e) => setSecondImageWidth(Number(e.target.value))}
        />
      </div>
      <div>
        <button
          className="image-controls__button"
          onClick={() => setFirstImagePreview(!firstImagePreview)}
        >
          {firstImagePreview ? "Hide" : "Show"} First Image
        </button>
      </div>
      <div>
        <button
          className="image-controls__button"
          onClick={() => setSecondImagePreview(!secondImagePreview)}
        >
          {secondImagePreview ? "Hide" : "Show"} Second Image
        </button>
      </div>
    </div>
  )
}
