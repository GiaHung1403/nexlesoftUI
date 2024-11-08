import React, {useState} from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type ItemProps = {title: string};

export default function Item({title}: ItemProps) {
  const [onClick, setOnClick] = useState(false);
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginRight: 8,
        marginBottom: 8,
      }}
      onPress={() => setOnClick(!onClick)}>
      <LinearGradient
        colors={onClick ? ['#8A00FF', '#8A32A9'] : ['transparent']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.8}}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          borderColor: `${'#FFFFFF'}12`,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: Dimensions.get('window').width / 5,
        }}>
        <Text style={{color: `${'#FFFFFF'}`, marginVertical: 10}}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
