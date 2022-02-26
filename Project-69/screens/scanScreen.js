import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component{
  constructor(){
    super()
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      scannedData: '',
      buttonState: 'normal'
    }
  }


getCameraPermissions = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  this.setState({
    hasCameraPermissions: status === 'granted',
    buttonState: 'clicked',
    scanned: false
  });
};

handleBarCodeScanner = async({type, data}) =>{
  this.setState({
    scanned: true,
    scannedData: data,
    buttonState: 'normal'
  })
}

render(){
  const hasCameraPermission = this.state.hasCameraPermissions;
  const isScanned = this.state.scanned;
  const isButtonState = this.state.buttonState;

  if(isButtonState === 'clicked' && hasCameraPermission){
    return (
      <BarCodeScanner
        onBarCodeScanned={isScanned ? undefined : this.handleBarCodeScanner}
        style={StyleSheet.absoluteFillObject}
      />
    )
}


  else if(isButtonState === 'normal'){
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.displayText}>
          {hasCameraPermission === true? this.state.scannedData :"Please Allow Camera Permission"}
        </Text>
        <TouchableOpacity
          style={styles.scanButton}
          onPress={this.getCameraPermissions}>
          <Text style={styles.buttonText}>Scan QR Code</Text>
        </TouchableOpacity>
        <Image source={require('scanner.jpeg')} style={styles.image}></Image>
      </View>
    </View>
  )
  }
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center' },

  scanButton: {
    backgroundColor: '#66BB6A',
    width: 200,
    borderWidth: 2,
  },
  buttonText: { 
    fontSize: 15,
    textAlign: 'center', 
    marginTop: 5 
  },

  image: {
    width: 200,
    height: 200
  }
  
  });

