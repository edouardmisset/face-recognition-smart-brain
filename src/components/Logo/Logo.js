import Tilt from 'react-parallax-tilt';
import './Logo.css';

export default function Logo() {
  return (
    <Tilt
      className='parallax-effect super-center br-2 shadow-2'
      perspective={1000}
    >
      <div className='inner-element superimpose back super-center'>🧠</div>
      <div className='middle superimpose super-center'>🧠</div>
      <div className='front superimpose supper-center'>🧠</div>
    </Tilt>
  );
}
