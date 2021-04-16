import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';

import api from './src/services/api';
import products from './src/components/products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  async componentDidMount() {
    const response = await api.get('items');
    this.setState({
      products: response.data
    });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={this.state.products}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <products
                description={item.description}
                category={item.category}
                image={item.image}
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
});

export default App;
