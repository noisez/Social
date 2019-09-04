import React from "react";
import "./login.css"
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="login__form">
            <div className="form__item">
                <Field component="input" name="login" type="text" className="form__input" placeholder="login"/>
            </div>
            <div className="form__item">
                <Field component="input" name="password" type="text" className="form__input" placeholder="password"/>
            </div>
            <div className="form__item">
                <Field component="input" name="rememberMe" type="checkbox" className="form__input"/>
            </div>
            <div className="form__item">
                <button className="form__submit">Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: "login"
})(LoginForm);

const Login = () => {

    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div className="login">
            <h1 className="login__title">Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

export default Login;