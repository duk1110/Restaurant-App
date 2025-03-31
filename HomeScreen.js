import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';

const { width } = Dimensions.get('window');

const hotOffers = [
  {
    title: 'BURGER',
    description: "Today's Hot Offer",
    rating: '⭐ 4.9 (3k+ Ratings)',
    discount: '10% OFF',
    image: 'https://th.bing.com/th/id/OIP.WArOdHx5xNYB5BarQbdXmQHaEJ?rs=1&pid=ImgDetMain'
  },
  {
    title: 'PIZZA',
    description: "Cheesy & Delicious",
    rating: '⭐ 4.8 (2k+ Ratings)',
    discount: '15% OFF',
    image: 'https://th.bing.com/th/id/OIP.HmvfqqVyML9hEpXH_yGI6QHaEJ?rs=1&pid=ImgDetMain'
  }
];

const HomeScreen = () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: 'https://th.bing.com/th/id/OIP.SqAptXmL4gGkA1nKw_CLJwHaHa?rs=1&pid=ImgDetMain' }} style={styles.avatar} />
        <View>
          <Text style={styles.locationText}>Your Location</Text>
          <Text style={styles.cityText}><Ionicons name="location-outline" size={16} color="blue" /> CoNhue, HaNoi</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput style={styles.searchInput} placeholder="Search your food" />
        <Ionicons name="options-outline" size={20} color="gray" />
      </View>

      <ScrollView>
        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          <TouchableOpacity style={styles.categoryActive}><Text>🍕 PIZZA</Text></TouchableOpacity>
          <TouchableOpacity style={styles.category}><Text>🍔 BURGER</Text></TouchableOpacity>
          <TouchableOpacity style={styles.category}><Text>🥤 DRINK</Text></TouchableOpacity>
          <TouchableOpacity style={styles.category}><Text>🍚 RICE</Text></TouchableOpacity>
        </ScrollView>

        {/* Hot Offers */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hotOffersContainer}>
        {hotOffers.map((item, index) => (
          <TouchableOpacity key={index} style={styles.hotOffer} onPress={() => {
            if (item.title === 'BURGER') {
              navigation.navigate('ShoppingCart');
            }
          }}>
            <Text style={styles.discountBadge}>{item.discount}</Text>
            <Text style={styles.offerTitle}>{item.title}</Text>
            <Text style={styles.offerDesc}>{item.description}</Text>
            <Text style={styles.rating}>{item.rating}</Text>
            <Image source={{ uri: item.image }} style={styles.offerImage} />
          </TouchableOpacity>
          ))}
        </ScrollView>
        {/* Popular Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.items}>
          <View style={styles.itemCard}>
            <Image source={{ uri: 'https://th.bing.com/th/id/R.44d10945c0a134e5d18b403a2d4eca7c?rik=AO60awUclc7mXw&riu=http%3a%2f%2fassets.epicurious.com%2fphotos%2f57c5c6d9cf9e9ad43de2d96e%2fmaster%2fpass%2fthe-ultimate-hamburger.jpg&ehk=ovkmWw5FEuB86jZ%2fN9Gt9ATrG2oovgVkW0CHny4no8E%3d&risl=&pid=ImgRaw&r=0' }} style={styles.itemImage} />
            <Text>BURGER</Text>
          </View>
          <View style={styles.itemCard}>
            <Image source={{ uri: 'https://th.bing.com/th/id/OIP.4925IGh0pykOKRzrFvTGEwHaHa?rs=1&pid=ImgDetMain' }} style={styles.itemImage} />
            <Text>PIZZA</Text>
          </View>
          </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15, marginTop: 30, backgroundColor: '#FFFFE0', borderRadius: 25, height: 100},
  avatar: { width: 50, height: 50, borderRadius: 25 },
  locationText: { fontSize: 12, color: 'gray' },
  cityText: { fontSize: 16, fontWeight: 'bold' },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 25, padding: 10, marginBottom: 20 },
  searchInput: { flex: 1, marginHorizontal: 10 },
  categories: { flexDirection: 'row', marginBottom: 10 },
  category: { padding: 10, backgroundColor: '#eee', borderRadius: 10, marginRight: 10 },
  categoryActive: { padding: 10, backgroundColor: 'green', borderRadius: 10, color: 'white' },
  hotOffersContainer: { flexDirection: 'row', paddingVertical: 10 },
  hotOffer: { backgroundColor: '#222', padding: 20, borderRadius: 10, marginRight: 15, width: width * 0.8 },
  discountBadge: { position: 'absolute', right: 10, top: 10, backgroundColor: 'blue', color: 'white', padding: 5, borderRadius: 5 },
  offerTitle: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  offerDesc: { color: 'white', fontSize: 16 },
  rating: { color: 'white', marginTop: 5 },
  offerImage: { width: '100%', height: 150, borderRadius: 10, marginTop: 10 },
  section: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  items: { flexDirection: 'row' },
  itemCard: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginRight: 10, alignItems: 'center' },
  itemImage: { width: 100, height: 80, borderRadius: 10 },
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: () => <Ionicons name="home-outline" size={24} color="black" /> }} />
      <Tab.Screen name="Order" component={() => <Text>Order</Text>} options={{ tabBarIcon: () => <Ionicons name="cart-outline" size={24} color="black" /> }} />
      <Tab.Screen name="Inbox" component={() => <Text>Inbox</Text>} options={{ tabBarIcon: () => <Ionicons name="mail-outline" size={24} color="black" /> }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: () => <Ionicons name="person-outline" size={24} color="black" /> }} />
    </Tab.Navigator>
  );
}