import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export const Profile = () => {
    const { getCurrentUser } = useContext(AuthContext)
    return (
        <div>
            <h1> Profile of {getCurrentUser.firstName} {getCurrentUser.lastName} </h1>
        </div>
    )
}
