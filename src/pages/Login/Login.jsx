import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../Login/Login.scss';
import google from '../../assets/google.svg';
import axios from 'axios';

const Login = () => {
    const history = useHistory();
    const [login, setLogin] = useState({
        email : '',
        password : ''
    })

    const handleChange = (e) => {
        e.persist();
        setLogin({...login, [e.target.name] : e.target.value});
    }

    const formSubmit = (e) => {
        e.preventDefault();
        const data = {
            email : login.email,
            password : login.password
        }
        console.log(data)
        const newData = new FormData();
        newData.append('email', data.email);
        newData.append('password', data.password);

        axios({
            url : 'https://api.moovitdigital.com/api/user/login',
            method : 'POST',
            data : newData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(res => {
            if(res.status == 200){
                console.log(res.data)
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.email);
                history.push('/user-registration');
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="sign-up">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <form onSubmit={formSubmit}>
                            <h5>Logo</h5>

                            <h4>Welcome Back</h4>
                            <p>Fill in your login details</p>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" placeholder="joe@gmail.com" name="email" onChange={handleChange} value={login.email}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="Enter your password" name="password" onChange={handleChange} value={login.password}/>
                            </div>
                            <div className="forget-password">
                                <Link>Forgot Password?</Link>
                            </div>
                            <button type="submit">Login</button>
                        </form>
                       <div className="signup">
                           <p>Don???t have an account? <Link to='/register'>Sign up</Link></p>
                       </div>
                       <p className="or">OR</p>
                       <div className="google-btn">
                            <img src={google} alt="google icon" />
                            <p>Continue with Google</p>
                       </div>
                       <div className="policy">
                            <div className="tnc">
                                <Link>Terms and Conditions</Link>
                            </div>
                            <div className="tnc">
                                <Link>Privacy Policy</Link>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;



// <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '{your-app-id}',
//       cookie     : true,
//       xfbml      : true,
//       version    : '{api-version}'
//     });
      
//     FB.AppEvents.logPageView();   
      
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
// </script>


// app id : 410776757185843
// app secret : 34fed8516bdfc5d08fbde9ffb60e8850

// url : https%3A%2F%2Fmoovitdigital.com%2F
// https://facebook.com/v6.0/dialog/oauth?client_id=410776757185843&redirect_url=https%3A%2F%2Fmoovitdigital.com%2F&state=08169114