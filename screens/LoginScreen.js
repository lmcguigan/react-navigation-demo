import React, {Component} from 'react';
import {View, AsyncStorage, ImageBackground, StyleSheet} from 'react-native';
import {styles} from './styles';
import {BingoTextInput, Button, BingoText} from '../components';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }
  _authenticate = async (email, pw) => {
    if (email === 'lucy.mcguigan@gmail.com' && pw === 'bingo') {
      return 'DUMMY_AUTH_TOKEN';
    }
    return null;
  };

  _signIn = async () => {
    const authToken = await this._authenticate(
      this.state.email,
      this.state.password,
    );
    if (authToken) {
      await AsyncStorage.setItem('authToken', authToken);
      this.props.navigation.navigate('App');
    } else {
      this.setState({
        error:
          'The email and password combination is not recognized by our system.',
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/bingologinbg.jpg')}
          style={loginStyles.bgImage}>
          <View
            style={[
              styles.screenHorizontalPadding,
              styles.screenVerticalPadding,
              loginStyles.contentContainer,
            ]}>
            <BingoText content="log in" style="h1" />
            <BingoTextInput
              label="EMAIL"
              value={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <BingoTextInput
              label="Password"
              value={this.state.password}
              onChangeText={text => this.setState({password: text})}
              secureTextEntry
            />
            {this.state.error && <BingoText content={this.state.error} />}
            <Button label="let's go" onPress={() => this._signIn()} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const loginStyles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  contentContainer: {
    marginBottom: 120,
  },
});
