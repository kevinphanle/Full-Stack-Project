import React from "react";
import { Link, withRouter } from 'react-router-dom';
                    
class SignupFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(()=> this.props.history.push('/'))
    }

    render () {
        return (
            <section className="signup-form-wrapper">
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:
                        <input
                            type="text"
                            id="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label htmlFor="password">Password:
                        <input
                            type="password"
                            id="password"
                            value={this.state.password}  
                            onChange={this.update('password')}
                        />
                    </label>

                    <input type="submit" value="Sign Up" />
                    <p>Already a part of EarthFlix? <Link to="/login">Sign In now!</Link></p>
                </form>
            </section>
        );
    }
}
export default withRouter(SignupFrom);