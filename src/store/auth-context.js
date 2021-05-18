import React from 'react';

//creates a context object, app or component-wide state
const AuthContext = React.createContext({
    isLoggedIn: false

});

export default AuthContext;