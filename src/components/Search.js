import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export const Search = ({value, onChangeText}) => {
    return(
<TextInput
        placeholder="Type Here..."
        placeholderTextColor="lightgray"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    );
}
const styles = StyleSheet.create({
    input: {
        flex: 1,
        fontSize: 17,
        borderWidth: 1,
        borderColor: 'red'
      },
})