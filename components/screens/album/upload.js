import React,{ useContext, useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,Button} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'
import * as Animatable from 'react-native-animatable';
//import { DocumentPicker, ImagePicker } from 'expo';
import * as DocumentPicker from "expo-document-picker";

const upload = ({ navigation,route }) => {
    const _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({multiple:true});
        alert(result.uri);
        console.log(result);
    }
    const _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        alert(result.uri);
        console.log(result)
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };
      const selectMultipleFile = async () => {
        //Opening Document Picker for selection of multiple file
        try {
          const results = await DocumentPicker.pickMultiple({
            type: [DocumentPicker.types.images],
            //There can me more options as well find above
          });
          for (const res of results) {
        //     //Printing the log realted to the file
            console.log('res : ' + JSON.stringify(res));
            console.log('URI : ' + res.uri);
            console.log('Type : ' + res.type);
            console.log('File Name : ' + res.name);
            console.log('File Size : ' + res.size);
          } 
          //Setting the state to show multiple file attributes
          //setMultipleFile(results);
        } catch (err) {
          //Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            //If user canceled the document selection
            alert('Canceled from multiple doc picker');
          } else {
            //For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };
    function UploadPage() {
        return (
            <View>
                <Text>THIS IS THE UPLOAD PAGE</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Button
                title="Select Document"
                onPress={selectMultipleFile}
            />
            <Animatable.View animation="fadeInUpBig" >
            {UploadPage()}
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: COLORS.white,
      },
})

export default upload;