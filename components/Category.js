import React from 'react';
import { Component } from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Category extends Component{
  render(){
      return (
        <TouchableOpacity>
          <View style={{ height:110, width: 110, marginLeft: 20}}>
                <Image source={this.props.imageUri}
                    style={{flex: 1, width: null, height: null, resizeMode:"cover"}}
                />
          </View>
        </TouchableOpacity>
    );
  };
}

export default Category;