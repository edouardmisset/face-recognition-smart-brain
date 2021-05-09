import Tilt from 'react-parallax-tilt';
import './Logo.css';

export default function Logo() {
  return (
    <Tilt
      className='parallax-effect ma4 super-center br-2 shadow-2'
      perspective={1000}
    >
      <div className='inner-element super-center'>🧠</div>
    </Tilt>
  );
}
