import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.brand}>Tamga Zakaz</Text>
        <Text style={styles.location}>Nukus • Almaty</Text>
      </View>

      <View style={styles.heroCard}>
        <Text style={styles.badge}>Fast delivery</Text>
        <Text style={styles.title}>Food, cafe, and taxi in one place</Text>
        <Text style={styles.subtitle}>Қазақша • Qaraqalpaqsha • Русский</Text>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryText}>Order</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>Ride</Text>
        </Pressable>
      </View>

      <View style={styles.cardList}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Restaurants</Text>
          <Text style={styles.cardText}>Fresh menu, express delivery</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cafes</Text>
          <Text style={styles.cardText}>Coffee and dessert delivery</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Taxi</Text>
          <Text style={styles.cardText}>Quick rides across the city</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  brand: {
    color: '#f4f7fb',
    fontSize: 24,
    fontWeight: '800',
  },
  location: {
    color: '#8ea7d8',
    fontSize: 12,
  },
  heroCard: {
    backgroundColor: '#111d30',
    borderRadius: 22,
    padding: 24,
    borderWidth: 1,
    borderColor: '#203149',
    marginBottom: 18,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#15263d',
    color: '#7bdff6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    fontWeight: '700',
    marginBottom: 18,
  },
  title: {
    color: '#f5f7fb',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 38,
    marginBottom: 10,
  },
  subtitle: {
    color: '#dfeafd',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#3ec9ff',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#1a2436',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryText: {
    color: '#06101a',
    fontWeight: '700',
  },
  secondaryText: {
    color: '#f4f7fb',
    fontWeight: '700',
  },
  cardList: {
    gap: 14,
  },
  card: {
    backgroundColor: '#0f1b2d',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1f2d42',
  },
  cardTitle: {
    color: '#f4f7fb',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardText: {
    color: '#a7bbdc',
    fontSize: 14,
  },
});
