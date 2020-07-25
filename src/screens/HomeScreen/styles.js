import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  logo: {
    width: 230,
    height: 130,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  separator: {
    marginRight: 10,
  },
  group: {
    marginTop: 10,
    padding: 10,
    borderRadius: 4,

    flexDirection: 'row',
  },
});

export default styles;
