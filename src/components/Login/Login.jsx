import React from "react";
import "./login.css"
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../utils/validators/validators";
import {Input} from "../Common/FormConstrols/FormControl";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLenght10 = maxLenghtCreator(25);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="login__form">
            <div className="form__item">
                <Field component={Input} validate={[required, maxLenght10]} name="email" type="text" placeholder="email"/>
            </div>
            <div className="form__item">
                <Field component={Input} validate={[required, maxLenght10]} name="password" type="password" className="form__input" placeholder="password"/>
            </div>
            <div className="form__item">
                <Field component={Input} name="rememberMe" type="checkbox" className="form__input"/>
            </div>
            {
                props.error && <div className="form__summary-error">{props.error}</div>
            }
            <div className="form__item">
                <button className="form__submit">Login</button>
            </div>
        </form>
    )
};

export const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: "login"
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className="login">
            <h1 className="login__title">Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);