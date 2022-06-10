import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from '.././components/Task';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

 const HomeScreen = () => {
 const navigation = useNavigation()
  const handleSignOut = () =>{
    auth
    .signOut()
    .then(()=>{
      navigation.replace("Login")
    })
    .catch(error=>alert(error.message))
  }
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
       <TouchableOpacity
      style={styles.button}
      onPress={handleSignOut}
      >
        <Text style={styles.buttonText} >Sign Out</Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      <KeyboardAvoidingView 
       behavior="padding,height"
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}
export default HomeScreen
const styles = StyleSheet.create({
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    top:-20
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 25,
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
 container:{
    flex:1,
    backgroundColor: '#E8EAED',
  },
  button:{
    backgroundColor:'gray',
    width:'25%',
    borderRadius:15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    left:265,
    top:30
},
buttonText:{
    color:'black',
    fontWeight:'700',
    fontSize:18,
},
  addText: {},
});