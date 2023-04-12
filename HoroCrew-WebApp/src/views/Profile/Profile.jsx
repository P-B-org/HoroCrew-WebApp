import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export const Profile = () => {

    const { currentUser } = useContext(AuthContext)
    return (

        <div>
            <h1> Profile of {currentUser.firstName} </h1>
        </div>

    )
}
