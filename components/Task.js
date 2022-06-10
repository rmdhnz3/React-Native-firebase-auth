import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor: 'black',
    opacity: 0.5,
    borderRadius: 8,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    fontSize:20,
  },
  circular: {
    width: 14,
    height: 14,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default Task;