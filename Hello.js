import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import {
  container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label,
  Container
} from "native-base";

var firebaseConfig = {
  apiKey: "AIzaSyBqJoeCCPu6O6lGKWEDOTyh3hFMnoVXz0s",
  authDomain: "react-login-89dbd.firebaseapp.com",
  databaseURL: "https://react-login-89dbd.firebaseio.com",
  projectId: "react-login-89dbd",
  storageBucket: "",
  messagingSenderId: "416592379901",
  appId: "1:416592379901:web:2bc1dd2207974761"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

signUpUser = (email, password) => {
  try {
    firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error.toString());
  }
};

loginUser = (email, password) => {};

export default class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={email => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              autoCorrect={false}
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button
            style={{ marginTop: 30 }}
            full
            rounded
            danger
            onPress={() =>
              this.loginUser(this.state.email, this.state.password)
            }
          >
            <Text>Login</Text>
          </Button>

          <Button
            style={{ marginTop: 30 }}
            full
            rounded
            info
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
          >
            <Text style={{ color: "white" }}>Sign Up</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  }
});
