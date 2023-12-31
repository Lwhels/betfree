import {Platform, StyleSheet, Dimensions} from 'react-native';
import {Configuration} from './Configuration';

const {width, height} = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const AppStyles = {
  color: {
    main: '#2c6f99',
    text: '#696969',
    title: '#464646',
    subtitle: '#545454',
    categoryTitle: '#161616',
    tint: '#2c6f99',
    description: '#bbbbbb',
    filterTitle: '#8a8a8a',
    starRating: '#2bdf85',
    location: '#a9a9a9',
    white: 'white',
    //facebook: "#4267b2",
    grey: 'grey',
    greenBlue: '#00aea8',
    placeholder: '#a0a0a0',
    background: '#f2f2f2',
    blue: '#3293fe',
    green: '#228B22',
  },
  fontSize: {
    title: 30,
    content: 20,
    normal: 16,
  },
  buttonWidth: {
    main: '70%',
  },
  textInputWidth: {
    main: '80%',
  },
  borderRadius: {
    main: 25,
    small: 5,
  },
};

export const AppIcon = {
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    marginRight: 10,
  },
  style: {
    tintColor: AppStyles.color.tint,
    width: 25,
    height: 25,
  },
  images: {
    home: require('../assets/icons/home.png'),
    defaultUser: require('../assets/icons/default_user.jpg'),
    logout: require('../assets/icons/shutdown.png'),
    menu: require('../assets/icons/menu.png'),
    profile: require('../assets/icons/profile.png'),
    filter: require('../assets/icons/filters.png'),
    news: require('../assets/icons/news.png'),
    makebets: require('../assets/icons/makebets.png'),
    mybets: require('../assets/icons/mybets.png'),
    scores: require('../assets/icons/scores.png'),
    leaderboard: require('../assets/icons/leaderboard.png'),
    basketball2: require('../assets/icons/basketball.png'),
    basketball: require('../assets/images/basketballProfilePic.png'),
    hoop: require('../assets/images/hoopProfilePic.png'),
    jersey: require('../assets/images/jerseyProfilePic.png'),
    shoe: require('../assets/images/shoeProfilePic.png'),
    timer: require('../assets/images/timerProfilePic.png'),
    whistle: require('../assets/images/whistleProfilePic.png'),
    openeye: require('../assets/icons/openeye.png'),
    closeeye: require('../assets/icons/closeeye.png'),
    medal: require('../assets/icons/medal.png'),
    trophy: require('../assets/icons/trophy.png'),
    stocks: require('../assets/icons/stocks.png'),
    search: require('../assets/icons/search.png'),
  },
};

export const HeaderButtonStyle = StyleSheet.create({
  multi: {
    flexDirection: 'row',
  },
  container: {
    padding: 10,
  },
  image: {
    justifyContent: 'center',
    width: 35,
    height: 35,
    margin: 6,
  },
  rightButton: {
    color: AppStyles.color.tint,
    marginRight: 10,
    fontWeight: 'normal',
  },
});

export const ListStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    color: AppStyles.color.subtitle,
    fontWeight: 'bold',
  },
  subtitleView: {
    minHeight: 55,
    flexDirection: 'row',
    paddingTop: 5,
    marginLeft: 10,
  },
  leftSubtitle: {
    flex: 2,
  },
  avatarStyle: {
    height: 80,
    width: 80,
  },
});
