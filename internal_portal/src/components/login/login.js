import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from '../../css/login/login.css';
import { authLogin } from '../../actions/login/login_actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            authState: true,
            loggedinEmployee: "",
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    loginCheck(event) {
        event.preventDefault();
        this.props.login(this.state);
    }

    forgotPwd(event) {
        event.preventDefault();
        this.props.forgot(this.state.username);
    }

    componentDidMount() {
        localStorage.setItem("token", null);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn !== false) {
            this.setState({ authState: true });
            localStorage.setItem('token', nextProps.loggedIn.token);
            console.log('loggedIn : ', nextProps.loggedIn)
            if (nextProps.loggedIn.userType === "candidate") {
                this.props.history.push("/dashboard/candidate");
            } else {
                this.props.history.push("/dashboard/employee");
            }
        } else {
            this.setState({ authState: false });
        }
    };

    render() {
        return (

            <div className={styles.body}>

                <div className={styles.box}>
                    <div className="card-group ">
                        <div className={["card", styles.card_img].join(' ')} />
                        <div className="card" style={{ 'maxWidth': '35%' }}>
                            <div className="card-header text-center" style={{ 'padding': '1.5em 0', 'fontSize': '1.5em' }}>
                                Internal Portal
                        </div>
                            <div className={["card-body", styles.card_body].join(' ')}>
                                <h4 className="card-title text-center">Login</h4>
                                <form className="my-3" noValidate onSubmit={this.loginCheck.bind(this)}>
                                    <div className="form-group my-4">
                                        <input type="text" className="form-control form-control-lg" name="username" id="username" placeholder="Username"
                                            required autoFocus onChange={this.handleChange.bind(this)} value={this.state.username} />
                                    </div>
                                    <div className="form-group my-4">
                                        <input type="password" className="form-control form-control-lg" name="password" id="password"
                                            placeholder="Password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                            onChange={this.handleChange.bind(this)} value={this.state.password} />
                                    </div>
                                    <button type="submit" className={["btn", "btn-block", styles.btn_css].join(' ')}>Login Now</button>
                                </form>
                                <div className="text-center">
                                    <a href="#" data-toggle="modal" data-target="#forgotPassword">Forgot Password?</a>
                                    {/*<a href="#" data-toggle="modal" data-target="#forgotPassword">Forgot Password?</a>*/}
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <a href="#" data-toggle="modal" data-target="#termsOfUse">Terms of use</a>
                                {/*<a href="#" data-toggle="modal" data-target="#termsOfUse">Terms of use</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Forgot Password */}
                <div className="modal fade" id="forgotPassword" tabIndex="-1" role="dialog" aria-labelledby="forgotPasswordTitle"
                    aria-hidden="true" >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="forgotPasswordTitle">Forgot Password?</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.forgotPwd.bind(this)}>
                                    <div className="form-group my-4">
                                        <input type="email" className="form-control form-control-lg" name="reset-email" id="reset-email"
                                            placeholder="Email" required autofocus />
                                    </div>
                                    <p className="text-muted"><strong>Note:</strong> You will receive a mail to reset your password on
                                        your registered email id</p>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn" style={{ 'backgroundColor': 'rgb(197, 0, 48)', color: 'white' }}
                                    required autofocus onChange={this.handleChange.bind(this)} value={this.state.username} >Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Terms Of Use-->*/}
                <div className="modal fade" id="termsOfUse" tabIndex="-1" role="dialog" aria-labelledby="termsOfUseTitle" aria-hidden="true" data-backdrop="false">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="termsOfUseTitle">Terms of Use</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn" style={{ 'backgroundColor': 'rgb(197, 0, 48)', color: 'white' }} data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapPropsToDispatch(dispatch) {
    return bindActionCreators({
        login: authLogin
    }, dispatch);
};

function mapStateToProps(state) {
    return {
        loggedIn: state.login
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(Login);