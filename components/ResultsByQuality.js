import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList } from 'react-native';
import MenuCancelButtons from '../constants/MenuCancelButtons';
import MenuGoForwardButtons from '../constants/MenuGoForwardButtons';
import GenericStyleButtons from '../constants/GenericStyleButtons';
import Outputs from '../constants/Outputs';
import Separator from './Separator';
import { useNavigation } from '@react-navigation/native';

const ResultsByQuality = ({ route }) => {
    const returnedData = route.params;
    const { isLoading } = route.params;
    const navigation = useNavigation();

    const colors = ['#7FB3D5', '#E74C3C', '#F8C471', '#76D7C4', '#73C6B6', '#FAD7A0', '#BECCE4', '#DFC702', '#FFE8FB', '#F8C471', '#76D7C4', '#FAD7A0', '#EAFAF1', '#F1948A', '#A9DFBF', '#3498DB', '#F39C12', '#FDEDEC', '#ABEBC6', '#FCF3CF'];

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors[Math.floor(Math.random() * 19) + 1],
            paddingBottom: 100,
            paddingTop: 50
        }}>

            <View style={Outputs.output}>

                {console.log(returnedData['data'], ' returnedData[data]')}
                {console.log(isLoading)}
                {isLoading ?
                    <View style={Outputs.waitText}><Text>Por favor aguarde...</Text></View>
                    :
                    <View>
                        {typeof (returnedData['data']) !== 'string' ?
                            <FlatList
                                keyExtractor={(item, index) => item._id}
                                data={returnedData['data']}
                                renderItem={item => (
                                    <View style={Outputs.internalOutput}>
                                        <Text style={Outputs.outputText}>
                                            {/* ID: {item.item['_id']} {"\n"} */}
                            Nome: {item.item['Vinho ou Marca']}{"\n"}
                            Produtor: {item.item['Produtor']}{"\n"}
                            Qualidade: {item.item['Qualidade']} {"\n"}
                                        </Text>
                                        {console.log(typeof (returnedData['data']))}
                                        <Separator />
                                    </View>
                                )}>
                            </FlatList>
                            :
                            <View>
                                <View style={Outputs.internalOutput}>
                                    <Text style={Outputs.outputTextNoResponse}>
                                        {returnedData['data']}
                                        {console.log(typeof (returnedData['data']))}
                                    </Text>
                                </View>
                            </View>
                        }
                    </View>
                }
            </View>
            <View style={GenericStyleButtons.backButton}>
                <View style={GenericStyleButtons.firstButton}>
                    <TouchableOpacity
                        style={MenuCancelButtons.backTouchable}
                        onPress={() => { navigation.navigate('StartScreen') }}
                    >
                        <Text style={MenuCancelButtons.buttonLabel}>Voltar</Text>
                    </TouchableOpacity>

                </View>

                <View style={GenericStyleButtons.secondButton}>
                    <TouchableOpacity
                        style={MenuGoForwardButtons.forwardTouchable}
                        onPress={() => { navigation.navigate('Home') }}
                    >
                        <Text style={MenuGoForwardButtons.buttonLabel}>Início</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 100,
        paddingTop: 50
    },
});

export default ResultsByQuality;