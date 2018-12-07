import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

class ImageScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.getParam('title'),
    	headerRight: (
    		<TouchableOpacity onPress={ () => WebBrowser.openBrowserAsync(navigation.getParam('image')) }>
    			<Ionicons name="md-image" size={30} color="#ffffff" style={{ marginRight: 15 }} />
    		</TouchableOpacity>
    	),
    });	

	render() {
		return (
			<View style={{ alignItems: 'center' }}>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('ModalImage', { source: this.props.navigation.getParam('image')})}>
					<Image 
						style={{ width: 200, height: 300, margin: 10 }}
						source={{ uri: this.props.navigation.getParam('image') }}
					/>
				</TouchableOpacity>
			</View>
		)
	}	
};

export default ImageScreen;