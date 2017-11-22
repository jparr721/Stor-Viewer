import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text } from 'react-native-elements';
import { getEmailInput, getPasswordInput, login, setCreateAccountModalVisible } from '../actions';
import { Header, Spinner, Card  } from './common';
import  CreateAccount  from './popups/CreateAccount'
import  Router  from '../Router';

class Login extends Component {

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        containerViewStyle={styles.loginButton}
        backgroundColor='#02c8a7'
        color='white'
        onPress={() => this.props.onButtonPress(this.props.email, this.props.password)}
        title="SIGN IN"
      />
    );
  }

  render() {
    return (
      <View style={styles.pageContent}>
        <CreateAccount />
        <Image source={require('../images/fooood.png')} style={styles.image} />
        <View style={styles.backdropView}>
          <View style={styles.logo}>
            <Text h1 style={{color:'#F9be02'}}>Badmeat</Text>
          </View>
          <View style={styles.loginBox}>
            <Card style= {styles.cardAdjustments}>

                <TextInput
                  style={styles.email}
                  placeholder="email@gmail.com"
                  placeholderTextColor='#7cdbd5'
                  underlineColorAndroid='#7cdbd5'
                  label="Email"
                  onChangeText={(text) => this.props.onEmailChange(text)}
                  value={this.props.email}
                />

                <TextInput
                  style={styles.password}
                  secureTextEntry
                  placeholder="password"
                  placeholderTextColor='#7cdbd5'
                  underlineColorAndroid='#7cdbd5'
                  label="Password"
                  onChangeText={(text) => this.props.onPasswordChange(text)}
                  value={this.props.password}
                  />

              <Text style={styles.errorTextStyle}>
                {this.props.error}
              </Text>

            </Card>
            <View style={{marginRight:20, marginLeft:20}}>
                {this.renderButton()}
            </View>
            <View style={styles.createAccountAndForgotPassword}>
              <TouchableOpacity
                onPress={() => this.props.displayCreateAccount()}>
                <Text style={styles.createAccount}>Create Account</Text>
              </TouchableOpacity>
              <Text style={styles.createAccount}>  |  </Text>
              <TouchableOpacity>
                <Text style={styles.createAccount}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white'
  },
  pageContent: {
    justifyContent: 'center',
    backgroundColor: 'rgba(245,50,64,0.4)',
    flex:1
  },
  loginBox: {
    backgroundColor: 'rgba(245,50,64,0.7)',
    margin: 10,
    paddingBottom: 20,
    borderRadius:10
    //justifyContent: 'center',
    //flex:1,
  },
  cardAdjustments: {
    backgroundColor: 'rgba(0,0,0,0)',
    paddingBottom:10,
    elevation: 0
  },
  email:{
    margin: 20,
    color: 'white'
  },
  password: {
    margin: 20,
    color: 'white'
  },
  logo:{
    height: '30%',
    justifyContent: 'center',
    alignItems:'center'
  },
  loginButton:{

  },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 2,
  },
  backdropView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 2,
    position: 'absolute',
  },
  createAccount: {
    color: '#7cdbd5'
  },
  createAccountAndForgotPassword: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  }
};

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state;

  return { email, password, error, loading };
};

const mapDispatchToProps = (dispatch) => ({
  onButtonPress(email, password) {
    dispatch(login(email, password));
  },
  onEmailChange(text) {
    dispatch(getEmailInput(text));
  },
  onPasswordChange(text) {
    dispatch(getPasswordInput(text));
  },
  displayCreateAccount() {
    dispatch(setCreateAccountModalVisible());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
