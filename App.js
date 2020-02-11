/**
 * @format
 * @flow
 */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {
  CreateIntroScreen,
  CreateInviteScreen,
  CreateValuesScreen,
  ProfileScreen,
  HomeScreen,
  CreatePreviewScreen,
  ActiveGameScreen,
  LoadingScreen,
  LoginScreen,
} from './screens';
import {colors} from './assets/colors';
import {BingoHeader} from './components';

const CreateGameNavigator = createStackNavigator(
  {
    Intro: {
      screen: CreateIntroScreen,
      navigationOptions: () => ({
        title: 'select a size',
      }),
    },
    Values: {
      screen: CreateValuesScreen,
      navigationOptions: () => ({
        title: 'add buzzwords',
      }),
    },
    Preview: {
      screen: CreatePreviewScreen,
      navigationOptions: () => ({
        title: 'look good?',
      }),
    },
    Invite: {
      screen: CreateInviteScreen,
      navigationOptions: () => ({
        title: 'invite friends!',
      }),
    },
  },
  {
    initialRouteName: 'Intro',
    defaultNavigationOptions: {
      header: ({scene, navigation}) => {
        return (
          <BingoHeader
            title={scene.descriptor.options.title}
            onPressBack={() =>
              scene.route.routeName === 'Intro'
                ? navigation.navigate('Home')
                : navigation.pop()
            }
          />
        );
      },
    },
  },
);

const GamesNavigator = createStackNavigator(
  {
    MyGames: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    GameDetail: {
      screen: ActiveGameScreen,
      navigationOptions: () => ({
        title: 'your card',
      }),
    },
  },
  {
    initialRouteName: 'MyGames',
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: ({scene, navigation}) => {
        return (
          <BingoHeader
            title={scene.descriptor.options.title}
            onPressBack={() => navigation.pop()}
          />
        );
      },
    },
  },
);

const MainNavigator = createMaterialTopTabNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            name="user"
            size={30}
            color={focused ? colors.creme : colors.wafer}
          />
        ),
      },
    },
    Home: {
      screen: GamesNavigator,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            name="gamepad"
            size={30}
            color={focused ? colors.creme : colors.wafer}
          />
        ),
      },
    },
    Create: {
      screen: CreateGameNavigator,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            name="magic"
            size={30}
            color={focused ? colors.creme : colors.wafer}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      upperCaseLabel: false,
      labelStyle: {
        fontFamily: 'Montserrat-SemiBold',
        paddingBottom: 12,
        fontSize: 16,
        textTransform: 'lowercase',
      },
      iconStyle: {
        minHeight: 35,
        minWidth: 40,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      pressColor: colors.rhodochrosite,
      activeTintColor: colors.creme,
      inactiveTintColor: colors.wafer,
      indicatorStyle: {
        backgroundColor: colors.rhodochrosite,
      },
      tabStyle: {
        backgroundColor: colors.rhodochrosite,
      },
      style: {
        backgroundColor: colors.rhodochrosite,
      },
    },
  },
);

const RootNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: MainNavigator,
    Authorization: LoginScreen,
  },
  {
    initialRouteName: 'Loading',
  },
);

const App = createAppContainer(RootNavigator);

export default App;
