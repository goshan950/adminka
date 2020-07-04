import React from "react";
import loginImg from "../../../images/kopeechkaLogo.png";
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";
import style from "./LoginRegister.module.css"

export class Register extends React.Component {
    render() {
        return (
            <div className={style.baseContainer} ref={this.props.containerRef}>
                <div className={style.content}>
                    <div className={style.image}>
                        <img src={loginImg} alt={'#'} />
                    </div>
                    <div className={style.form}>
                        <div className={style.formGroup}>
                            <Field component={Input} type={"text"}
                                   name={"email"} placeholder={"Введите вашу почту"}
                                   validate={[required]}/>
                        </div>
                    </div>
                </div>
                <div className={style.footer}>
                    <button type="button" className={style.btn}>
                        Регистрация
                    </button>
                </div>
            </div>
        );
    }
}