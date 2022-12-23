import * as React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { Mocks } from '../../../assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen ({ navigation }) {

  const boxes = Mocks.Boxes;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.background, {
        width: windowHeight, 
        height: windowHeight, 
        top: - (windowHeight / 2.5), 
        left: - (windowHeight - (windowHeight / 1.02)), 
        borderRadius: windowHeight,
      }]} />
      <ScrollView 
        style={[styles.main, {
          width: windowWidth,
          height: windowHeight,
        }]} 
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={styles.header}>
          <Text style={styles.headerTitle}>Bem Vindo</Text>
          <TouchableOpacity
            style={styles.headerButton} 
            activeOpacity={0.4}
          >
            <AntDesign style={styles.headerButtonIcon} name='setting' />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.section}>
          <View style={styles.sectionContent}>
            {
              boxes.map(data => (
                <TouchableOpacity 
                  key={data.id} 
                  style={[styles.box, {
                    width: (windowWidth  / 2) - 20
                  }]} 
                  onPress={() => navigation.navigate('Simulado', { data })}
                  activeOpacity={0.98} 
                >
                  <View style={styles.boxIconContainer}>
                    <Image style={styles.boxIcon} source={data.icon} />
                  </View>
                  <View style={styles.boxTitleContainer}>
                    <Text style={styles.boxTitle}>{data.title}</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
