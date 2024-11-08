import BaseTextInput from '@components/BaseTextInput';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {Checkbox} from 'react-native-paper';
import Checkbox from '@components/CheckBox';
import {useDispatch} from 'react-redux';
import {login} from '../../actions/auth_action';

export default function LoginScreen(props: any) {
  const image = require('@assets/backgroup.jpg');
  const iconBack = require('@assets/ArrowBack_1.png');
  const iconGo = require('@assets/ArrowGo.png');
  const [inputValue, setInputValue] = useState({userName: '', password: ''});
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const _onPressIconShowPass = () => {
    setSecureTextEntry(oldStatus => !oldStatus);
  };

  const navigation: any = useNavigation();

  const _onPressLogin = async () => {
    dispatch(
      login({
        email: 'test1@gmail.com',
        password: '12345678',
      }),
    );
    navigation.navigate('DetailScreen');
  };

  return (
    <ImageBackground
      source={image}
      style={{flex: 1, width: '100%', height: '100%'}}
      resizeMode={true ? 'cover' : 'contain'}
      imageStyle={{
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        width: '100%',
        height: '60%',
      }}>
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)', 'rgba(0,0,0,1)']} // Black to transparent
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 80,
            left: 30,
            zIndex: 1,
          }}
          onPress={() => {}}>
          <Image source={iconBack} resizeMode="cover" />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignSelf: 'flex-start',
            padding: 10,
            bottom: 100,
          }}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 20,
              color: '#FFFFFF',
              fontWeight: '400',
              fontFamily: 'Lato',
            }}>
            {'Let’s get you started!'}
          </Text>

          <KeyboardAvoidingView
            style={{}}
            behavior={Platform.OS === 'android' ? undefined : 'padding'}>
            <BaseTextInput
              label={
                <Text style={{color: `${'#FFFFFF'}50`, fontSize: 12}}>
                  Your email
                </Text>
              }
              placeholder={''}
              value={inputValue.userName}
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={text =>
                setInputValue(oldData => ({
                  ...oldData,
                  userName: text,
                }))
              }
              showChechBar={false}
              underLineColor={'#647FFF'}
              // onPressIconRight={() => setToolTipVisible(true)}
            />
            <BaseTextInput
              label={
                <Text style={{color: `${'#FFFFFF'}50`, fontSize: 12}}>
                  Your password
                </Text>
              }
              placeholder={''}
              value={inputValue.password}
              iconRight={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
              iconColor={'#FFFFFF'}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              onChangeText={text =>
                setInputValue(oldData => ({
                  ...oldData,
                  password: text,
                }))
              }
              onPressIconRight={_onPressIconShowPass}
              showChechBar={true}
            />
          </KeyboardAvoidingView>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Checkbox
              isChecked={checked}
              onPress={() => setChecked(!checked)}
              text={'I am over 16 years of age'}
              textStyle={{color: '#FFFFFF', fontSize: 14}}
              checkboxStyle={{}}
              containerStyle={{}}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: `${'#FFFFFF'}50`,
              marginTop: 30,
            }}>
            By clicking Sign Up, you are indicating that you have read and agree
            to the {<Text style={{color: '#647FFF'}}>Terms of Service</Text>}{' '}
            and {<Text style={{color: '#647FFF'}}>Privacy Policy</Text>}
          </Text>

          <View
            style={{
              marginTop: 40,
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => {
                navigation.navigate('DetailScreen');
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#FFFFFF',
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: '#647FFF',
                borderRadius: 40,
                borderWidth: 1,
                height: 54,
                width: 54,
                marginRight: 10,
              }}
              onPress={() => {
                _onPressLogin();
              }}>
              <Image
                source={iconGo}
                resizeMode="cover"
                style={{position: 'absolute', top: 19, left: 13}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
