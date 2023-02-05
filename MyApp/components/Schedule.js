import * as React from 'react';
import Timeline from 'react-native-timeline-flatlist';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ScheduleVue() {
    return(
        <Timeline
          data={[
            {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
            {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
            {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
            {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
            {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
          ]}
        />    
    )
  }

const ScheduleStack = createNativeStackNavigator();

function ScheduleStackVue() {
  return (
    <ScheduleStack.Navigator>
      <ScheduleStack.Screen name="Programme" component={ScheduleVue} />
    </ScheduleStack.Navigator>
  );
}

export default ScheduleStackVue;