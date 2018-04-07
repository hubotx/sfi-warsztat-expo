import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text style={{fontSize: 42}}>{this.state.counter}</Text>
                <Button
                    onPress={() => {
                        this.setState({
                            counter: this.state.counter + 1
                        })
                    }}
                    title="Learn More"
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff4',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
