import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, InputGroup, Input, Text, Item } from 'native-base';
import { Sheet } from '../../styles';
import MapView from 'react-native-maps'

export default class Map extends Component {
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <MapView
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}>
                </MapView>
            </Container>
        );
    }
}
