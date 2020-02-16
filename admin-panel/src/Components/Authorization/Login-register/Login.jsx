import React from "react";
import loginImg from "../../../kopeechkaLogo.png";
import {Field} from "redux-form";

export class Login extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="base-container">
                    <div className="content">
                        <div className="image">
                            <img src={loginImg}/>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <Field component={"input"} type={"text"} name={"email"} placeholder={"Почта"}/>
                            </div>
                            <div className="form-group">
                                <Field component={"input"} type={"password"} name={"password"} placeholder={"Пароль"}/>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button className="btn">
                            Авторизоваться
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}