import React, { useEffect, useState } from "react";
import { TextInput, Button } from "react-native-paper";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Buttons from "../components/Buttton";

import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";

import { useNavigation } from "@react-navigation/native";
import { UserInfo } from "../constants";

WebBrowser.maybeCompleteAuthSession();
const SignUp = () => {
  const router = useRouter();
  const { navigate } = useNavigation();

  interface FullnameState {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    profilePicture: File | null;
  }

  const [userInfo, setUserInfo] = React.useState<FullnameState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    profilePicture: null,
  });
  console.log(`userInfo==>`,userInfo);
  const onHandleChange = ({
    field,
    value,
  }: {
    field: keyof FullnameState;
    value: string;
  }) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const formData = new FormData();
  formData.append("firstName", userInfo.firstName);
  formData.append("lastName", userInfo.lastName);
  formData.append("email", userInfo.email);
  formData.append("phoneNumber", userInfo.phoneNumber);
  formData.append("password", userInfo.password);
  // formData.append("profilePicture", userInfo.profilePicture);
  const Submit = async () => {
    try {
      const submit = await fetch("http://192.168.43.167:4200/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
      const submitted = await submit.json();
      console.log(submitted);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <ScrollView
      style={{
        marginTop: 50,
      }}
    >
      <View>
        {UserInfo.map(({ name, label }) =>
          name === "profilePicture" ? (
            <></>
          ) : (
            // <TouchableOpacity onPress={PickDocument}>
            //   <Text
            //     style={{ backgroundColor: "blue", color: "white", padding: 10 }}
            //   >
            //     Select Document
            //   </Text>
            // </TouchableOpacity>
            <TextInput
              value={userInfo[name as keyof FullnameState]}
              onChangeText={(value) =>
                onHandleChange({ field: name as keyof FullnameState, value })
              }
              mode="flat"
              label={label}
              style={{
                width: "98%",
                backgroundColor: "white",
                height: 60,
              }}
            />
          )
        )}

        <Buttons
          text="Sign Up"
          width="100%"
          marginTop={30}
          backgroundColor="#990000"
          borderRadius={10}
          onPress={Submit}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;