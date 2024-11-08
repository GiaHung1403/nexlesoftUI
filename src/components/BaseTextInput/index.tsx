// import { Input } from "native-base";
import React, {useState} from 'react';
import {
  ViewStyle,
  TouchableOpacity,
  Text,
  View,
  KeyboardTypeOptions,
} from 'react-native';
import {TextInput, useTheme, ProgressBar} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import Icon from '@components/Icon';
import {TextInputLabelProp} from 'react-native-paper/lib/typescript/components/TextInput/types';
import EStyleSheet from 'react-native-extended-stylesheet';

const validateValue = [
  {
    value: 1,
    text: 'To short',
    color: `${'#FFFFFF'}50`,
    progess: 0,
  },
  {
    value: 2,
    text: 'Week',
    color: '#E05151',
    progess: 0.25,
  },
  {
    value: 3,
    text: 'Fair',
    color: '#E3A063',
    progess: 0.5,
  },
  {
    value: 4,
    text: 'Good',
    color: '#647FFF',
    progess: 0.75,
  },
  {
    value: 5,
    text: 'Strong',
    color: '#91E2B7',
    progess: 1,
  },
];

interface IProps {
  value: string;
  label: string | TextInputLabelProp;
  placeholder: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  onChangeText?: (text: string) => void;
  containerStyle?: ViewStyle;
  iconLeft?: string;
  iconRight?: string;
  onPressIconRight?: () => void;
  keyboardType?: KeyboardTypeOptions;
  showChechBar?: boolean;
  underLineColor?: string;
  iconColor?: string;
}

const regexLength = /.{6,18}/g;
const regexUnderandUpperCase = /^(?=.*[a-z])(?=.*[A-Z])/g;
const regexSpecialC = /(?=.*[@$!%*?&])/g;
const regexALeastOneNumericC = /(?=.*\d)/g;

export default function BaseTextInput(props: IProps) {
  const {
    value,
    placeholder,
    secureTextEntry,
    autoCapitalize,
    onChangeText,
    containerStyle,
    iconLeft,
    iconRight,
    keyboardType,
    label,
    onPressIconRight,
    showChechBar,
    underLineColor,
    iconColor,
  } = props;
  const [isFocus, setHasFocus] = useState(false);
  const [valueValidate, setValueValidate] = useState(0);

  const checkValidate = text => {
    let value = 0;
    if (regexLength.test(text)) {
      value++;
      console.log(regexLength.test(text), text, 'Length');
      console.log(regexUnderandUpperCase.test(text), text, 'UpperCase');
      console.log(regexSpecialC.test(text), text, 'Special');
      console.log(regexALeastOneNumericC.test(text), text, 'OneNumberC');
      if (regexUnderandUpperCase.test(text)) value++;
      if (regexSpecialC.test(text)) value++;
      if (regexALeastOneNumericC.test(text)) value++;
      setValueValidate(value);
    } else setValueValidate(value);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        textAlign={'left'}
        label={label}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        // placeholderTextColor="#666"
        placeholderTextColor="white"
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        textColor="white"
        activeUnderlineColor={underLineColor || 'transparent'}
        underlineColor={underLineColor || 'transparent'}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        onEndEditing={() => (showChechBar ? checkValidate(value) : {})}
      />
      {iconLeft && (
        <View
          style={{
            top: 12,
            left: 8,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          }}>
          <Icon
            as={Ionicons}
            name={iconLeft}
            color={isFocus ? iconColor : '#555'}
            size={6}
          />
        </View>
      )}
      {iconRight && (
        <TouchableOpacity
          style={{
            top: 8,
            right: 8,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            paddingHorizontal: 8,
          }}
          onPress={onPressIconRight}>
          <Icon as={Ionicons} name={iconRight} color={iconColor} size={6} />
        </TouchableOpacity>
      )}
      {showChechBar ? (
        <View>
          <ProgressBar
            style={{
              height: value.length > 0 ? 1 : 0.5,
              position: 'absolute',
              top: -1,
            }}
            progress={
              value.length > 0 ? validateValue[valueValidate].progess : 1
            }
            color={
              value.length > 0 ? validateValue[valueValidate].color : '#647FFF'
            }
          />
          {value.length > 0 ? (
            <Text
              style={{
                textAlign: 'right',
                marginTop: 5,
                color: validateValue[valueValidate].color,
              }}>
              {validateValue[valueValidate].text}
            </Text>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    marginTop: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0.27,
    color: '#77869e',
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    color: '#042c5c',
    paddingLeft: 0,
  },
  textInput: {
    backgroundColor: 'transparent',
  },
});
