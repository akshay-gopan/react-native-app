import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { AuthProvider, useAuth } from "./src/context/authProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/services/firebase";
import { login, logout } from "./src/redux/authSlice";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./theme/theme";
import store from "./src/redux/store";
import LoginScreen from "./src/screens/login";
import HomeScreen from "./src/screens/home";
import SignupScreen from "./src/screens/signup";
import ProfileScreen from "./src/screens/profile";

const Stack = createNativeStackNavigator();
const App = () => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({ email: user.email }));
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

// const AppNavigator = () => {
//   // const { user } = useAuth();

//   return (
//     <Stack.Navigator>
//       {user ? (
//         <>
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Profile" component={ProfileScreen} />
//         </>
//       ) : (
//         <>
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Signup" component={SignupScreen} />
//         </>
//       )}
//     </Stack.Navigator>
//   );
// };

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </Provider>
);
export default Root;
