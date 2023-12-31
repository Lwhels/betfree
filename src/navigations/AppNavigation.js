import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import PlaceBetScreen from '../screens/PlaceBetScreen';
import CurrentBets from '../screens/CurrentBetsScreen';
import NewsScreen from '../screens/NewsScreen';
import Leaderboard from '../screens/LeaderboardScreen';
import {AppIcon, AppStyles} from '../AppStyles';
import {Configuration} from '../Configuration';
import DrawerContainer from '../components/DrawerContainer';
import ScoresScreen from '../screens/ScoresScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

// login stack
const LoginStack = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerTintColor: AppStyles.color.tint,
      headerTitleStyle: styles.headerTitleStyle,
      headerMode: 'float',
    }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTintColor: AppStyles.color.tint,
      headerTitleStyle: styles.headerTitleStyle,
      headerMode: 'float',
    }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({navigation}) => ({
        headerLeft: () => null,
        headerRight: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image style={styles.iconStyle} source={AppIcon.images.menu} />
          </Pressable>
        ),
        headerRightContainerStyle: {paddingRight: 10},
      })}
    />
    <Stack.Screen
      name="Betting Page"
      component={PlaceBetScreen}
      options={({navigation}) => ({
        headerRight: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image style={styles.iconStyle} source={AppIcon.images.menu} />
          </Pressable>
        ),
        headerRightContainerStyle: {paddingRight: 10},
      })}
    />
    <Stack.Screen
      name="Current Bets"
      component={CurrentBets}
      options={({navigation}) => ({
        headerRight: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image style={styles.iconStyle} source={AppIcon.images.menu} />
          </Pressable>
        ),
        headerRightContainerStyle: {paddingRight: 10},
      })}
    />
    <Stack.Screen
      name="News"
      component={NewsScreen}
      options={({navigation}) => ({
        headerRight: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image style={styles.iconStyle} source={AppIcon.images.menu} />
          </Pressable>
        ),
        headerRightContainerStyle: {paddingRight: 10},
      })}
    />
    <Stack.Screen
      name="Leaderboard"
      component={Leaderboard}
      options={({navigation}) => ({
        headerRight: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image style={styles.iconStyle} source={AppIcon.images.menu} />
          </Pressable>
        ),
        headerRightContainerStyle: {paddingRight: 10},
      })}
    />
    <Stack.Screen
      name="Scores"
      component={ScoresScreen}
      options={({navigation}) => ({
        headerRight: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image style={styles.iconStyle} source={AppIcon.images.menu} />
          </Pressable>
        ),
        headerRightContainerStyle: {paddingRight: 10},
      })}
    />
    <Stack.Screen
      name="Profile Page"
      component={ProfileScreen}
      options={({navigation}) => ({
        headerRight: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image style={styles.iconStyle} source={AppIcon.images.menu} />
          </Pressable>
        ),
        headerRightContainerStyle: {paddingRight: 10},
      })}
    />
  </Stack.Navigator>
);

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarInactiveTintColor: 'grey',
      tabBarActiveTintColor: AppStyles.color.tint,
      tabBarIcon: ({focused}) => {
        return (
          <Image
            style={{
              tintColor: focused ? AppStyles.color.tint : AppStyles.color.grey,
            }}
            source={AppIcon.images.home}
          />
        );
      },
      headerShown: false,
    }}>
    <BottomTab.Screen
      options={{tabBarLabel: 'Home'}}
      name="HomeStack"
      component={HomeStack}
    />
  </BottomTab.Navigator>
);

// drawer stack
const Drawer = createDrawerNavigator();
const DrawerStack = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerStyle: {outerWidth: 200},
      drawerPosition: 'right',
      headerShown: false,
    }}
    drawerContent={({navigation}) => (
      <DrawerContainer navigation={navigation} />
    )}>
    <Drawer.Screen name="Tab" component={TabNavigator} />
  </Drawer.Navigator>
);

// Manifest of possible screens
const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName="LoginStack"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="LoginStack" component={LoginStack} />
    <Stack.Screen name="DrawerStack" component={DrawerStack} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: 'black',
  },
  iconStyle: {tintColor: AppStyles.color.tint, width: 30, height: 30},
});

export default AppNavigator;
