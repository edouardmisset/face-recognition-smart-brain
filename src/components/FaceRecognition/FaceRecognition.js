import './FaceRecognition.css';

export default function FaceRecognition({ imageUrl }) {
  return (
    <div className='center mt4'>
      <img src={imageUrl} alt='' />
    </div>
  );
}
