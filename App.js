import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
                <Text>{this.state.counter}</Text>
                <Button
                    onPress={() => {}}
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
