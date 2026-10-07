import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';

const services = [
  { id: 'restaurant', title: 'Restaurants', accent: '#3ec9ff' },
  { id: 'cafe', title: 'Cafes', accent: '#ffd166' },
  { id: 'taxi', title: 'Taxi', accent: '#7bdff6' },
];

const languages = ['Қазақша', 'Qaraqalpaqsha', 'Русский'];

export default function App() {
  const [selected, setSelected] = useState('restaurant');

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

      <View style={styles.langRow}>
        {languages.map((item) => (
          <Pressable key={item} style={styles.langChip}>
            <Text style={styles.langText}>{item}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.row}>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryText}>Order</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>Ride</Text>
        </Pressable>
      </View>

      <View style={styles.serviceRow}>
        {services.map((service) => {
          const active = selected === service.id;
          return (
            <Pressable
              key={service.id}
              onPress={() => setSelected(service.id)}
              style={[styles.serviceTab, active && { backgroundColor: service.accent }]}
            >
              <Text style={[styles.serviceTabText, active && styles.serviceTabTextActive]}>{service.title}</Text>
            </Pressable>
          );
        })}
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

      <View style={styles.footerBar}>
        <Text style={styles.footerText}>Profile</Text>
        <Text style={styles.footerText}>Orders</Text>
        <Text style={styles.footerText}>Home</Text>
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
  langRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 18,
  },
  langChip: {
    backgroundColor: '#121f31',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#1f2d42',
  },
  langText: {
    color: '#dfeafd',
    fontSize: 12,
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
  serviceRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },
  serviceTab: {
    flex: 1,
    backgroundColor: '#121f31',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#203149',
  },
  serviceTabText: {
    color: '#dfeafd',
    fontWeight: '700',
  },
  serviceTabTextActive: {
    color: '#06101a',
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
  footerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#1f2d42',
  },
  footerText: {
    color: '#dfeafd',
    fontWeight: '600',
  },
});
