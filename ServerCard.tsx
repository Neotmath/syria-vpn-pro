import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { VPNServer } from './servers';

interface ServerCardProps {
  server: VPNServer;
  isSelected: boolean;
  onPress: () => void;
}

export const ServerCard: React.FC<ServerCardProps> = ({ server, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selectedCard]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <Text style={styles.flag}>{server.flag}</Text>
        <View style={styles.info}>
          <Text style={styles.city}>{server.city}, {server.state}</Text>
          <Text style={styles.isp}>{server.isp}</Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>Fraud Score</Text>
          <Text style={[styles.score, { color: server.fraudScore < 10 ? '#00FF00' : '#FFAA00' }]}>
            {server.fraudScore.toFixed(1)}%
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.speedContainer}>
          <Text style={styles.speedLabel}>Latency</Text>
          <Text style={styles.speed}>{Math.floor(Math.random() * 100 + 50)}ms</Text>
        </View>
        <View style={styles.statusIndicator}>
          <View style={[styles.dot, { backgroundColor: isSelected ? '#00FF00' : '#666666' }]} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1F2E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#2A3F5F',
  },
  selectedCard: {
    borderColor: '#00D4FF',
    backgroundColor: '#0A1420',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  flag: {
    fontSize: 32,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  city: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  isp: {
    fontSize: 12,
    color: '#AAAAAA',
  },
  scoreContainer: {
    alignItems: 'flex-end',
  },
  scoreLabel: {
    fontSize: 10,
    color: '#888888',
    marginBottom: 2,
  },
  score: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#2A3F5F',
  },
  speedContainer: {
    alignItems: 'flex-start',
  },
  speedLabel: {
    fontSize: 10,
    color: '#888888',
    marginBottom: 2,
  },
  speed: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00FF00',
  },
  statusIndicator: {
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
