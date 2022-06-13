import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export const Search = ({onChangeText, onSubmitEditing}) => {
    return(
<TextInput
        placeholder="Type Here..."
        placeholderTextColor="lightgray"
        style={styles.input}
        onSubmitEditing={onSubmitEditing}
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
});