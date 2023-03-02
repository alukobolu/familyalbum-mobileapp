import React,{ useContext, useState } from "react";
import { View,Text,TextInput,TouchableOpacity } from "react-native";
import { Context }  from "../globalContext/globalContext.js"; 
import containers from "../styles/containers.js";
import fonts from "../styles/fonts.js";
import inputs from "../styles/inputs.js";
import button from "../styles/button.js";
import axios from 'axios';

function Login({navigation ,route ,props}){

    const globalContext = useContext(Context);
    const { isLoggedIn,setIsLoggedIn,appSettings,domain,setUserObject,userObject  } = globalContext;

    const [securePassword, setSecurePassword] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleLogin1(){
        console.log("Logging in ")
        console.log(email)
        console.log(password)

        setIsLoggedIn(true)
        navigation.navigate("Home")
    }   
    function handleLogin(){
        console.log("Logging in ")
        console.log(email)
        console.log(password)
        let body = {
            'username':email.toLocaleLowerCase(),
            'password': password
        }
        axios.post(`${domain}/accounts/auth/login/`,body)
        .then(function (response) {
            // handle success
            alert(JSON.stringify(response.data));
            setUserObject(response.data)
            setIsLoggedIn(true)
            navigation.navigate("homes")
          })
          .catch(function (error) {
            // handle error
            setError("Invalid Credentials")
            alert(error.message);
          });
    
    }
    return(
        <View style={containers(appSettings).outerPage}>
            <View  style={containers(appSettings).foreBox}>
                <View style={containers(appSettings).formheader}>
                    <Text style={fonts(appSettings).h1}>LOGIN </Text>
                </View>
                <View style={containers(appSettings).formComponents}>
                    <Text  style={fonts(appSettings).inputLabel}>Email/Username</Text>
                    <TextInput value={email} onChangeText={ text => setEmail(text)} textContentType='username'  autoCompleteType="email"  style={inputs(appSettings).textInput}  placeholder="Username/Email" />
                </View>
                <View style={containers(appSettings).formComponents}>
                    <Text  style={fonts(appSettings).inputLabel}>Password</Text>
                    <TextInput value={password} onChangeText={ text => setPassword(text)} secureTextEntry ={securePassword} textContentType='password' autoCompleteType="password"  style={inputs(appSettings).textInput} placeholder="Password" />
                </View>
                <View style={containers(appSettings).formComponents}>
                    <TouchableOpacity style={button(appSettings).loginbutton}  onPress ={()=> handleLogin1()} >
                        <Text style={fonts(appSettings).buttonFonts}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{color:'red'}}>{error}</Text>
                    <Text style={fonts(appSettings).p}>Forgot your Password ?</Text>
                </View>
            </View>
        </View>
    )
};

export default Login;