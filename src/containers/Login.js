import React, {Component} from 'react';
import PButton from '../components/common/PButton';
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginActions';
import history from '../history';

class Login extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    tryLogin = () => this.props.loginUser(this.state.username, this.state.password);

    changeUsername = (e) => this.setState({username: e.target.value});

    changePassword = (e) => this.setState({password: e.target.value});

    render()
    {
        console.log(this.props.loginStatus);
        if(this.props.loginStatus===200) {
            history.push('/view');
        }
        return(<div className='login-container'>
        <div className='login-info'>
            Login to access your Notes
        </div>
        <div className="input-container">
            <i className="fa fa-user icon"></i>
            <input className="input-field" type="text" placeholder="Username" name="usrnm" value = {this.state.username} onChange={this.changeUsername}/>
        </div>
  
        <div className="input-container">
            <i className="fa fa-key icon"></i>
            <input className="input-field" type="password" placeholder="Password" name="psw" value = {this.state.password} onChange={this.changePassword}/>
        </div>
        {
            this.props.loginStatus ===201 && <div className='error-text'> Please Enter Valid Credential </div>
        }
        <PButton title='Login' clickHandler={this.tryLogin}/>
        
        </div>
        )
    }
}


const mapDispatchToProps = {
    loginUser: loginUser,
};
const mapStateToProps = (state) => ({
    loginStatus: state.loginReducer.loginStatus,
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);