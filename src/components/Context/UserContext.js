import React from "react";


// const UserContext = React.createContext();
// for defaut context without proivder
const UserContext = React.createContext('Bunny');



const UserProvider = UserContext.Provider

const UserConsumer = UserContext.Consumer

export { UserConsumer , UserProvider }
