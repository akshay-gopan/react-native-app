import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
// import { useAuth } from "../context/authProvider";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/authSlice";

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

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  // const { signup } = useAuth();

  const BACKGROUND_IMAGE_URL = "https://picsum.photos/1920/1080?random=true";

  const handleSignup = () => {
    dispatch(signup({ name, email, password }));
  };

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
          

          <TouchableOpacity onPress={handleSignup} style={styles.button}>
            <Text style={styles.btnText}>SIGNUP</Text>
          </TouchableOpacity>

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
