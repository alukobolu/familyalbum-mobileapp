import React,{ useContext, useState } from "react";
import { View,Text,TextInput,TouchableOpacity } from "react-native";
import { Context }  from "../globalContext/globalContext.js"; 
import containers from "../styles/containers.js";
import fonts from "../styles/fonts.js";
import inputs from "../styles/inputs.js";
import button from "../styles/button.js";
import axios from 'axios';

function Register({navigation ,route ,props}){

    const globalContext = useContext(Context);
    const { isLoggedIn,setIsLoggedIn,appSettings,domain,setUserObject,userObject  } = globalContext;

    const [securePassword, setSecurePassword] = useState(true)
    const [email, setEmail] = useState("")
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [error, setError] = useState("")

    // function handleLogin(){
    //     console.log("Logging in ")
    //     console.log(email)
    //     console.log(password)

    //     setIsLoggedIn(true)
    //     navigation.navigate("home")
    // }
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
            navigation.navigate("home")
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
                <View >
                    <Text style={fonts(appSettings).h1}>LOGIN </Text>
                </View>
                <View style={containers(appSettings).formComponents}>
                    <Text  style={fonts(appSettings).inputLabel}>Email</Text>
                    <TextInput value={email} onChangeText={ text => setEmail(text)} textContentType='username'  autoCompleteType="email"  style={inputs(appSettings).textInput}  placeholder="Username/Email" />
                </View>
                <View style={containers(appSettings).formComponents}>
                    <Text  style={fonts(appSettings).inputLabel}>Username</Text>
                    <TextInput value={email} onChangeText={ text => setUsername(text)} textContentType='username'  autoCompleteType="email"  style={inputs(appSettings).textInput}  placeholder="Username/Email" />
                </View>
                <View style={containers(appSettings).formComponents}>
                    <Text  style={fonts(appSettings).inputLabel}>Fullname</Text>
                    <TextInput value={email} onChangeText={ text => setFullname(text)} textContentType='username'  autoCompleteType="email"  style={inputs(appSettings).textInput}  placeholder="Username/Email" />
                </View>
                <View style={containers(appSettings).formComponents}>
                    <Text  style={fonts(appSettings).inputLabel}>Phone</Text>
                    <TextInput value={email} onChangeText={ text => setEmail(text)} textContentType='username'  autoCompleteType="email"  style={inputs(appSettings).textInput}  placeholder="Username/Email" />
                </View>
                <View style={containers(appSettings).formComponents}>
                    <Text  style={fonts(appSettings).inputLabel}>Password</Text>
                    <TextInput value={password} onChangeText={ text => setPassword(text)} secureTextEntry ={securePassword} textContentType='password' autoCompleteType="password"  style={inputs(appSettings).textInput} placeholder="Password" />
                </View>
                <View style={containers(appSettings).formComponents}>
                    <Text  style={fonts(appSettings).inputLabel}>Confirm Password</Text>
                    <TextInput value={password} onChangeText={ text => setPassword2(text)} secureTextEntry ={securePassword} textContentType='password' autoCompleteType="password"  style={inputs(appSettings).textInput} placeholder="Password" />
                </View>
                <View style={containers(appSettings).formComponents}>
                    <TouchableOpacity style={button(appSettings).loginbutton}  onPress ={()=> handleLogin()} >
                        <Text style={fonts(appSettings).buttonFonts}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{color:'red'}}>{error}</Text>
                    <Text style={fonts(appSettings).p}>Forgot your Password ?</Text>
                </View>
            </View>
        </View>
    )
};

export default Register;