import React, {Component} from 'react';
import {
  AsyncStorage,
  View,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {styles} from './styles';
import {colors} from '../assets/colors';
import {ProfileTextInput, BingoText, Button, Counter} from '../components';
import data from '../assets/data/data.json';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: data.user.firstName,
      lastName: data.user.lastName,
      email: data.user.emailAddress,
    };
  }
  _signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Authorization');
  };
  render() {
    const scores = [
      {header: 'won', value: data.user.statistics.won},
      {header: 'created', value: data.user.statistics.created},
      {header: 'played', value: data.user.statistics.played},
    ];
    return (
      <View style={styles.screenContainer}>
        <View style={profileScreenStyles.banner}>
          <ImageBackground
            source={require('../assets/images/bingogarland.png')}
            style={{width: '100%', height: '100%'}}>
            <View style={profileScreenStyles.imageContainer}>
              <Image
                style={profileScreenStyles.image}
                source={require('../assets/images/lucyprofile.jpg')}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.screenHorizontalPadding, {paddingTop: 100}]}>
          <BingoText content="welcome, lucy!" style="h1" textAlign="center" />
          <View style={profileScreenStyles.scoreBoard}>
            {scores.map((e, i) => (
              <Counter header={e.header} value={e.value} key={i} />
            ))}
          </View>
          <ProfileTextInput
            value={this.state.firstName}
            label="First Name"
            onPress={text => this.setState({firstName: text})}
          />
          <ProfileTextInput
            value={this.state.lastName}
            label="Last Name"
            onPress={text => this.setState({lastName: text})}
          />
          <ProfileTextInput
            value={this.state.email}
            label="Email Address"
            onPress={text => this.setState({email: text})}
          />
        </View>
        <Button label="sign out" onPress={() => this._signOut()} />
      </View>
    );
  }
}

const profileScreenStyles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    borderRadius: 150,
    borderWidth: 5,
    borderColor: colors.glace,
  },
  imageContainer: {
    position: 'absolute',
    bottom: -75,
    width: '100%',
    alignItems: 'center',
  },
  banner: {
    backgroundColor: colors.rhodochrosite,
    height: '25%',
  },
  textHeader: {
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'uppercase',
    color: colors.bluespruce,
  },
  count: {
    color: colors.rhodochrosite,
    fontFamily: 'MontserratAlternates-Regular',
    fontSize: 30,
  },
  scoreBoard: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 40,
  },
});
