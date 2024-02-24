import reactLogo from '../assets/react.svg';
import '../css/index.css';

const Footer = () => {
  return (
    <div className='footer'>
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
  )
}

export default Footer