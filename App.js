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
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

loginUser = (email, password) => {};

export default class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password < 6) {
        alert("hello");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

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
