import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../context/authProvider";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";

export default function ProfileScreen({ navigation }) {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState({ name: "", email: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log("User does not exist");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

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
      backgroundColor: "#000",
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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Text style={styles.name}>Name: {userData.name}</Text>
      <Text style={styles.email}>Email: {userData.email}</Text>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
