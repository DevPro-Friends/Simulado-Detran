import { StyleSheet } from 'react-native';
import { Theme } from '../../../assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.White,
  },
  background: {
    position: 'absolute',
    backgroundColor: Theme.Colors.OrangeWeb,
  },
  main: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Theme.Colors.White,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  headerButtonIcon: {
    fontSize: 24,
    color: Theme.Colors.White,
  },
  section: {
    flex: 1,
    marginTop: 50,
  },
  sectionContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  box: {
    alignItems: 'center',
    paddingVertical: 30,
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: Theme.Colors.OxfordBlue,
    borderRadius: 10,
  },
  boxIconContainer: {
    width: 90,
    height: 90,
  },
  boxIcon: {
    width: '100%',
    height: '100%',
  },
  boxTitleContainer: {
    marginTop: 20,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Theme.Colors.White,
  },
});

export default styles;
