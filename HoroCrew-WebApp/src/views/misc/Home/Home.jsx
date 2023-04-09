import { Link } from "react-router-dom";
/*import "./Home.css";



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

}*/

import { useEffect } from "react";

export const FacialIO = () => {

    let faceio;

    useEffect(() => {
        faceio = new faceIO("fioa76d4") // CONVERTIR EL PUBLICID EN ENV
    }, []);



    const handleSignUp = async () => {
        try {
            let response = await faceio.enroll({
                locale: "auto",
                payload: {
                    email: "example@gmail.com",
                    pin: "12345",
                },
            });

            console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogIn = async () => {
        try {
            let response = await faceio.authenticate({
                locale: "auto",
            });

            console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <section >
            <h1>
                Face Authentication by FaceIO
            </h1>
            <div className="flex flex-col justify-center items-center">
                <button

                    onClick={handleSignUp}
                >
                    register {/* register working */}
                </button>
                <button

                    onClick={handleLogIn}
                >
                    <Link to="/profile" >Log-in  </Link> {/* refresh page.. login working*/}
                </button>
            </div>
        </section>
    );
}
