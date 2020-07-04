import React from "react";
import loginImg from "../../../images/kopeechkaLogo.png";
import { Field } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";
import { Alert } from "antd";
import style from "./LoginRegister.module.css"

export class Login extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className={style.baseContainer}>
                    <div className={style.content}>
                        <div className={style.image}>
                            <img src={loginImg} alt='#'/>
                        </div>
                        <div className={style.form}>
                            <div className={style.formGroup}>
                                <Field component={Input} type={"text"}
                                       name={"email"} placeholder={"Почта"}
                                       validate={[required]}/>
                            </div>
                            <div className={style.formGroup}>
                                <Field component={Input} type={"password"}
                                       name={"password"} placeholder={"Пароль"}
                                       validate={[required]}/>
                            </div>
                        </div>
                        {this.props.error && <Alert message={this.props.error} type="error" showIcon />}
                    </div>

                    <div className={style.footer}>
                        <button className={style.btn}>
                            Войти
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}