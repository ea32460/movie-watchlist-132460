import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// TODO: import and use AuthContext here to show conditional links

function Navbar() {
    const { user, logout } = useAuth()

    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
            <Link to="/" className="font-bold text-lg">Movie Watchlist</Link>


            <div className="flex gap-4 text-sm items-center">
                {!user ? (
                    <Link to="/login" className="hover:underline">
                        Login
                    </Link>
                ) : (
                    <>
                        <span>Welcome, {user.name}</span>
                        <button
                            onClick={logout}
                            className="bg-red-500 px-2 py-1 rounded">
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar
