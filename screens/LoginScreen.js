import React, { useContext } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import FieldText from "../components/Fieldtext";
import { AuthContext } from "../context/AuthProvider";
import Button from "../components/common/Button";

export default function LoginScreen({ navigation }) {
  const [user, setUser] = React.useState({
    email: "test@example.com",
    password: "12345678",
  });

  const { login, isLoggedIn } = useContext(AuthContext);

  const onChangeText = (name) => {
    return (text) => {
      setUser({ ...user, [name]: text });
    };
  };

  const handleSignupPress = () => {
    navigation.navigate("SignUp");
  };

  const handleLoginPress = async () => {
    console.log(user);
    try {
      const data = await login(user.email, user.password);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          styles.marginBottom,
          { color: styles.color.secondary },
        ]}
      >
        login
      </Text>
      <View style={styles.wrapper}>
        <Text style={[styles.label, { color: styles.color.secondary }]}>
          Email :
        </Text>
        <FieldText
          name="email"
          onChangeText={onChangeText("email")}
          value={user.email}
          onSubmitEditing={() => handleSubmit()}
          defaultValue={user.email}
        />

        <Text style={[styles.label, { color: styles.color.secondary }]}>
          Password :
        </Text>
        <FieldText
          name="password"
          onChangeText={onChangeText("password")}
          value={user.password}
          onSubmitEditing={() => handleSubmit()}
          secureTextEntry={true}
          defaultValue={user.password}
        />
        <Text
          style={[{ textAlign: "center" }, { color: styles.color.secondary }]}
        >
          Forgot your password ?
        </Text>
        <View style={styles.wrapperButton}>
          <TouchableOpacity onPress={() => handleLoginPress()}>
            <Button text="Login" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSignupPress()}>
            <Button text="Sign up" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#383958",
    justifyContent: "center",
  },
  wrapper: {
    gap: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  label: { fontSize: 18, padding: 5, fontWeight: "bold" },
  title: {
    textAlign: "center",
    fontSize: 27,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  marginBottom: {
    marginBottom: 50,
  },
  wrapperButton: {
    paddingTop: 20,
    gap: 20,
  },
  ButtonSignUp: {
    borderRadius: 10,
    backgroundColor: "#383958",
    height: 40,
    textAlign: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 16,
    color: "#fff",
  },
  color: {
    main: "#383958",
    primary: "#fff",
    secondary: "#b6b133",
    black: "#333",
  },

  input: {
    borderRadius: 10,
    padding: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});
