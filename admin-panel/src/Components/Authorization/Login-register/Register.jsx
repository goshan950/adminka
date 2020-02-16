import React from "react";
import loginImg from "../../../kopeechkaLogo.png";
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";


export class Register extends React.Component {
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <Field component={Input} type={"text"}
                                   name={"email"} placeholder={"Введите вашу почту"}
                                   validate={[required]}/>
                            {/*<input type="text" name="email" placeholder="Введите вашу почту"/>*/}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Регистрация
                    </button>
                </div>
            </div>
        );
    }
}