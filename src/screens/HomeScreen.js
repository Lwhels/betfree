import React, {useLayoutEffect, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  Modal,
} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {AppStyles} from '../AppStyles';
import {Configuration} from '../Configuration';
import BasicButton from '../components/BasicButton';
import '../global.js';
import firestore from '@react-native-firebase/firestore';
import {set} from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HomeScreen({navigation}) {
  const auth = useSelector((state) => state.auth);
  const [code, setCode] = useState(''); 
  const [modalVisible, setModalVisible] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
    });
  }, []);

  const checkCode = () => {
    firestore().collection("validReferralCodes").doc(global.currentuid).get()
    .then((users) => {
      var data = users.data();
      if (!data.exists){
        Alert.alert('Invalid referral code');
        return false;
      }
      else {
        let userid1 = data.id;
        firestore().collection('users').doc(userid1).update("balance", FieldValue.increment(10000));
        firestore().collection('users').doc(global.currentuid).update("balance", FieldValue.increment(10000));
        return true;
      }
    });
  }

    const onPress = () => {
      setModalVisible(!modalVisible)
    }

  if (global.first_time_logged){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome, {auth.user?.fullname ?? 'User'}!
        </Text>
        <Modal 
        visible={modalVisible}
        animationType='slide'
        transparent={true}
        onRequestClose= {()=> {setModalVisible(!modalVisible)}}
        
        >
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style = {{fontWeight: '400', fontSize: 22}}>
            It's your first time logging in! 
          </Text>
          <Text style = {{fontWeight: '300', fontSize: 20, marginTop: 10, marginBottom: 15}}>
            Add a friend's referral code for some extra "cash". 
          </Text>
        <TextInput
          style = {{
            marginTop: 5,
            borderColor: '#000000',
            borderWidth: 1,
            padding: '2%',
            borderRadius: 10,
            marginBottom: 10,
            width: 180,
            height: 30,
          }}
          placeholder=" Referral Code "
          placeholderTextColor={AppStyles.color.grey}
          onChangeText = {code => setCode(code)}
          ></TextInput>
          <View 
          style = {{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <TouchableOpacity
            style = {{
              marginTop: 10, 
              marginRight: 10,
            }}
            onPress={onPress}>
            <Text
                style = {{
                 color: 'green',
                 fontWeight: '500',
                 fontSize: 18,
                 }}
             >Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {{
              marginTop: 10, 
              marginLeft: 10
            }}
            onPress={onPress}>
            <Text
            style = {{
              color: 'maroon',
              fontWeight: '500',
              fontSize: 18,
            }}
            >Close</Text>
          </TouchableOpacity>
          </View>
          
          </View>
          </View>
        </Modal>
        
          
        <BasicButton
          onPress={() => navigation.navigate('Betting Page')}
          title="Make Bets Here!"
        />
        <BasicButton
          onPress={() => navigation.navigate('Current Bets')}
          title="My Bets"
        />
        <BasicButton onPress={() => navigation.navigate('News')} title="News" />
        <BasicButton
          onPress={() => navigation.navigate('Leaderboard')}
          title="Leaderboard"
        />
        <BasicButton
          onPress={() => navigation.navigate('Scores')}
          title="Scores"
        />
      </View>
    );
  }
  else {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, {auth.user?.fullname ?? 'User'}!
      </Text>
      <BasicButton
        onPress={() => navigation.navigate('Betting Page')}
        title="Make Bets Here!"
      />
      <BasicButton
        onPress={() => navigation.navigate('Current Bets')}
        title="My Bets"
      />
      <BasicButton onPress={() => navigation.navigate('News')} title="News" />
      <BasicButton
        onPress={() => navigation.navigate('Leaderboard')}
        title="Leaderboard"
      />
      <BasicButton
        onPress={() => navigation.navigate('Scores')}
        title="Scores"
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: Configuration.home.listing_item.offset,
  },
  title: {
    fontWeight: 'bold',
    color: AppStyles.color.title,
    fontSize: 25,
    textAlign: 'center',
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(HomeScreen);
