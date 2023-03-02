// import {
//   AntDesign,
//   Feather,
//   FontAwesome,
//   Ionicons,
//   MaterialIcons,
// } from "@expo/vector-icons";
import React, { Component, useRef, useState, useContext } from "react";
import { createRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Modal,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Button, Checkbox, ProgressBar, TextInput } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
import * as DocumentPicker from "expo-document-picker";
import AppContext from "./AppContext";
import axios from "axios";

import FileSystem from "expo-file-system";

const upload = ({ navigation,route }) => {
  const context = useContext(AppContext);

  const [documents, setDocuments] = useState("");
  const [formData, setFormData] = useState("");
  // const user = context.user;

  const options = [
    {
      name: "Upload files",
      // icon: <Icon2 name="ios-cloud-upload-outline" color={"blue"} />,
      onPress: () => setModalVisible(true),
    },
    // {
    //   name: "Create folder",
    //   icon: <Icon3 name="folder-minus" color={"blue"} />,
    //   onPress: () => {},
    // },
  ];

 // const [modalVisible, setModalVisible] = useState(false);
  // const [folderName, setFolderName] = useState("");

  const uploadFiles = useRef();

  // const createFolder = createRef();

  const [checked, setChecked] = React.useState(false);

  const upload = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      multiple: true,
      type: "*/*",
      copyToCacheDirectory: false,
    });
    //console.log(result);
    // const uri = FileSystem.documentDirectory + result.uri;

    // await FileSystem.copyAsync({
    //   from: result.uri,
    //   to: uri,
    // });

    setDocuments(result.uri);

    let localUri = result.uri;
    
    let filename = result.name;

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    console.log('hey')
    console.log(localUri,filename,type)
    setFormData({ uri: localUri, name: filename, type: type });
  };

  const uploadDocs = async () => {
    let form = new FormData();
    form.append("files", formData);
    form.append("root_id", "0");
    const response = await axios.post(
      "http://172.20.10.3:8000/documents/upload",
      form
    );

    context.setRefresh(true);
    context.userDocs();
    context.getUserDetails();
  };

  // const createFolders = async () => {
  //   let form1 = new FormData();
  //   form1.append("name", folderName);
  //   form1.append("root_id", "0");
  //   form1.append("shared_folder", "false");
  //   const response = await axios.post(
  //     "http://172.20.10.3:8000/documents/folder/",
  //     form1
  //   );
  //   console.log(response.data);
  //   ref.current.close();
  // };
  return (
    <View>

        <View style={styles.optionsWrapper}>
          <TouchableOpacity
            style={styles.pickerOption}
            onPress={() => {
              uploadFiles.current.open();
            }}
          >
            {/* <Icon2 name="ios-cloud-upload-outline" color={"blue"} /> */}
            <Text style={styles.text}>Upload files</Text>
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Button
            style={styles.button}
            mode="contained"
            color="#1748e2"
            uppercase={false}
          >
            Cancel
          </Button>
        </TouchableWithoutFeedback>

        <View>{}</View>

          <View style={{ flex: 1 }}>
            <View
              style={{
                height: "100%",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text
                style={{ fontSize: 20, paddingTop: 16, alignSelf: "center" }}
              >
                Upload files
              </Text>
              <Text
                style={{ fontSize: 10, color: "grey", alignSelf: "center" }}
              >
                .png, .jpeg, .mp3, .mp4, .docx, .pptx, .xsls, .pdf{" "}
              </Text>

              <TouchableOpacity style={styles.button3} onPress={upload}>
                <Text style={{ fontSize: 12, color: "grey" }}>
                  Tap here to upload files, max size: 100MB
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 16,
                  color: "grey",
                  width: "80%",
                  marginTop: 30,
                }}
              >
                Uploaded files
              </Text>

              <ScrollView style={{ width: "85%", flex: 1, marginBottom: 25 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30,
                    justifyContent: "space-between",
                  }}
                >
                  {/* <Icon2 name="ios-image-outline" color={"blue"} /> */}
                  <View style={{ width: 250 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 10,
                      }}
                    >
                      <Text>Project logo</Text>
                      <Text style={{ color: "rgba(23, 72, 226, 0.5)" }}>
                        100%
                      </Text>
                    </View>
                    <ProgressBar
                      style={styles.progress}
                      progress={1}
                      color={"#49B5F2"}
                    />
                  </View>
                  {/* <Icon3 name="trash" color={"blue"} /> */}
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30,
                    justifyContent: "space-between",
                  }}
                >
                  {/* <Icon2 name="ios-image-outline" color={"blue"} /> */}
                  <View style={{ width: 250 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 10,
                      }}
                    >
                      <Text>Project logo</Text>
                      <Text style={{ color: "rgba(23, 72, 226, 0.5)" }}>
                        100%
                      </Text>
                    </View>
                    <ProgressBar
                      style={styles.progress}
                      progress={1}
                      color={"#49B5F2"}
                    />
                  </View>
                  {/* <Icon3 name="trash" color={"blue"} /> */}
                </View>
              </ScrollView>
            </View>
          </View>
          {/* <View style={{}}>
            <TouchableWithoutFeedback onPress={uploadDocs}>
              <Button
                style={styles.button1}
                mode="contained"
                color="#1748e2"
                uppercase={false}
              >
                Upload 2 files
              </Button>
            </TouchableWithoutFeedback>
          </View> */}
    </View>
  );
};

// function Icon(props: {
//   name: React.ComponentProps<typeof MaterialIcons>["name"];
//   color: string;
// }) {
//   return <MaterialIcons size={22} style={{ marginBottom: -3 }} {...props} />;
// }
// function Icon2(props: {
//   name: React.ComponentProps<typeof Ionicons>["name"];
//   color: string;
// }) {
//   return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
// }
// function Icon3(props: {
//   name: React.ComponentProps<typeof Feather>["name"];
//   color: string;
// }) {
//   return <Feather size={24} style={{ marginBottom: -3 }} {...props} />;
// }

export default upload;

const styles = StyleSheet.create({
  pickerOption: {
    flexDirection: "row",
    paddingTop: 25,
    alignItems: "center",
    paddingVertical: 15,
  },

  optionsWrapper: {
    paddingHorizontal: 30,
  },

  text: {
    fontSize: 17,
    paddingLeft: 17,
    color: "grey",
  },
  button: {
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 5,
    height: 50,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 35,
    marginRight: 35,
    position: "absolute",
    bottom: 0,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  button1: {
    borderRadius: 5,
    height: 50,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 35,
    marginRight: 35,
    bottom: 15,
  },

  button2: {
    marginTop: 15,
    borderRadius: 5,
    height: 50,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 35,
    marginRight: 35,
    position: "absolute",
    bottom: 50,
  },
  textInput: {
    margin: 5,
    borderBottomColor: "#263238",
    backgroundColor: "rgba(0,0,0,0.0)",
    textAlign: "left",
    marginTop: 40,
    alignSelf: "center",
    width: "80%",
    height: 30,
    color: "grey",
    fontSize: 16,
  },

  button3: {
    width: "80%",
    borderRadius: 15,
    marginTop: 15,
    padding: 15,
    alignItems: "center",
    height: 100,
    backgroundColor: "rgba(23, 72, 226, 0.1)",
    justifyContent: "center",
    borderStyle: "dashed",
    borderColor: "blue",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },

  progress: {
    width: "100%",
    height: 5,
    alignSelf: "center",
    borderRadius: 5,
  },
});
