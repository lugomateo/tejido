export default function TejidoPreview({
  firstImage,
  secondImage,
  gridValues,
  columns,
  rows,
}: {
  firstImage: string
  secondImage: string
  gridValues: number[][]
  columns: number
  rows: number
}) {
  console.log(gridValues)
  console.log(columns)
  console.log(rows)

  return (
    <div className="tejido-preview">
      <div className="tejido-preview__image">
        {firstImage !== "" && <img src={firstImage} alt="First Image" />}
      </div>
      <div className="tejido-preview__image">
        {secondImage !== "" && <img src={secondImage} alt="Second Image" />}
      </div>
    </div>
  )
}
