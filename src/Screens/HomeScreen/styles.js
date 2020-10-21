import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
  },
  btn: {
    borderRadius: 8,
    marginHorizontal: 6,
    marginVertical: 6,
    // backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  image: {
    height: 160,
    width: null,
    resizeMode: 'cover',
  },
  footer: {
    padding: 25,
    paddingTop: 5,
    paddingBottom: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 12,
    opacity: 0.6,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titlepurple: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8b00ff',
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textpurple: {
    fontSize: 16,
    color: '#8b00ff',
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default styles;
