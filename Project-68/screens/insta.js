import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Insta extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>This page shows Instagram link.</Text>
             </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101352',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
