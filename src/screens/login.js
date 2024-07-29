import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from "react-native";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/authProvider";


const BACKGROUND_IMAGE_URL = "https://picsum.photos/1920/1080?random=true&"

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth()

  const handleLogin = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful");
        navigation.navigate("Home");
      } catch (error) {
        console.error(error);
        alert("Failed to login. Please try again.");
      }
    }
  };

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

    button: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: "auto",
    },

    btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
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
          <Text style={styles.formhead}>Login</Text>
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
          <TouchableOpacity  onPress={() => login(email, password)} style = {styles.button}>
            <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
          <View style={styles.navigation}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
