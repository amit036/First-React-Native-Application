import React, { useState } from 'react';
import { 
  StyleSheet, 
  View,
  FlatList,
  Button
} from 'react-native';

import ListItems from './components/ListItems';
import ListInput from './components/ListInput';

const App = () =>{

  const [ listItems, setListItems ] = useState([])
  const [ isAddMode, setIsAddMode ] = useState(false)

  const onPressHandler = (items) =>{
    setListItems(listItem => [
      ...listItem,
      { id : Math.random().toString(), value : items }
    ]);
    setIsAddMode(false)
  };

  const onDeleteItems = (itemId) =>{
    setListItems(listItem =>{
      return listItem.filter((e) => e.id !== itemId);
    })
  }

  const onCancelHandler = () =>{
    setIsAddMode(false)
  }

  return (
    <View style={styles.mainContainer}>
      <Button title ="Add New Items" onPress={()=> setIsAddMode(true)}/>
      <ListInput 
        visible={isAddMode} 
        onPressHandlerProps={onPressHandler}
        onCancelProps={onCancelHandler}
        />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listItems}
        renderItem={listItemsIterator => (        
          <ListItems 
            onDelete={()=>onDeleteItems(listItemsIterator.item.id)} 
            data={listItemsIterator.item.value}
          />
        )}
      />
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  mainContainer: {
    padding: 50,
    marginTop:'15%',
    height:'100%'
  }
});
