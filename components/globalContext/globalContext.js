import React, { useState, useEffect, useRef, createContext} from "react";
// import { AsyncStorage } from '@react-native-community/async-storage';
import axios from 'axios';
const Context = createContext()

const Provider = ( { children } ) => {

  const [ domain, setDomain ] = useState("http://192.168.100.19:8000")
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ userObject, setUserObject ] = useState()
  const [ appSettings, setappSettings ] = useState({})
  const [ album, setAlbum ] = useState()

  function initAppSettings(){
    console.log("json")
    axios.get(`${domain}/settingss/`)
    .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
        setappSettings(response.data)
        })
        .catch(function (error) {
        // handle error
        alert(error.message);
        });
  }


  useEffect(() => {
      //initAppSettings()
  },[])

  const globalContext = {
    domain,
    isLoggedIn,
    setIsLoggedIn,
    appSettings,
    setappSettings,
    userObject,
    setUserObject,
    album, 
    setAlbum,
  }

  return <Context.Provider value={globalContext}>{children}</Context.Provider>

};

export { Context, Provider };