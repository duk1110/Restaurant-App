import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons (you may need to install @expo/vector-icons)

const ShoppingCartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Main Content in ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Shopping Cart</Text>
          <TouchableOpacity>
            <Ionicons name="trash-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Product Image Section */}
        <View style={styles.imageContainer}>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>10% OFF</Text>
            <Text style={styles.discountCode}>candy</Text>
          </View>
          {/* Placeholder for the main burger image */}
          <Image
            source={{ uri: 'https://th.bing.com/th/id/OIP.5UvFkQrqx9ESXdgbN1523QHaHa?rs=1&pid=ImgDetMain' }} // Replace with your burger image
            style={styles.mainImage}
          />
          <View style={styles.smallImages}>
            <Image
              source={{ uri: 'https://th.bing.com/th/id/OIP.q2R3E5vObIFzmkswIICyRgHaHa?rs=1&pid=ImgDetMain' }} // Replace with your burger image
              style={styles.smallImage}
            />
            <Image
              source={{ uri: 'https://th.bing.com/th/id/OIP.ggAq0ZPiI4qJ0Y0pLsGetgHaHa?rs=1&pid=ImgDetMain' }} // Replace with your burger image
              style={styles.smallImage}
            />
            <Image
              source={{ uri: 'https://th.bing.com/th/id/OIP.HoBmjE18qYa7wBvD12jHXgAAAA?w=474&h=474&rs=1&pid=ImgDetMain' }} // Replace with your burger image
              style={styles.smallImage}
            />
          </View>
        </View>

        {/* Product Details */}
        <View style={styles.productDetails}>
          <View style={styles.productInfo}>
            <Text style={styles.productName}>BURGER</Text>
            <Text style={styles.productPrice}>$28</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>02</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Delivery Address */}
        <View style={styles.addressContainer}>
          <View style={styles.addressInfo}>
            <Ionicons name="location-outline" size={20} color="#000" />
            <Text style={styles.addressText}>Dhaka, Bangladesh</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="pencil-outline" size={20} color="#6A5ACD" />
          </TouchableOpacity>
        </View>

        {/* Payment Method */}
        <View style={styles.paymentContainer}>
          <View style={styles.paymentInfo}>
            <Ionicons name="card-outline" size={20} color="#000" />
            <Text style={styles.paymentText}>Payment Method</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Checkout Summary */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Checkout Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal (2)</Text>
            <Text style={styles.summaryValue}>$56</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>$6.20</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Payable Total</Text>
            <Text style={styles.summaryValue}>$62.20</Text>
          </View>
        </View>

        {/* Confirm Order Button */}
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation - Fixed at the bottom */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#6A5ACD" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="#A9A9A9" />
          <Text style={styles.navText}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbox-outline" size={24} color="#A9A9A9" />
          <Text style={styles.navText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#A9A9A9" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    paddingBottom: 80, // Ensure content doesn't overlap with the bottom navigation
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    margin: 15,
    padding: 10,
    alignItems: 'center',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
  },
  discountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  discountCode: {
    fontSize: 10,
    color: '#000',
  },
  mainImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  smallImages: {
    flexDirection: 'row',
    marginTop: 10,
  },
  smallImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#6A5ACD',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#A9A9A9',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#E6E6FA',
    borderRadius: 5,
    padding: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
    borderRadius: 10,
    margin: 15,
    padding: 10,
  },
  addressInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    marginLeft: 10,
    fontSize: 14,
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentText: {
    marginLeft: 10,
    fontSize: 14,
  },
  changeText: {
    color: '#6A5ACD',
    fontSize: 14,
  },
  summaryContainer: {
    margin: 15,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#6A5ACD',
    borderRadius: 25,
    margin: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E6E6FA',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#A9A9A9',
  },
});

export default ShoppingCartScreen;