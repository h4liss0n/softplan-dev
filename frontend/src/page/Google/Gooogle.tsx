import React from "react";
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { REACT_APP_CLIENT_ID } from "../../Ambiente";
import * as Action from '../../Store/Auth/Action';

const Google = () => {
    const dispatch = useDispatch();
    return (
        <GoogleLogin
            clientId={REACT_APP_CLIENT_ID || ''}
            buttonText="Login with Google"
            theme="dark"
            className='btn-login-google'
            onSuccess={(res) => {
                dispatch(Action.RequestLoginGoogle(res))
            }}
            onFailure={(err) => {
                toast.error(err);
            }}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export { Google };

