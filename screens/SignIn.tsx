import React, { useCallback, useEffect } from "react";
import { TextInput } from "react-native-paper";
import { View, Text, Button, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Buttons, { Buttons2 } from "../components/Buttton";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import BootLoader from "../components/BootLoader";
import AsyncStorage from "@react-native-async-storage/async-storage";
WebBrowser.maybeCompleteAuthSession();

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const load = {
    email: email,
    password: password,
  };
  const Submit = async () => {
    try {
      console.log(load);
      const submit = await fetch("http://192.168.43.167:4200/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const submitted = await submit.json();
      console.log(submitted.token);
      if (submitted.status == true) {
        await AsyncStorage.setItem("@token", submitted.token);
        await AsyncStorage.setItem("@user", submitted.responseData);
      }
    } catch (err: any) {
      console.log(`err==>`, err.message);
    }
  };

  return (
    <ScrollView
      style={{
        marginTop: 50,
      }}
    >
      <View>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="flat"
          label="Email"
          style={{
            width: "100%",
            backgroundColor: "white",
          }}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="flat"
          label="Password"
          style={{
            width: "100%",
            backgroundColor: "white",
          }}
        />
      </View>
      <Buttons
        text="Sign In"
        width="100%"
        marginTop={30}
        backgroundColor="#990000"
        borderRadius={10}
        onPress={Submit}
      />
    </ScrollView>
  );
};

export default SignIn;
