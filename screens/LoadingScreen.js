import React, {Component} from 'react';
import {
  View,
  AsyncStorage,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {BingoText} from '../components';
import {colors} from '../assets/colors';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this._getUserToken();
  }
  _getUserToken = async () => {
    const delay = () => new Promise(resolve => setTimeout(resolve, 4000));
    await delay();
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Authorization');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/bingoloading.jpg')}
          style={styles.imgBg}>
          <View style={styles.titleContainer}>
            <BingoText content="flabingo" style="h1" textAlign="center" />
          </View>
          <View style={styles.container}>
            <BingoText
              content="loading..."
              style="h3"
              textAlign="center"
              color={colors.glace}
            />
            <View style={styles.indicatorContainer}>
              <ActivityIndicator size="large" color={colors.rhodochrosite} />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imgBg: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  indicatorContainer: {
    paddingTop: 20,
  },
});
