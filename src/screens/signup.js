import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";
import { useAuth } from "../context/authProvider";
import { auth, db } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const BACKGROUND_IMAGE_URL =
    Platform.OS === "web"
      ? "https://picsum.photos/1000"
      : "https://picsum.photos/600";

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
    },

    bgimage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center",
    },

    form: {
      width: "80%",
      paddingHorizontal: 20,
      backgroundColor: "#fff",
      borderRadius: 10,
      paddingVertical: 20,
    },
    formhead: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      marginBottom: 30,
    },

    input: {
      marginBottom: 15,
      paddingHorizontal: 10,
      borderRadius: 5,
      borderColor: "lightgray",
      borderWidth: 1,
    },

    navigation: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 20,
      marginBottom: 10,
    },

    linkText: {
      color: "#1560bd",
      fontSize: 15,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: BACKGROUND_IMAGE_URL }}
        style={styles.bgimage}
      >
        <View style={styles.form}>
          <Text style={styles.formhead}>Sign Up</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
          />
          {/* <Button title="Submit" onPress={handleSignIn}  style={styles.button} /> */}
          <Button
            title="Signup"
            onPress={() => signup(name, email, password)}
          />
          <View style={styles.navigation}>
            <Text>Aready have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.linkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
