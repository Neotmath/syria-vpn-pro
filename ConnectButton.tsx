import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ConnectButtonProps {
  isConnected: boolean;
  onPress: () => void;
}

export const ConnectButton: React.FC<ConnectButtonProps> = ({ isConnected, onPress }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    onPress();
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={isConnected ? ['#00D4FF', '#0099FF'] : ['#FF6B6B', '#FF4444']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={handlePress}
          disabled={isLoading}
          activeOpacity={0.8}
        >
          <View style={styles.innerCircle}>
            <Text style={styles.icon}>{isConnected ? '🔒' : '🔓'}</Text>
          </View>
          <Text style={styles.buttonText}>
            {isLoading ? 'Connecting...' : isConnected ? 'Disconnect' : 'Connect'}
          </Text>
          <Text style={styles.statusText}>
            {isConnected ? 'Protected' : 'Not Protected'}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 40,
  },
  gradient: {
    borderRadius: 150,
    padding: 8,
  },
  button: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#0A0E1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    fontSize: 48,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#CCCCCC',
  },
});
