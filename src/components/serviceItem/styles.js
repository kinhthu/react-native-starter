import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameStyle: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceStyle: {
    color: 'gray',
  },
  checkBox: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
});

export default styles;
