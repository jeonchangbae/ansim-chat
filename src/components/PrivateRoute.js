import React ,{useContext}from 'react'
import {AuthContext} from '../context/auth';
import {useNavigate} from 'react-router-dom';

function PrivateRoute({children}) {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
  
    return (
        <>
        {
        user ? (
            children
          ) : (
            //redirect to /login if user is not signed in
            navigate('/login',{replace:true})
          )
        }
      </>
    )
};

export default PrivateRoute