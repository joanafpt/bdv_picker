import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

const Container = props => {
    const colors =
        ['#7FB3D5', '#E74C3C', '#F8C471', '#76D7C4', '#73C6B6', '#FAD7A0', '#BECCE4', '#DFC702',
            '#FFE8FB', '#F8C471', '#76D7C4', '#FAD7A0', '#EAFAF1', '#F1948A', '#A9DFBF', '#3498DB',
            '#F39C12', '#FDEDEC', '#ABEBC6', '#FCF3CF'];

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}><View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors[Math.floor(Math.random() * 19) + 1],
                paddingBottom: 100,
                paddingTop: 50,
                ...props.style
            }}>{props.children}</View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    //nothing to show here

});

export default Container;