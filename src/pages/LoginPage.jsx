import { useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";

function LoginPage() {
    const {login} = useAuth()
    const navigate = useNavigate()

    const handleLogin = ()=>{
        login()
        navigate('/movies')
    }

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded ">
        Login
      </button>
    </div>
  )
}

export default LoginPage
