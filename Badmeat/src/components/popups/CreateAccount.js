import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { setCreateAccountModalVisible } from '../../actions';

const styles = StyleSheet.create({
  backdropView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    height: '75%',
    width: '95%',
    margin:20,
    borderRadius: 5,
    backgroundColor: '#F9be02',

  },
  email:{
    margin: 20,
    color: 'white'
  },
  password: {
    margin: 20,
    color: 'white'
  },
  headerText: {

    justifyContent: 'center',
    alignItems:'center',
  },
  loginButton: {
    width:'60%',
    alignSelf: 'center',
    marginTop: 10,
  },
  header: {
    alignItems: 'flex-end',
    padding: 10
  }
})

class CreateAccount extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.props.createAccountModalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed")
          }}
          >
          <View style={styles.backdropView}>
            <View style={styles.inputWrapper}>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => this.props.displayCreateAccount()}>
                  <Icon
                    name='close'
                    color='rgba(245,50,64,1)'
                    size={28}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.headerText}>
                <Text h3 style={{color:'rgba(245,50,64,1)',marginBottom:10}}>Create Account</Text>
                <Text style={{color:'white'}}>Use any email to make an account!</Text>
              </View>
              <TextInput
                style={styles.email}
                placeholder="email@gmail.com"
                placeholderTextColor='white'
                underlineColorAndroid='white'
                label="Email"
                onChangeText={(text) => this.props.onEmailChange(text)}
                value={this.props.email}
              />

              <TextInput
                style={styles.password}
                secureTextEntry
                placeholder="password"
                placeholderTextColor='white'
                underlineColorAndroid='white'
                label="Password"
                onChangeText={(text) => this.props.onPasswordChange(text)}
                value={this.props.password}
                />

                <TextInput
                  style={styles.password}
                  secureTextEntry
                  placeholder="confirm password"
                  placeholderTextColor='white'
                  underlineColorAndroid='white'
                  label="Password"
                  onChangeText={(text) => this.props.onPasswordChange(text)}
                  value={this.props.password}
                  />
                <View >
                  <Button
                    title='CREATE ACCOUNT'
                    backgroundColor='rgba(245,50,64,1)'
                    color='white'
                    containerViewStyle={styles.loginButton}
                  />
                </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    createAccountModalVisible: state.createAccountModalVisible,
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayCreateAccount() {
    dispatch(setCreateAccountModalVisible());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
