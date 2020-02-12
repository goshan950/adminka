import React from "react";
import loginImg from "../../../kopeechkaLogo.png";

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                {/*<div className="header">Login</div>*/}
                <div className="content">
                    <div className="image">
                        <img src={loginImg}/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            {/*<label htmlFor="username">Почта</label>*/}
                            <input type="text" name="username" placeholder="Почта"/>
                        </div>
                        <div className="form-group">
                            {/*<label htmlFor="password">Пароль</label>*/}
                            <input type="password" name="password" placeholder="Пароль"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Авторизоваться
                    </button>
                </div>
            </div>
        );
    }
}