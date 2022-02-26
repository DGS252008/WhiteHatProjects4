import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FaceBook extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>This page will show Facebook Link.</Text>
             </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#650770',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
