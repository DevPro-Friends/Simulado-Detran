import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Header styles

  header: {
    width: '100%',
    height: 100,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButton: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonIcon: {
    marginRight: 10,
    fontSize: 20,
  },

  // Main styles

  main: {
    flex: 1,
  },
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#b9b9b9',
  },
  itemText: {
    fontSize: 14,
  },
});

export default styles;
