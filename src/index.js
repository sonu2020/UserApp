import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native'

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
        this.setState({ data: json.body })
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.data}
                    keyExtractor={(x, i) => i}


                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F5FCFF"
    }
}) 