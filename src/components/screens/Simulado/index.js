import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

// Environments
import { environments } from '../../../../config/environments';

export default function SimuladoScreen ({ route, navigation }) {

  const simulado = route.params.data;

  const [ update, setUpdate ] = React.useState(true);
  const [ data, setData ] = React.useState([]);
  const [ load, setLoad ] = React.useState(false);
  const [ loadText, setLoadText ] = React.useState('Atualizar');

  React.useEffect(() => {
    setLoad(true);
    setLoadText('Atualizando');
    fetch(environments.apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .finally(() => {
        setUpdate(false);
        setLoad(false);
        setLoadText('Atualizar');
      });
  }, [update]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark"/>
      {/* --> Header <-- */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => navigation.goBack()}
            activeOpacity={0.4} 
          >
            <AntDesign style={styles.buttonIcon} name='back' />
            <Text>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => setUpdate(true)}
            activeOpacity={0.4} 
          >
            {loadText == 'Atualizando' ? <AntDesign style={styles.buttonIcon} name='loading1' /> : null}
            <Text>{loadText}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* --> Main <-- */}
      <View style={styles.main}>
        <ScrollView 
          style={styles.mainContent}
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 20}}
        >
          {
            data.map(data => { // .filter(data => data.id == 4)
              return(
                <TouchableOpacity 
                  key={data.id} 
                  style={styles.item} 
                  activeOpacity={0.5}
                >
                  <Text style={styles.itemText}>{data.id} - </Text>
                  <Text style={styles.itemText}>{data.nome}</Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  );
}
