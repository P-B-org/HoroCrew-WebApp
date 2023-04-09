
const faceio = "";
useEffect(() => {
    faceio = new faceIO("fioa76d4") // CONVERTIR EL PUBLICID EN ENV
}, []);

const handleSignIn = async () => {
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


export const FacialIO = () => {
    return (
        <section>
            <h1> Face Auth by IO</h1>
            <button onClick={handleSignIn}>Sign-in</button>
            <button onClick={handleLogIn}> Log-in</button>
        </section>
    );
}

