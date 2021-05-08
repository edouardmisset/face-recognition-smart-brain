import './ImageLinkForm.css';

export default function ImageLinkForm({ onInputChange, onButtonSubmit }) {
  return (
    <div>
      <p className='f3'>
        This Magic 🧠 will detect faces in your pictures. Give it a try!
      </p>
      <div className='center'>
        <div className='form pa4 br3 shadow-4 center'>
          <input
          placeholder='Enter URL 🔗'
            onChange={onInputChange}
            type='text'
            className='f4 pa2 br3 center w-70'
          />
          <button
            onClick={onButtonSubmit}
            className='w-30 grow f4 link ph3 pv2 br3 dib white bg-blue'
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
