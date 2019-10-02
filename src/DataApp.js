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
    state = {
        data: []
    };

    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        this.setState({ data: json })
        console.log(json)
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <StatusBar backgroundColor="black" barStyle="light-content" />
                </View>
                <FlatList data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{
                                flex: 1,
                                width: 400,
                                margin: 8,

                            }}
                                onPress={() => Actions.Detail({ data: item })}
                            >
                                <View style={{
                                    flex: 1, margin: 15,
                                    borderWidth: 1.5,
                                    borderColor: "#11D300",
                                    height: 150,
                                    shadowColor: '#00ACD0',
                                    elevation: 3,
                                    shadowOpacity: 0.2,
                                    shadowRadius: 2,
                                    shadowOffset: {
                                        height: 1,
                                        width: 0
                                    }
                                }}>
                                    <View style={{ flex: 1, margin: 18 }}>
                                        <Text style={styles.Hdng}>
                                            {`${item.id}`}
                                        </Text>
                                    </View>
                                    <View style={{
                                        flex: 9, justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Text style={styles.Hdng}>
                                            {`${item.title}`}
                                        </Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        )
                    }
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    Hdng: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    Header: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}) 