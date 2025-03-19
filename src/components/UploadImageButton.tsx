import { useTejido } from "../hooks/useTejido"

export default function UploadImageButton() {
  const { setFirstImage, setSecondImage } = useTejido()

  return (
    <div className="upload-button">
      <label htmlFor="upload-image" className="upload-button__label">
        Upload First Image
      </label>
      <input
        type="file"
        id="upload-image"
        className="upload-button__input"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) {
            setFirstImage(URL.createObjectURL(file))
          }
        }}
      />
      <label htmlFor="upload-image" className="upload-button__label">
        Upload Second Image
      </label>
      <input
        type="file"
        id="upload-image"
        className="upload-button__input"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) {
            setSecondImage(URL.createObjectURL(file))
          }
        }}
      />
    </div>
  )
}
