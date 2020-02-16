import React from "react";
import loginImg from "../../../kopeechkaLogo.png";
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";

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
                                <Field component={Input} type={"text"}
                                       name={"email"} placeholder={"Почта"}
                                       validate={[required]}/>
                            </div>
                            <div className="form-group">
                                <Field component={Input} type={"password"}
                                       name={"password"} placeholder={"Пароль"}
                                       validate={[required]}/>
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