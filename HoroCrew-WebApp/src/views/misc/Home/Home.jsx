import { Link } from "react-router-dom";
import "./Home.css";



export const Home = () => {

    return (
        <div className="allContainer-Home">
            <div id="titleContainer">
                <h1 className="title"> Welcome to HoroCrew</h1>
                <Link type="button" className="btn join-btn" aria-current="page" to="/signup">Join Us</Link>
                <Link type="button" className="btn join-btn" aria-current="page" to="/login"> Already have an account?</Link>
            </div>
        </div>
    )

}

