import React, { useState } from 'react'
import { 
  View, 
  TextInput, 
  Button, 
  StyleSheet, 
  Modal
} from 'react-native'

const ListInput = (props) => {

  const [ items, setItems ] = useState("");

  const onChangeTextHandler = (inpuText) =>{
      setItems(inpuText)
    };

  const onPressHandle = () =>{
    props.onPressHandlerProps(items)
    setItems("")
  }
  
    return (
      <Modal visible ={props.visible} animationType="fade">
        <View style ={styles.inputContainer}>
          <TextInput 
            placeholder="Enter Items" 
            style = {styles.inputBox}
            onChangeText = {onChangeTextHandler}
            value={items}
          />
        </View>
        <View style ={styles.buttonContainer}>
        <Button
            title="CANCEL"
            color="red"
            onPress = {props.onCancelProps}
          />
          <Button 
            title="ADD"
            onPress = {onPressHandle}
            />
        </View>
      </Modal>
    )
}
export default ListInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop:200,
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center'
      },
      inputBox:{
        borderColor:'gray', 
        borderWidth: 2, 
        height : 40, 
        width : '70%', 
        textAlign : "center" 
      },
      heading:{
        fontSize:20,
        textAlign:"center",
        fontWeight:'bold'
      },
      buttonContainer:{
        marginTop:20,
        marginLeft:'15%',
        flexDirection:'row',
        justifyContent:'space-between',
        width: '70%'

      }
})