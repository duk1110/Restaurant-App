import React, { useContext, useState } from 'react';
import { View, Text, Image, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from './App';

const ProfileScreen = () => {
  const { setIsLoggedIn } = useContext(AppContext);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, darkMode && { backgroundColor: '#222' }]}> 
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        <Text style={styles.profileText}>Profile</Text>
      </View>

      {/* Avatar & Info */}
      <View style={styles.profileSection}>
        <Image source={{ uri: 'https://th.bing.com/th/id/OIP.SqAptXmL4gGkA1nKw_CLJwHaHa?rs=1&pid=ImgDetMain' }} style={styles.avatar} />
        <Text style={styles.name}>Le Tran Duc</Text>
        <Text style={styles.email}>test@gmail.com</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menuList}>
        <MenuItem icon="home-outline" title="Home" />
        <MenuItem icon="card-outline" title="My Card" />
        <MenuItem icon="moon-outline" title="Dark Mode" switchControl state={darkMode} setState={setDarkMode} />
        <MenuItem icon="bicycle-outline" title="Track Your Order" />
        <MenuItem icon="settings-outline" title="Settings" />
        <MenuItem icon="help-circle-outline" title="Help Center" />
      </View>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => setIsLoggedIn(false)}>
        <Text style={styles.logoutText}>Log Out</Text>
        <Ionicons name="log-out-outline" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const MenuItem = ({ icon, title, switchControl, state, setState }) => (
  <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
    <Ionicons name={icon} size={22} color="black" />
    <Text style={styles.menuText}>{title}</Text>
    {switchControl ? (
      <Switch value={state} onValueChange={() => setState(!state)} />
    ) : (
      <Ionicons name="chevron-forward-outline" size={20} color="gray" />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: 'white', marginTop: 30, position: 'relative'},
  backIcon: { marginRight: 15},
  profileText: { fontSize: 18, fontWeight: 'bold',position: 'absolute', left: '59%',transform: [{ translateX: -50 }]},
  profileSection: { alignItems: 'center', paddingVertical: 20, backgroundColor: '#FFFFE0' },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  email: { fontSize: 14, color: 'gray' },
  menuList: { marginTop: 10 },
  menuItem: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: 'white', marginBottom: 1 },
  menuText: { flex: 1, fontSize: 16, marginLeft: 10 },
  logoutButton: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#4F46E5', padding: 15, borderRadius: 10, margin: 20 },
  logoutText: { color: 'white', fontWeight: 'bold', marginRight: 5 },
});

export default ProfileScreen;
