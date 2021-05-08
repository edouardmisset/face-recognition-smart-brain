import './FaceRecognition.css';

export default function FaceRecognition({ imageUrl, box }) {
  console.log(box);
  return (
    <div className='center mt4'>
      <div className='mt2 absolute'>
        <img src={imageUrl} alt='input' />
        <div
          className='bounding-box'
          style={{
            top: `${box.top_row * 100}%`,
            right: `${box.right_col * 100}%`,
            bottom: `${box.bottom_row * 100}%`,
            left: `${box.left_col * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
