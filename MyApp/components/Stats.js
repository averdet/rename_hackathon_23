import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { VictoryBar,VictoryPie, VictoryChart, VictoryTheme } from "victory-native";

const data = [
  { quarter: 1, earnings: 60 },
  { quarter: 2, earnings: 35 },
  { quarter: 3, earnings: 47 },
  { quarter: 4, earnings: 22 }
];

const StatsStack = createNativeStackNavigator();

export default class StatsStackVue extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <VictoryChart width={300} height={250} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
        
        <VictoryPie
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 }
                ]} radius={80}
            />
        <Text style={styles.title}>Productivité moyenne au cours de la semaine</Text>
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    flex: 1,
    justifyContent: "center",
    
    alignItems: "center",
    backgroundColor: "#f5fcff"
  },
  title: {
    
    color:'#2e294e',
    fontWeight:'500',
    textAlign: 'center',
    border: '1px solid red',
    fontSize: 11,
    
    verticalAlign:'top',
    marginTop: 0
  }
});







