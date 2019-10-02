import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    StatusBar
} from 'react-native'
import { Actions } from 'react-native-router-flux';


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <StatusBar backgroundColor="black" barStyle="light-content" />
                </View>

                <View style={{
                    flex: 1, borderWidth: .5, shadowColor: '#00ACD0',
                    elevation: 3,
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                    shadowOffset: {
                        height: 1,
                        width: 0
                    }
                }}>
                    <View style={{
                        flex: 1, margin: 15,
                    }}>
                        <Text style={styles.Hdng}>
                            {this.props.data.id}
                        </Text>
                    </View>
                    <View style={{
                        flex: 1, margin: 15,
                    }}>
                        <Text style={styles.Hdng}>
                            {this.props.data.title}
                        </Text>
                    </View>
                    <View style={{
                        flex: 8, margin: 15,
                    }}>
                        <Text style={styles.Hdng}>
                            {this.props.data.body}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    Hdng: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    Header: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}) 