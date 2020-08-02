import React, { useState, useEffect } from 'react';
import styles from './styles';
import { View, Image, Text } from 'react-native';
import axios from 'axios';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


// NewConfirmed: 0,
// TotalConfirmed: 3660341,
// NewDeaths: 0,
// TotalDeaths: 258950,
// NewRecovered: 0,
// TotalRecovered: 1157475

const GlobalScreen = ({ route }) => {
  const { report } = route.params;
  return (
    <View style={styles.container}>
      <Card title="Pankaj CoVid 19" >
        <ListItem title="New Confirmed Cases " rightTitle={String(report.NewConfirmed)}></ListItem>
        <ListItem title="Total Confirmed Cases" rightTitle={String(report.TotalConfirmed)}></ListItem>
        <ListItem title="New Deaths" rightTitle={String(report.NewDeaths)}></ListItem>
        <ListItem title="Total Deaths" rightTitle={String(report.TotalDeaths)}></ListItem>
        <ListItem title="New Recovered" rightTitle={String(report.NewRecovered)}></ListItem>
        <ListItem title="Total Recovered" rightTitle={String(report.TotalRecovered)}></ListItem>
        
        
        
        
      </Card>
    </View>
  );
};



export default GlobalScreen;
