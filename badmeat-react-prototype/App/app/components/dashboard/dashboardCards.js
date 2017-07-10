import React, {Component} from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


export default class DashboardCards extends Component {
    render(){
        return (
            <View style={styles.iconBox}>
                <Image
                    resizeMode='contain'
                    source={this.props.image}
                    style={styles.cardImage}>
                    <View style={styles.backdrop}>
                        <Text style={styles.backdropText}>{this.props.title}</Text>
                        <Text style={styles.backdropSubtext}>Available: {this.props.totals}</Text>
                    </View>
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconBox: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#3498db',
        
        height: 300,
        borderRadius: 15,
        margin: 30,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    cardImage: {  
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        
    },
    backdropText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
    },
    backdropSubtext: {
        fontSize: 20,
        textAlign: 'center',
        color: '#e5e5e5',
    }
});
