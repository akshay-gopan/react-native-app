import { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useAuth } from "../context/authProvider";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },

  profileimage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  name: {
    fontSize: 20,
    fontWeight: "semibold",
    marginBottom: 10,
  },

  email: {
    fontSize: 20,
    fontWeight: "semibold",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#F5004F",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "30%",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default function ProfileScreen({ navigation }) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const imgUrl = "https://avatar.iran.liara.run/public";

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Image
        source={{ uri: "https://avatar.iran.liara.run/public" }}
        style={styles.profileimage}
      />
      {user && (
        <>
          <Text style={styles.name}>Name: {user.name}</Text>
          <Text style={styles.email}>Email: {user.email}</Text>
        </>
      )}
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.btnText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}
