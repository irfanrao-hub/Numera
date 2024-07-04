import React from 'react';
import { StyleSheet, View, } from 'react-native';

import { colors, hp, loaderStyles, wp } from '../../services';


export const Loader = props => {
    return (
        props.loading ?
            <View style={styles.container}>
             
            </View>
            :
            <View></View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp(100),
        width: wp(100),
        position: 'absolute',
        zIndex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'

    },
  
})