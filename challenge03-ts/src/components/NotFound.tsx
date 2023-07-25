import { Link } from 'react-router-dom';
import cat404 from '../assets/cat404.jpg';

const NotFound: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#F9F9F9', height: '100vh' }}>
      <img
        style={{
          borderRadius: '1.5rem'
        }}
        src={cat404}
        alt="cat 404 meme" />
      <button
        style={{
          width: '90vw',
          height: '3.6rem',
          backgroundColor: '#0ACF83',
          border: '1px solid #0ACF83',
          borderRadius: '1rem',
          padding: '0',
          margin: 'auto',
          cursor: 'pointer',
        }}
      >
        <Link
          style={{
            textDecoration: 'none',
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: '600'
          }}
          to='/home'>Take me away</Link>
      </button>
    </div>
  )
};

export default NotFound;
