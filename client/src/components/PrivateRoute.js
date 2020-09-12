import React from 'react';
import { Redirect, Route } from 'react-router-dom'


const PrivateRoute = ({component: Component, ...rest}) => {
	return <Route {...rest} 
		render={props => {
			if(localStorage.getItem('token')) {
				// * 1. if the token is in localstorage, render the component 	
				return <Component {...props} />
			} else { 
				// *  2. if the token is not not in localstorage, the user is redirected to /login
				return <Redirect to="/login" />
			}
        }	
        }
    />
}

export default PrivateRoute;