import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import TextField from "../../../components/TextField/TextField";
import * as Yup from "yup";
import { SignUpSchema } from "../../../utils/schemas/signUp.schema";
import { Link } from "react-router-dom";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    confirmPassword: "",
    date: "",
};

export default function signUp() {

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validateOnBlur={true}
                validateOnChange={false}
                validationSchema={SignUpSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {(formik) => (
                    <div>
                        <h1 className="">Signup</h1>
                        <Form className="form p-3">
                            <div>
                                <h2> Essencial Information</h2>

                                <TextField
                                    type="text"
                                    label="Firstname"
                                    name="firstName"
                                    placeholder="Your First name here"
                                />
                                <TextField
                                    type="text"
                                    name="lastName"
                                    label="Lastname"
                                    placeholder="Your Last name here"
                                />
                                <TextField
                                    type="email"
                                    name="email"
                                    label="Email"
                                    placeholder="example@example.com"
                                />


                            </div>

                            <div> <h2>Date Of Birth</h2>
                                <TextField
                                    type="number"
                                    name="dayOfBirth"
                                    label="Day"
                                    placeholder="DD"
                                />
                                <TextField
                                    type="number"
                                    name="monthOfBirth"
                                    label="Month"
                                    placeholder="MM"
                                />
                                <TextField
                                    type="number"
                                    name="yearOfBirth"
                                    label="Year"
                                    placeholder="YYYY"
                                />
                            </div>
                            <div> <h2>Time Of Birth</h2>
                                <TextField
                                    type="time"
                                    name="timeOfBirth"
                                    label="time"
                                    placeholder="00:00"
                                />

                            </div>

                            <div>
                                <h2> Password </h2>
                                <TextField
                                    type="text"
                                    name="password"
                                    label="Password"
                                    placeholder="****"
                                />
                                <div className="mb-2">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        id="confirmPassword"
                                        className={`form-control shadow-none ${formik.touched.confirmPassword &&
                                            formik.errors.confirmPassword &&
                                            "is-invalid"
                                            }`}
                                        type="text"
                                        name="confirmPassword"
                                        placeholder="confirm password..."
                                        {...formik.getFieldProps("confirmPassword")}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="confirmPassword"
                                        className="error"
                                    />
                                </div>
                            </div>

                            <button className="btn btn-dark m-3" type="submit">
                                Register
                            </button>
                            <button className="btn btn-primary m-3" type="reset">
                                Reset
                            </button>
                            <Link className="btn btn-light m-3" to="/"> Atras </Link>


                        </Form>
                    </div>
                )
                }
            </Formik >
        </div >
    );
}

