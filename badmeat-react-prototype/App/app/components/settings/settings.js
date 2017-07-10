import React, { Component } from 'react';
import { Sheet } from '../../styles';

import { Container, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Footer } from 'native-base';

export default class Settings extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name="plane" />
                            </Left>
                            <Body>
                                <Text>Airplane Mode</Text>
                            </Body>
                            <Right>
                                <Switch value={false} />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="wifi" />
                            </Left>
                            <Body>
                                <Text>Wi-Fi</Text>
                            </Body>
                            <Right>
                                <Text>GeekyAnts</Text>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="bluetooth" />
                            </Left>
                            <Body>
                                <Text>Bluetooth</Text>
                            </Body>
                            <Right>
                                <Text>On</Text>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
                <Footer>

                </Footer>
            </Container>
        );
    }
}

