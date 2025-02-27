import React from 'react';
import {View, StyleSheet } from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'www.d29fhpw069ctt2.cloudfront.net/icon/image/49067/preview.svg'
                                }}
                                size={50}
                            />
                        <View style={{marginLeft: 15, flexDirection:'column'}}>
                            <Title style={styles.title}>Shantanu Dubey</Title>
                            <Caption style={styles.caption}>Retailer</Caption>
                        </View>
                    </View>
                    
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({color, size})=> (
                            <Icon
                            name="home-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate
                        ('Home')}}
                        />
                    <DrawerItem
                        icon={({color, size})=> (
                            <Icon
                            name="account-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Catagorie"
                        onPress={() => {props.navigation.navigate
                        ('CatagorieScreen')}}
                        />
                    <DrawerItem
                        icon={({color, size})=> (
                            <Icon
                            name="bookmark-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="List"
                        onPress={() => {props.navigation.navigate
                        ('ListScreen')}}
                        />
                    <DrawerItem
                        icon={({color, size})=> (
                            <Icon
                            name="settings-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Setting"
                        onPress={() => {props.navigation.navigate
                        ('SettingsScreen')}}
                        />
                    <DrawerItem
                        icon={({color, size})=> (
                            <Icon
                            name="account-check-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Support"
                        onPress={() => {props.navigation.navigate
                        ('SupportScreen')}}
                        />
                    </Drawer.Section>
            </View>
                
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size }) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={()=> {}}
                />
            </Drawer.Section>
             
            
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex:1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        //alingItems: 'center'
    },
    section: {
        flexDirection: 'row',
        //alingItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});