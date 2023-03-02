import React from 'react';
import { 
    View, 
    Image,
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';

const Signup = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        lname:'',
        fname:'',
        phone:'',
        email:'',
        confirm_password: '',
        check_textInputChangeUsername: false,
        check_textInputChangePhone: false,
        check_textInputChangeEmail: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChangeUsername = (val) => {
        if( val.length >=3 ) {
            setData({
                ...data,
                username: val,
                check_textInputChangeUsername: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChangeUsername: false
            });
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const textInputChangeEmail = (val) => {
        if( validateEmail(val)) {
            setData({
                ...data,
                email: val,
                check_textInputChangeEmail: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChangeEmail: false
            });
        }
    }

    const textInputChangePhone = (val) => {
        if( val.length  ==11 ) {
            setData({
                ...data,
                phone: val,
                check_textInputChangePhone: true
            });
        } else {
            setData({
                ...data,
                phone: val,
                check_textInputChangePhone: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor={COLORS.primary} barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>

            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <Image
                    source={icons.basket}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor:COLORS.secondary,
                    }}
                />
                <TextInput 
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChangeEmail(val)}
                />
                {data.check_textInputChangeEmail ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Image
                        source={icons.checked}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor:"green",
                        }}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={styles.text_footer}>Fullname</Text>
            <View style={styles.action}>
                <Image
                    source={icons.user}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor:COLORS.secondary,
                    }}
                />
                <TextInput 
                    placeholder="Your surname"
                    style={[styles.textInput,{width:"49%"}]}
                    autoCapitalize="none"
                />
                

                <Image
                    source={icons.user}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor:COLORS.secondary,
                    }}
                />
                <TextInput 
                    placeholder="Your firstname"
                    style={[styles.textInput,{width:"49%",marginLeft:1,}]}
                    autoCapitalize="none"
                />
                
            </View>


            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <Image
                    source={icons.user}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor:COLORS.secondary,
                    }}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChangeUsername(val)}
                />
                {data.check_textInputChangeUsername ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Image
                        source={icons.checked}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor:"green",
                        }}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={styles.text_footer}>Phone</Text>
            <View style={styles.action}>
                <Image
                    source={icons.phone}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor:COLORS.secondary,
                    }}
                />
                <TextInput 
                    placeholder="Your phone number"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChangePhone(val)}
                />
                {data.check_textInputChangePhone ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Image
                        source={icons.checked}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor:"green",
                        }}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.action}>
                <Image
                    source={icons.lock}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor:COLORS.secondary,
                    }}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity 
                    onPress={updateSecureTextEntry}
                >
                    
                    {data.secureTextEntry ?  
                    <Image
                        source={icons.eye_off}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor:COLORS.secondary,
                        }}
                    />
                    :
                    <Image
                        source={icons.eye}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor:COLORS.secondary,
                        }}
                    />
                    } 
                </TouchableOpacity>
            </View>

            <Text style={styles.text_footer}>Confirm Password</Text>
            <View style={styles.action}>
                <Image
                    source={icons.lock}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor:COLORS.secondary,
                    }}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity 
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Image
                        source={icons.eye_off}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor:COLORS.secondary,
                        }}
                    />
                    :
                    <Image
                        source={icons.eye}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor:COLORS.secondary,
                        }}
                    />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {}}
                >
                <View
                    colors={['#08d4c4', '#01ab9d']}
                    style={[styles.signIn, {
                        backgroundColor: COLORS.primary,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign2, {
                        color: COLORS.primary,
                    }]}>Already have an account? Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: COLORS.primary,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 15,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textSign2: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
