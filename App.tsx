import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ConnectButton } from './ConnectButton';
import { ServerCard } from './ServerCard';
import { VPN_SERVERS } from './servers';

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedServerId, setSelectedServerId] = useState('seattle-wa');

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  const selectedServer = VPN_SERVERS.find(s => s.id === selectedServerId);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>🔐 Syria VPN Pro</Text>
        <Text style={styles.subtitle}>
          {isConnected ? 'Connected & Protected' : 'Not Connected'}
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Connect Button */}
        <ConnectButton isConnected={isConnected} onPress={handleConnect} />

        {/* Connection Info */}
        {selectedServer && (
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Current Server</Text>
            <Text style={styles.infoValue}>
              {selectedServer.flag} {selectedServer.city}, {selectedServer.state}
            </Text>
            <Text style={styles.infoSubtitle}>
              MTU: {selectedServer.mtu} | Keepalive: {selectedServer.keepalive}s
            </Text>
          </View>
        )}

        {/* Optimization Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerIcon}>⚡</Text>
          <Text style={styles.bannerText}>MTU 1280 - Optimized for Syriatel & MTN 4G/3G</Text>
        </View>

        {/* Server List */}
        <View style={styles.serversSection}>
          <Text style={styles.sectionTitle}>Premium US Residential Servers</Text>
          {VPN_SERVERS.map(server => (
            <ServerCard
              key={server.id}
              server={server}
              isSelected={selectedServerId === server.id}
              onPress={() => setSelectedServerId(server.id)}
            />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>WireGuard® | AES-256-GCM | No-Log Policy</Text>
          <Text style={styles.version}>v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E1A',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1A2332',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00D4FF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  infoCard: {
    backgroundColor: '#1A2332',
    borderRadius: 12,
    padding: 16,
    marginVertical: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#00D4FF',
  },
  infoLabel: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  infoSubtitle: {
    fontSize: 12,
    color: '#00D4FF',
  },
  banner: {
    backgroundColor: '#1A3A3A',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#00FF00',
  },
  bannerIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  bannerText: {
    flex: 1,
    fontSize: 13,
    color: '#00FF00',
    fontWeight: '500',
  },
  serversSection: {
    marginTop: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#1A2332',
  },
  footerText: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  version: {
    fontSize: 11,
    color: '#444444',
  },
});
