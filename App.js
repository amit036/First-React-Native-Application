import React, { useState } from 'react';
import { StyleSheet, Text, View , Button, TextInput, ScrollView} from 'react-native';

export default function App() {
const [ items, setItems ] = useState("");
const [ listItems, setListItems ] = useState([])
const [ flagComplete ,setFlagComplete ] =useState(false)
const onChangeTextHandler = (inpuText) =>{
  setItems(inpuText)
}

const onPressHandler = () =>{
  setListItems([...listItems,items])
}

const onPressMark = ()=>{
  console.log("Delete Items")
}
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>
        Welcome to Todo List
      </Text>
      <View style ={styles.inputContainer}>
        <TextInput 
          placeholder="Enter Items" 
          style = {styles.inputBox}
          onChangeText = {onChangeTextHandler}
          value={items}
        />
        <Button 
          title="ADD"
          onPress = {onPressHandler}
          />
      </View>
      <ScrollView>
        {
          listItems.map((item,key) => {
            return(
              <View 
              key={key}
              style={styles.listItemsContainer}
              >
                <Text 
                style={styles.listItem}
                >
                  {item}
                </Text>
                <Button 
                  title ="DELETE"
                  onPress={onPressMark}
                />
              </View>
            )  
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 50,
    height:'100%'
  },
  heading:{
    fontSize:20,
    textAlign:"center",
    fontWeight:'bold'
  },
  inputContainer: {
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center'
  },
  inputBox:{
    borderColor:'gray', 
    borderWidth: 1, 
    height : 35, 
    width : '80%', 
    textAlign : "center" 
  },
    listItem:{
      fontSize:15,
      fontWeight:'bold',
      marginLeft:'10%',
      marginTop:10
    },
    listItemsContainer: {
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      alignContent:'center',
      borderColor:'gray', 
      borderWidth: 1
    }
});
