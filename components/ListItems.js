import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native'

const ListItems = (props) => {

    return (
        <TouchableOpacity 
            activeOpacity = {0.5}
            onPress={() => props.onDelete(props.id)}
        >
            <View style={styles.listItemsContainer}>
                <Text
                style ={styles.listItem}>
                { props.data }
                </Text>
            </View>
        </TouchableOpacity>
    )
}
export default ListItems;

const styles = StyleSheet.create({
    listItem:{
        fontSize:15,
        paddingBottom:5,
        fontWeight:'bold',
        marginLeft:'10%',
        marginTop:5
      },
      listItemsContainer: {
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        borderColor:'gray', 
        borderRadius:5,
        borderWidth: 1,
        width:'100%'
      }
})