import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import loading from '../../config';

export default class products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
    };
  }
  render() {
    const color = this.props.category === 'Perecivel' ? '#FF7F4B' : '#58C1DF';

    return (
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image
            onError={() =>
              this.setState({
                image: loading
              })
            }
            source={{
              uri: this.state.image
                ? this.state.image
                : 'https://help-backend-published.herokuapp.com/assets/loading.gif',
            }}
            style={styles.Imagem}
            resizeMode={'contain'}
          />
        </View>

        <View style={styles.viewTextDescription}>
          <Text style={[styles.text, { color: 'black' }]}>
            {this.props.description}
          </Text>
          <View style={[styles.viewTextCategory, { backgroundColor: color }]}>
            <Text style={[styles.text, { fontSize: 12 }]}>
              {this.props.category}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C9F1FD',
    marginVertical: '1%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data: {
    flexDirection: 'row',
  },
  textData: {
    flex: 1,
  },
  Imagem: {
    height: 150,
    width: 180,
  },
  viewImage: {
    padding: '5%',
  },
  viewText: {
    marginRight: '8%',
  },
  text: {
    textAlign: 'right',
    fontSize: 18,
    color: 'white',
  },
  textView: {
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  viewTextDescription: {
    paddingRight: '5%',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  viewTextCategory: {
    marginTop: 'auto',
    alignSelf: 'flex-end',
    padding: 8,
    borderRadius: 4,
  },
});
