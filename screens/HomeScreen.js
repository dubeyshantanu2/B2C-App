import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar, Image, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { Searchbar } from 'react-native-paper';

//import { ThemeConsumer } from 'styled-components';
import Category from '../components/Category';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAppLoadingLifecycleEmitter } from 'expo/build/launch/AppLoading';

const HomeScreen = ({navigation}) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.container}>
            <View style={{marginLeft: 20, marginRight: 20, borderRadius: 15}}> 
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            </View>

            <View style={styles.sliderContainer}>
            <Swiper height={200}
            autoplay 
            >
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/swiper/Offer3.png')}
                        resizeMode= "cover"
                        style={styles.sliderImage}
                    />     
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/swiper/2.jpg')}
                        resizeMode= "cover"
                        style={styles.sliderImage}
                    />     
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/swiper/3.jpg')}
                        resizeMode= "cover"
                        style={styles.sliderImage}
                    />     
                </View>
            </Swiper>     
            </View>
            <View style={{ height: 110, marginTop: 20}}>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <Category imageUri={require
                    ('../assets/items/Bakery.png')} />
                    <Category imageUri={require
                    ('../assets/items/Beauty.png')} />
                    <Category imageUri={require
                    ('../assets/items/Fruits.png')} />
                    <Category imageUri={require
                    ('../assets/items/Spices.png')} />
                    <Category imageUri={require
                    ('../assets/items/Veggies.png')} />
                </ScrollView>
            </View>

            <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 20, marginRight: 20}}>
                    <View > 
                        <TouchableOpacity>
                            <Image source={require('../assets/items/offer1.png')}
                                style={{ width: 200, height: 280, resizeMode:"cover", borderRadius:15}}/>
                        </TouchableOpacity>
                    </View>

                        <View style={{ flexDirection:'column' , alignContent: 'stretch',}}>
                            <TouchableOpacity>
                                <View >
                                    <Image source={require('../assets/items/Offer2.png')}
                                    style={{ width: 160, height: 130, resizeMode:"cover", borderRadius:15}}/>
                                </View>
                            </TouchableOpacity> 

                            <TouchableOpacity>  
                                <View style={{paddingTop: 20}} >
                                    <Image source={require('../assets/items/Organic.png')}
                                    style={{ width: 160, height: 130, resizeMode:"cover", borderRadius:15}}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>        
            </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        backgroundColor: "#fff"
    },

    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        paddingTop: 15,
    },

    offerContainer:{
        height:50,
        width: '25%',
        marginTop: 20,
        borderRadius: 30,
        marginLeft: 20
    },

    offer2Container:{
        height: 25,
        width: '25%',
        marginTop:20,
        borderRadius:15,
        marginLeft: 20,
    },

    wrapper: {

    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },

    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
});