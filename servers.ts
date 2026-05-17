export interface VPNServer {
  id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  flag: string;
  isp: string;
  fraudScore: number;
  ip: string;
  port: number;
  publicKey: string;
  mtu: number;
  keepalive: number;
}

export const VPN_SERVERS: VPNServer[] = [
  {
    id: "seattle-wa",
    name: "Seattle",
    city: "Seattle",
    state: "WA",
    country: "United States",
    flag: "🇺🇸",
    isp: "Comcast Cable (AS7922)",
    fraudScore: 3.2,
    ip: "206.189.45.123",
    port: 51820,
    publicKey: "YOUR_SEATTLE_PUBLIC_KEY_HERE",
    mtu: 1280,
    keepalive: 25
  },
  {
    id: "phoenix-az",
    name: "Phoenix",
    city: "Phoenix",
    state: "AZ",
    country: "United States",
    flag: "🇺🇸",
    isp: "Cox Communications (AS22773)",
    fraudScore: 4.8,
    ip: "45.33.96.234",
    port: 51820,
    publicKey: "YOUR_PHOENIX_PUBLIC_KEY_HERE",
    mtu: 1280,
    keepalive: 25
  },
  {
    id: "newyork-ny",
    name: "New York",
    city: "New York",
    state: "NY",
    country: "United States",
    flag: "🇺🇸",
    isp: "Spectrum (AS11351)",
    fraudScore: 5.7,
    ip: "64.227.12.45",
    port: 51820,
    publicKey: "YOUR_NEWYORK_PUBLIC_KEY_HERE",
    mtu: 1280,
    keepalive: 25
  },
  {
    id: "lasvegas-nv",
    name: "Las Vegas",
    city: "Las Vegas",
    state: "NV",
    country: "United States",
    flag: "🇺🇸",
    isp: "Cox Communications (AS22773)",
    fraudScore: 3.9,
    ip: "138.197.89.67",
    port: 51820,
    publicKey: "YOUR_LASVEGAS_PUBLIC_KEY_HERE",
    mtu: 1280,
    keepalive: 25
  },
  {
    id: "losangeles-ca",
    name: "Los Angeles",
    city: "Los Angeles",
    state: "CA",
    country: "United States",
    flag: "🇺🇸",
    isp: "Spectrum (AS11351)",
    fraudScore: 4.6,
    ip: "192.241.234.56",
    port: 51820,
    publicKey: "YOUR_LOSANGELES_PUBLIC_KEY_HERE",
    mtu: 1280,
    keepalive: 25
  }
];

export const getServerById = (id: string): VPNServer | undefined => {
  return VPN_SERVERS.find(server => server.id === id);
};

export const getAllServers = (): VPNServer[] => {
  return VPN_SERVERS;
};
