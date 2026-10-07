import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.inner}>
        <Text style={styles.badge}>Tamga Zakaz</Text>
        <Text style={styles.title}>Fast food, cafe, and taxi services</Text>
        <Text style={styles.subtitle}>
          Қазақша • Qaraqalpaqsha • Русский
        </Text>

        <View style={styles.row}>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Order</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Book ride</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#15263d',
    color: '#7bdff6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    fontWeight: '700',
    marginBottom: 16,
  },
  title: {
    color: '#f4f7fb',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    marginBottom: 12,
  },
  subtitle: {
    color: '#dfeafd',
    fontSize: 18,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#3ec9ff',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  primaryButtonText: {
    color: '#06101a',
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#1a2436',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  secondaryButtonText: {
    color: '#f4f7fb',
    fontWeight: '700',
  },
});
