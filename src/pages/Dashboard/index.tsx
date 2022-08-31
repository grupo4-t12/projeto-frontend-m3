import { Link } from "react-router-dom"

function dashboard() {
    return (
        <>
            <Link to="/"><button>Logout</button></Link>
            <p>Bem-vindo!!!</p>
        </>
    )
}

export default dashboard