import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, } from 'react-native';
import { Sheet } from '../../styles';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Card, CardItem, Body, Fab, Text, Header, Left, Right, Button, Icon, Title, View } from 'native-base';

import DashboardCards from './dashboardCards';
import MyFood from '../myFood/myFood';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'false',
        }
    }

    render() {
        let title = {
            myFood: 'My Food',
            recipes: 'Recipes',
            test: 'test'
        };
        let totals = {
            inventoryTotal: '15',
            recipeTotal: '25'
        };
        return (
            <Container>
                <Content>
                    <ScrollView>
                        <Card onPress={() => this.props.navigation.navigate('MyFood')}>
                            <CardItem>
                                <Left />
                                <Body>
                                    <Text>My Food</Text>
                                    <Text note>Total: 20</Text>
                                </Body>
                                <Right />
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../../images/MyFoodPic.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left/>
                                <Body>
                                    <Button textStyle={{ color: '#87838B' }}>
                                        <Icon name="add"
                                            onPress={() => this.props.navigation.navigate('MyFood')} />
                                    </Button>
                                </Body>
                                <Right/>
                                
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Left />
                                <Body>
                                    <Text>Recipes</Text>
                                    <Text note>Total: 7</Text>
                                </Body>
                                <Right />
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../../images/Recipes.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Left />
                                <Body>
                                    <Text>Shopping Lists</Text>
                                    <Text note>Total: 4</Text>
                                </Body>
                                <Right />
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../../images/Recipes.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                        </Card>
                    </ScrollView>

                </Content>
                <Fab
                    active={false}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    >
                    <Icon name="camera" />
                </Fab>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

