import React from 'react';
import { View, Stylesheet, Text } from 'react-native';

class Sample extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    dupa123
                </Text>
            </View>
        );
    }
}

const styles = Stylesheet.create({
    container: {
        width: 100,
        height: 100
    }
});

export default Sample;