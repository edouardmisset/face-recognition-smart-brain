import './FaceRecognition.css';

export default function FaceRecognition({
  imageUrl,
  box: { topRow, rightCol, bottomRow, leftCol },
}) {
  return (
    <div className='center mt4'>
      <div className='mt2 absolute'>
        <img id='input-image' src={imageUrl} alt='input' />
        <div
          className='bounding-box'
          style={{
            top: topRow,
            right: rightCol,
            bottom: bottomRow,
            left: leftCol,
          }}
        ></div>
      </div>
    </div>
  );
}
