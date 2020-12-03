import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarcodeScanner} from 'expo-barcode-scanner';



export default class TransactionScreen extends React.Component{

    constructor(){
        super();
        this.state={
            hasCameraPermissios: null,
            scanned: false,
            scannedData: '',
            buttonState:'normal'
        }
    }

    getCameraPermissions=async()=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            //status==="granted" is true when the user has granted the permission
            hasCameraPermissios: status==="granted",
            buttonState:'clicked',
            scanned:false
        })

    }

    handleBarCodeScanned=async({type, data})=>{
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:'normal'
        })
    }


    render(){

        const hasCameraPermissios=this.setState.hasCameraPermissios;
        const scanned= this.state.scanned;
        const buttonState=this.state.buttonState

        

        if(buttonState==="clicked"&&hasCameraPermissios){
            return(
                <BarCodeScanner
                onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                />
            )
        }
        else if(buttonState==="normal"){
            return(
                <View style={styles.container}>
                    <Text style={{color: '#8b0023', fontSize: 50, fontWeight:'bold'}}>
                      Barcode Scanner
                    </Text>

                    <Image source={require("../assets/jj.jpg")}
                        style={{width:200, height:200, marginBottom:30, marginTop:40}}
          
                    />
                    
                    <Text style={styles.displayText}>
                        {
                            hasCameraPermissios===true?this.state.scannedData:"Request Camera Permissions"
                        }
                    </Text>

                    <TouchableOpacity onPress={this.getCameraPermissions}
                    style={styles.scannedButton}>

                        <Text style={styles.buttonText}>
                                Scan QR Code
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

const styles=StyleSheet.create({

    container:{
     flex:1,
     justifyContent:"center",
     alignItems: 'center'
    },

    displayText:{
        fontSize:15,
        textDecorationLine:'underline',

    },
    scannedButton:{
        backgroundColor:'#8b0023',
        padding:10,
        margin:10,

    },

    buttonText:{
        fontSize:20,
        color: 'white'
    }
})