import React, {useState, useRef} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {colors} from '../../assets/colors';
import {IconButton, BingoText} from '..';

const ProfileTextInput = props => {
  const [isFocused, setFocus] = useState(false);
  const [value, changeValue] = useState(props.value);
  const inputElement = useRef(null);
  const onPressCheck = () => {
    setFocus(false);
    inputElement.current.blur();
    props.onPress(value);
  };
  return (
    <View>
      <BingoText
        content={props.label}
        style="inputLabel"
        textTransform="uppercase"
      />
      <View style={profileTextInputStyles.outerContainer}>
        <TextInput
          ref={inputElement}
          style={profileTextInputStyles.input}
          value={value}
          onChangeText={text => changeValue(text)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {isFocused && (
          <View style={profileTextInputStyles.buttonContainer}>
            <IconButton
              style={profileTextInputStyles.checkButtonStyle}
              name="check"
              onPress={() => onPressCheck()}
              size={16}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const profileTextInputStyles = StyleSheet.create({
  input: {
    backgroundColor: colors.winter,
    marginBottom: 20,
    padding: 10,
    fontFamily: 'Montserrat-Regular',
    borderRadius: 10,
    height: 40,
  },
  outerContainer: {
    width: '100%',
  },
  checkButtonStyle: {
    height: 40,
    width: 40,
  },
  buttonContainer: {
    position: 'absolute',
    right: 0,
  },
});

export default ProfileTextInput;
