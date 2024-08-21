import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className="flex items-center gap-2">
        <img src='/logo.png' alt="Logo" className="w-12 h-12 object-contain" />
    </Link>
  )
}

export default Logo