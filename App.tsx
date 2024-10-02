import React from 'react';
import { View, Text, ScrollView, Image, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const categories = ['Cappucino', 'Machiatto', 'Latte', 'Americano'];
  const products = [
    { id: '1', name: 'Cappucino with Chocolate', price: '$4.53', image: require('./src/assets/kopi1.png'), rating: 4.8 },
    { id: '2', name: 'Cappucino with Oat Milk', price: '$3.90', image: require('./src/assets/kopi2.png'), rating: 4.9 },
    { id: '3', name: 'Cappucino', price: '$3.80', image: require('./src/assets/kopi3.png'), rating: 4.7 },
    { id: '4', name: 'Latte', price: '$4.20', image: require('./src/assets/kopi4.png'), rating: 4.6 },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>Blizen, Tanjungbalai</Text>
        </View>
        <Image source={require('./src/assets/avatar.png')} style={styles.avatar} />
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search coffee"
      />

      {/* Promo Banner */}
      <View style={styles.promoBanner}>
        <Text style={styles.promoLabel}>Promo</Text>
        <Image source={require('./src/assets/banner.png')} style={styles.promoImage} />
        <Text style={styles.promoText}>Buy one get one FREE</Text>
      </View>

      {/* Categories */}
      <ScrollView horizontal={true} style={styles.categoryScrollView}>
        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Products */}
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{item.rating} ★</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  promoBanner: {
    backgroundColor: '#ffe4b5',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    position: 'relative',
  },
  promoLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ff6347',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  promoImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  promoText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryScrollView: {
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  categoryButton: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 8,
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  productName: {
    marginVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#888',
  },
  ratingContainer: {
    marginTop: 5,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
