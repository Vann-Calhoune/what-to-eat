import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/List'>List</Link>
        <Link to='/Random'>Random</Link>
    </nav>
  )
}

export default Navbar