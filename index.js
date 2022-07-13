import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, NativeModules} from 'react-native';

var RNModules = NativeModules.Modules;
const CalendarManager = NativeModules.CalendarManager;
const date = new Date();
class RNHighScores extends React.Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {events: ''};
    }

    render() {
        var contents = this.props['scores'].map((score) => (
            <Text key={score.name}>
                {score.name}:{score.value}
                {'\n'}
            </Text>
        ));
        return (
            <View style={styles.container}>
                <Text style={styles.highScoresTitle}>2048 High Scores! Good!</Text>
                <Text style={styles.scores}>{contents}</Text>
                <Text style={styles.scores}>helloworld</Text>
                <Text style={styles.scores}>helloworldhelloworldhelloworldhelloworldhelloworld</Text>
                <TouchableOpacity
                    onPress={()=>RNModules.RNOpenOneVC('测试')}>
                    <Text style={styles.highScoresTitle}>返回上一页!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>RNModules.RNOpenOneVC('测试')}>
                    <Text style={styles.highScoresTitle}>abc</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={
                        ()=>CalendarManager.addEvent(
                            'Birthday Party',
                            '4 Privet Drive, Surrey',
                            date.getTime(),
                            {
                                location: '4 Privet Drive, Surrey',
                                time: date.getTime(),
                                description: '...',
                            }
                        )}>
                    <Text style={styles.highScoresTitle}>日期!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>CalendarManager.findEvents((error, events) => {
                        if (error) {
                            console.error(error)
                        } else {
                            // this.setState(() => {
                            //   return {events: events}
                            // })
                            this.setState({events: events})
                            console.log(events);
                        }
                    })
                    }>
                    <Text style={styles.highScoresTitle}>回调！{this.state.events}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    highScoresTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    scores: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

// Module name
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
