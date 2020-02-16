import React from "react";
import "./Authorization.scss";
import { Login, Register } from "./Login-register/LoginRegister";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogginActive: true
        };
    }

    componentDidMount() {
        //Add .right by default
        if (!this.props.isAuth) {
        this.rightSide.classList.add("right")
        }
    }

    changeState() {
        const { isLogginActive } = this.state;

        if (isLogginActive) {
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
        } else {
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right");
        }
        this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    }

    render() {
        const onSubmit = (formData) => {
            this.props.login(formData.email, formData.password, true)
        };
        const { isLogginActive } = this.state;
        const current = isLogginActive ? "Регистрация" : "Вход";
        const currentActive = isLogginActive ? "login" : "Register.jsx";
        if (this.props.isAuth) {
            return <Redirect to={"/profile"} />
        }
        return (
            <div className="bg-modal">
            <div className="App">
                <div className="login">
                    <div className="container" ref={ref => (this.container = ref)}>
                        {isLogginActive && (
                            <LoginReduxForm onSubmit={onSubmit} containerRef={ref => (this.current = ref)} />
                        )}
                        {!isLogginActive && (
                            <Register containerRef={ref => (this.current = ref)} />
                        )}
                    </div>
                    <RightSide
                        current={current}
                        currentActive={currentActive}
                        containerRef={ref => (this.rightSide = ref)}
                        onClick={this.changeState.bind(this)}
                    />
                </div>
            </div>
            </div>
        );
    }
}

const LoginReduxForm = reduxForm({form: 'login'}) (Login);

const RightSide = props => {
    return (
        <div
            className="right-side"
            ref={props.containerRef}
            onClick={props.onClick}
        >
            <div className="inner-container">
                <div className="text">{props.current}</div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Authorization);