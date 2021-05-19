import React, {useState, useEffect} from 'react';

//creates a context object, app or component-wide state
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //This will run after every component evaluation and will only run once when the app starts, when there's no dependencies (login)
    useEffect(() => {
        const storedLoginInfo = localStorage.getItem('isLoggedIn');
    
        if(setIsLoggedIn === '1') {
          setIsLoggedIn(true);
        }
      }, []);


    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem('isLogedIn', '1');
        setIsLoggedIn(true);
    };

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn, 
        onLogout: logoutHandler, 
        onLogin: loginHandler
    }}>{props.children}</AuthContext.Provider>
};

export default AuthContext;