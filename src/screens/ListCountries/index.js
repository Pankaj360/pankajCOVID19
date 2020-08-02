import React, { useState, useEffect } from 'react';
import styles from './styles';
import { View, Image, Text, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';




const ListCountries = ({ navigation, route }) => {
  const { countries } = route.params;
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(countries);

  useEffect(() => {
    const result = countries.filter((country) =>
      country.Country.toLowerCase().includes(search.toLowerCase()),
    );
    setFilter(result);
  }, [search]);

  const callReport = (country) =>
    navigation.navigate('Country', { report: country, name: country.Country });

  return (
    <View style={styles.container}>
      <SearchBar lightTheme placeholder="Search country name" onChangeText={setSearch} value={search} />
      <FlatList
        data={filter}
        renderItem={({ item, index }) => (
          <ListItem
            key={index}
            onPress={() => callReport(item)}
            title={item.Country}
            subtitle={`New Deaths: ${item.TotalDeaths}`}
            subtitleStyle={styles.subtitleStyle}
            bottomDivider
            chevron
          />
        )}
      ></FlatList>
    </View>
  );
};



export default ListCountries;
