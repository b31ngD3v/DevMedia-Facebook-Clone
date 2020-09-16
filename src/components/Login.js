import React from 'react';
import './Login.css';
import Logo from '../logo.png';
import Logo2 from './logo2.png';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionType.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img src={Logo} alt='' />
                <img src={Logo2} alt='' />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
