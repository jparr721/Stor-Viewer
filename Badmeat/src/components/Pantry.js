import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Card, SmallCard, Header } from './common'
import {SmallHeader} from './common/SmallHeader'
class Pantry extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header headerText='Pantry'/>
                {/*Expiring food view (May add horizontal scrolling)*/}
                <SmallHeader headerText="Expiring Soon"/>
                <View style={styles.row}>
                    <SmallCard>
                        <Text>Small Card</Text>
                    </SmallCard>
                    <SmallCard>
                        <Text>Small Card</Text>
                    </SmallCard>
                    <SmallCard>
                        <Text>Small Card</Text>
                    </SmallCard>
                    <SmallCard>
                        <Text>Small Card</Text>
                    </SmallCard>
                </View>
                {/*Recently added food view (May add horizontal scrolling)*/}
                <SmallHeader headerText="Recently Added"/>
                <View style={styles.row}>
                    <SmallCard>
                        <Text>Small Card</Text>
                    </SmallCard>
                    <SmallCard>
                        <Text>Small Card</Text>
                    </SmallCard>
                    <SmallCard>
                        <Text>Small Card</Text>
                    </SmallCard>
                    <SmallCard>
                        <Text>Small Card</Text>
                    </SmallCard>
                </View>
                <View>
                    <Button
                        onPress={() => this.handleViewAll()}
                        title='View All'
                    />
                </View>
            </View>
        );
    }

    // Place holder for button handler
    handleViewAll(){

    };
}



const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default Pantry;
