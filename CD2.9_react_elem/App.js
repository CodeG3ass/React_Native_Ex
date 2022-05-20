import React, {useState} from 'react'
import { ButtonGroup, CheckBox, Icon } from '@rneui/themed'
import { Text, StyleSheet} from 'react-native';

export default() => {
const [selectedIndex, setSelectedIndex] = useState(0);
const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
const [check1, setCheck1] = useState(false);
const [check2, setCheck2] = useState(false);
const [check3, setCheck3] = useState(false);
const [check4, setCheck4] = useState(false);
return (
  <>
    <Text style={styles.subHeader}>Using Strings</Text>
    <ButtonGroup
      buttons={['SIMPLE', 'BUTTON', 'GROUP']}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
      }}
      containerStyle={{ marginBottom: 20 }}
    />
    <CheckBox
      center
      title="Click Here"
      checked={check1}
      onPress={() => setCheck1(!check1)}
    />

    <CheckBox
      center
      title="Вариант 1"
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      checked={check2}
      onPress={() => setCheck2(!check2)}
    />
    <ButtonGroup
      buttons={['Multiple', 'Select', 'Button', 'Group']}
      selectMultiple
      selectedIndexes={selectedIndexes}
      onPress={(value) => {
        setSelectedIndexes(value);
      }}
      containerStyle={{ marginBottom: 20 }}
    />
    <Text style={styles.subHeader}>Using Components</Text>
  </>
)
}

const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "#2089dc",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
}
})