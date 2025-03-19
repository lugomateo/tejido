import { useTejido } from "../hooks/useTejido"
import { useEffect, useRef } from "react"

export default function DownloadImageButton() {
  const { downloadImage, generateDownloadImage } = useTejido()
  const shouldDownloadRef = useRef(false)

  useEffect(() => {
    if (downloadImage && shouldDownloadRef.current) {
      const link = document.createElement("a")
      link.href = downloadImage
      link.download = "tejido.jpg"
      link.click()
      shouldDownloadRef.current = false
    }
  }, [downloadImage])

  const handleDownloadClick = async () => {
    shouldDownloadRef.current = true
    await generateDownloadImage()
  }

  return (
    <button className="download-image-button" onClick={handleDownloadClick}>
      Download Image
    </button>
  )
}
