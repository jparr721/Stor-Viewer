import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Card, SmallCard, Header } from './common'
import {SmallHeader} from './common/SmallHeader'
const pantryData = require( '../../dummy_data/dummy_data_1.json');
class Pantry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullPantryList: [],
            expiringItems: [],
            recentlyAdded: []
        };
    }

    render() {
        this.fetchAllFood();
        this.fetchExpiring();
        this.fetchNewFood();
        return (
            <View style={styles.container}>
                <Header headerText='Pantry'/>

                {/*Expiring food view (May add horizontal scrolling)*/}
                <SmallHeader headerText="Expiring Soon"/>
                <View style={styles.row}>
                    {this.state.expiringItems}
                </View>

                {/*Recently added food view (May add horizontal scrolling)*/}
                <SmallHeader headerText="Recently Added"/>
                <View style={styles.row}>
                    {this.state.recentlyAdded}
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

    fetchAllFood () {
        for (let i in pantryData.fullPantry) {
            this.state.fullPantryList.push(
                <SmallCard key={i}>
                    <Text>{i}</Text>
                </SmallCard>
            )
        }
    }

    fetchExpiring () {
        for (let i in pantryData.expiringFood) {
            this.state.expiringItems.push(
                <SmallCard key={pantryData.expiringFood[i].name}>
                    <Text>{pantryData.expiringFood[i].name}</Text>
                </SmallCard>
            )
        }
    }

    fetchNewFood () {
        for (let i in pantryData.newPantryItems) {
            this.state.recentlyAdded.push(
                <SmallCard key={pantryData.newPantryItems[i].name}>
                    <Text>{pantryData.newPantryItems[i].name}</Text>
                </SmallCard>
            )
        }
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
