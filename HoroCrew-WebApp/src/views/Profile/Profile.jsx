import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { AppBack } from "../../components/Background/Background";

export const Profile = () => {

    const { currentUser } = useContext(AuthContext)
    return (

        <div>
            <h1> Profile of {currentUser.firstName} </h1>
        </div>

    )
}
