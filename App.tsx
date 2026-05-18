import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const VPN_SERVERS = [
  { id: 'seattle-wa', city: 'Seattle', state: 'WA', flag: '🇺🇸', isp: 'Comcast Cable', fraudScore: 3.2, mtu: 1280, keepalive: 25 },
  { id: 'phoenix-az', city: 'Phoenix', state: 'AZ', flag: '🇺🇸', isp: 'Cox Communications', fraudScore: 4.8, mtu: 1280, keepalive: 25 },
  { id: 'newyork-ny', city: 'New York', state: 'NY', flag: '🇺🇸', isp: 'Spectrum', fraudScore: 5.7, mtu: 1280, keepalive: 25 },
  { id: 'lasvegas-nv', city: 'Las Vegas', state: 'NV', flag: '🇺🇸', isp: 'Cox Communications', fraudScore: 3.9, mtu: 1280, keepalive: 25 },
  { id: 'losangeles-ca', city: 'Los Angeles', state: 'CA', flag: '🇺🇸', isp: 'Spectrum', fraudScore: 4.6, mtu: 1280, keepalive: 25 },
];

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedId, setSelectedId] = useState('seattle-wa');
  const selected = VPN_SERVERS.find(s => s.id === selectedId);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.title}>🔐 Syria VPN Pro</Text>
        <Text style={styles.subtitle}>{isConnected ? '✅ Connected & Protected' : '❌ Not Connected'}</Text>
      </View>

      <ScrollView style={styles.scroll}>
        <TouchableOpacity
          style={[styles.connectBtn, { backgroundColor: isConnected ? '#00D4FF' : '#FF4444' }]}
          onPress={() => setIsConnected(!isConnected)}
        >
          <Text style={styles.connectIcon}>{isConnected ? '🔒' : '🔓'}</Text>
          <Text style={styles.connectText}>{isConnected ? 'Disconnect' : 'Connect'}</Text>
          <Text style={styles.connectSub}>{isConnected ? 'Protected' : 'Not Protected'}</Text>
        </TouchableOpacity>

        {selected && (
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Current Server</Text>
            <Text style={styles.infoValue}>{selected.flag} {selected.city}, {selected.state}</Text>
            <Text style={styles.infoSub}>MTU: {selected.mtu} | Keepalive: {selected.keepalive}s</Text>
          </View>
        )}

        <View style={styles.banner}>
          <Text style={styles.bannerText}>⚡ MTU 1280 — Optimized for Syriatel & MTN 4G/3G</Text>
        </View>

        <Text style={styles.sectionTitle}>🇺🇸 Premium US Residential Servers</Text>

        {VPN_SERVERS.map(server => (
          <TouchableOpacity
            key={server.id}
            style={[styles.card, selectedId === server.id && styles.cardSelected]}
            onPress={() => setSelectedId(server.id)}
          >
            <Text style={styles.cardFlag}>{server.flag}</Text>
            <View style={styles.cardInfo}>
              <Text style={styles.cardCity}>{server.city}, {server.state}</Text>
              <Text style={styles.cardIsp}>{server.isp}</Text>
              <Text style={styles.cardMtu}>MTU: {server.mtu}</Text>
            </View>
            <View style={styles.cardRight}>
              <Text style={styles.cardScore}>Score: {server.fraudScore}%</Text>
              <View style={[styles.dot, { backgroundColor: selectedId === server.id ? '#00FF00' : '#666' }]} />
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>WireGuard® | AES-256-GCM | No-Log Policy</Text>
          <Text style={styles.version}>v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0E1A' },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#1A2332' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#00D4FF' },
  subtitle: { fontSize: 14, color: '#AAAAAA', marginTop: 4 },
  scroll: { flex: 1, padding: 16 },
  connectBtn: { borderRadius: 16, padding: 30, alignItems: 'center', marginVertical: 20 },
  connectIcon: { fontSize: 48, marginBottom: 10 },
  connectText: { fontSize: 22, fontWeight: 'bold', color: '#FFF' },
  connectSub: { fontSize: 14, color: '#EEE', marginTop: 4 },
  infoCard: { backgroundColor: '#1A2332', borderRadius: 12, padding: 16, marginBottom: 16, borderLeftWidth: 4, borderLeftColor: '#00D4FF' },
  infoLabel: { fontSize: 12, color: '#888' },
  infoValue: { fontSize: 18, fontWeight: '600', color: '#FFF', marginTop: 4 },
  infoSub: { fontSize: 12, color: '#00D4FF', marginTop: 4 },
  banner: { backgroundColor: '#1A3A2A', borderRadius: 12, padding: 14, marginBottom: 20, borderLeftWidth: 4, borderLeftColor: '#00FF00' },
  bannerText: { color: '#00FF00', fontWeight: '500' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#FFF', marginBottom: 12 },
  card: { backgroundColor: '#1A1F2E', borderRadius: 12, padding: 16, marginBottom: 10, borderWidth: 2, borderColor: '#2A3F5F', flexDirection: 'row', alignItems: 'center' },
  cardSelected: { borderColor: '#00D4FF', backgroundColor: '#0A1420' },
  cardFlag: { fontSize: 30, marginRight: 12 },
  cardInfo: { flex: 1 },
  cardCity: { fontSize: 15, fontWeight: '600', color: '#FFF' },
  cardIsp: { fontSize: 12, color: '#AAA', marginTop: 2 },
  cardMtu: { fontSize: 11, color: '#00D4FF', marginTop: 2 },
  cardRight: { alignItems: 'flex-end' },
  cardScore: { fontSize: 11, color: '#888', marginBottom: 6 },
  dot: { width: 12, height: 12, borderRadius: 6 },
  footer: { alignItems: 'center', paddingVertical: 24, borderTopWidth: 1, borderTopColor: '#1A2332', marginTop: 10 },
  footerText: { fontSize: 12, color: '#666' },
  version: { fontSize: 11, color: '#444', marginTop: 4 },
});
