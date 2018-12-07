import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class StartScreen extends Component {
	static navigationOptions = {
		title: 'Start'
    }

    constructor(props) {
    	super(props);
    	this.onPressImageScreen = this.onPressImageScreen.bind(this);
    	this.onPressGreyscaleImageScreen = this.onPressGreyscaleImageScreen.bind(this);
    	this.onPressBlurredImageScreen = this.onPressBlurredImageScreen.bind(this);
    }

    onPressImageScreen() {
    	this.props.navigation.navigate('ImageScreen', {
    		title: 'Regular Image',
    		image: 'https://picsum.photos/400/600/?random'
    	});
    }

    onPressGreyscaleImageScreen() {
    	this.props.navigation.navigate('ImageScreen', {
    		title: 'Greyscale Image',
    		image: 'https://picsum.photos/g/400/600/?random'
    	});
    }

    onPressBlurredImageScreen() {
    	this.props.navigation.navigate('ImageScreen', {
    		title: 'Blurred Image',
    		image: 'https://picsum.photos/400/600/?random&blur'
    	});
    }

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight 
					style={styles.button}
					onPress={this.onPressImageScreen}
					underlayColor= '#1B5E20'>
					<Text style={styles.buttonLabel}>View Image</Text>
				</TouchableHighlight>
				<TouchableHighlight 
					style={styles.button}
					onPress={this.onPressGreyscaleImageScreen}
					underlayColor= '#1B5E20'>
					<Text style={styles.buttonLabel}>View Greyscale Image</Text>
				</TouchableHighlight>
				<TouchableHighlight 
					style={styles.button}
					onPress={this.onPressBlurredImageScreen}
					underlayColor= '#1B5E20'>
					<Text style={styles.buttonLabel}>View Blurred Image</Text>
				</TouchableHighlight>
			</View>
		)
	}	
};


export default StartScreen;

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    backgroundColor: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center',
  	},
  	button: {
	    width: 200,
	    height: 50,
	    borderRadius: 5,
	    margin: 10,
	    alignItems: 'center',
	    justifyContent: 'center',
	    backgroundColor: '#388E3C',
  	},
  	buttonLabel: {
	    color: 'white',
	    fontSize: 18,
	    fontWeight: 'bold',
  	},
});