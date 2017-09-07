import React from 'react';
import { Constants } from 'expo';
import {Dimensions,AppRegistry, Image, StyleSheet, Text, View,TextInput,Button,Alert,FlatList,KeyboardAvoidingView, Modal, TouchableHighlight,WebView } from 'react-native';
import {
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete'; // 1.2.12

var {height, width} = Dimensions.get('window');

export default class App extends React.Component {
 
 //  _addCountry will add country in the CountryList
  _addCountry() {
    Alert.alert('Add country');
    console.log('Add country button'+width);
   }

   // _previousPage will change page backward
   _previousPage() {
    Alert.alert('Previous Page');
    console.log('Previous Page button');
   }

   // _nextPage() will change page forward
   _nextPage() {
    Alert.alert('Next Page');
    console.log('Next Page button');
   }



  render() {
    return (

      
      // principal container
      <View style={styles.container} > 

                    <View style={{height: 50,}} > 
                        <Text style={styles.titulo}  >My countries</Text>

                       
                    </View>  

                    <View style={styles.container2}  >
                   
                              <GooglePlacesAutocomplete
                                              placeholder="Search for country"
                                              minLength={2} // minimum length of text to search
                                              autoFocus={false}
                                              returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                                              listViewDisplayed="auto" // true/false/undefined
                                              fetchDetails={true}
                                              renderDescription={row => row.description} // custom description render
                                              onPress={(data, details = null) => {
                                                // 'details' is provided when fetchDetails = true
                                                console.log(data);
                                                console.log(details);
                                              }}
                                              getDefaultValue={() => {
                                                return ''; // text input default value
                                              }}
                                              query={{
                                                // available options: https://developers.google.com/places/web-service/autocomplete
                                                key: 'AIzaSyBkVFTfwigEIefrIb9IVPkkpxpzWQZU-Eg',
                                                language: 'en', // language of the results
                                                types: '(cities)', // default: 'geocode'
                                              }}
                                              styles={{
                                                


                                                textInputContainer: {
                                                  backgroundColor: '#EDEDED', 
                                                  borderTopWidth: 0,
                                                  borderBottomWidth:0
                                                },
                                                textInput: {
                                                  marginLeft: 0, 
                                                  marginRight: 0,
                                                  height: 38,
                                                  color: '#5d5d5d',
                                                  backgroundColor: '#EDEDED',
                                                  fontSize: 16,
                                                  padding: 10,
                                                },
                                                description: {
                                                  fontWeight: 'bold',

                                                },
                                                predefinedPlacesDescription: {
                                                  color: '#1faadb',
                                                },
                                              }}
                                              currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                                              currentLocationLabel="Current location"
                                              nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                                              GoogleReverseGeocodingQuery={{
                                                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                                              }}
                                              GooglePlacesSearchQuery={{
                                                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                                                rankby: 'distance',
                                                types: 'food',
                                              }}
                                              filterReverseGeocodingByTypes={[
                                                'locality',
                                                'administrative_area_level_3',
                                              ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                                              
                                             
                                            />
                                            
                            
                        
                        
                                <View style={styles.bluebuttonContainer} >
                                  <Button style={styles.bluebuttonContainer} onPress={this._addCountry} title="Add +" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
                                </View>
                          
                    </View>

                    <View style={{flex: 3,}}>

                                    

                                              <View style={styles.container3}  /*Iterate CountryList*/  >

                                                      <View style={{flex: 3}}>
                                                        <Text style={styles.bodytext}>Mexico</Text>
                                                      </View>

                                                      <View style={styles.container4} >
                                                              <Image
                                                                source={require('./Image/pequestar.png')}
                                                              />
                                                              <Image
                                                                source={require('./Image/trash.png')}
                                                              />
                                                              <Image
                                                                source={require('./Image/staroff.png')}
                                                              />
                                                      </View>
                                              </View>
                                              <View style={styles.container3}  /*Iterate CountryList*/  >

                                                      <View style={{flex: 3}}>
                                                        <Text style={styles.bodytext}>Mexico</Text>
                                                      </View>

                                                      <View style={styles.container4} >
                                                              <Image
                                                                source={require('./Image/pequestar.png')}
                                                              />
                                                              <Image
                                                                source={require('./Image/trash.png')}
                                                              />
                                                              <Image
                                                                source={require('./Image/staroff.png')}
                                                              />
                                                      </View>
                                              </View>
                                              <View style={styles.container3}  /*Iterate CountryList*/  >

                                                      <View style={{flex: 3}}>
                                                        <Text style={styles.bodytext}>Mexico</Text>
                                                      </View>

                                                      <View style={styles.container4} >
                                                              <Image
                                                                source={require('./Image/pequestar.png')}
                                                              />
                                                              <Image
                                                                source={require('./Image/trash.png')}
                                                              />
                                                              <Image
                                                                source={require('./Image/staroff.png')}
                                                              />
                                                      </View>
                                              </View>
                                              <View style={styles.container3}  /*Iterate CountryList*/  >

                                                      <View style={{flex: 3}}>
                                                        <Text style={styles.bodytext}>Mexico</Text>
                                                      </View>

                                                      <View style={styles.container4} >
                                                              <Image
                                                                source={require('./Image/pequestar.png')}
                                                              />
                                                              <Image
                                                                source={require('./Image/trash.png')}
                                                              />
                                                              <Image
                                                                source={require('./Image/staroff.png')}
                                                              />
                                                      </View>
                                              </View>
                                              <View style={styles.container3}  /*Iterate CountryList*/  >

                                                      <View style={{flex: 3}}>
                                                        <Text style={styles.bodytext}>Mexico</Text>
                                                      </View>

                                                      <View style={styles.container4} >
                                                              <Image
                                                                source={require('./Image/pequestar.png')}
                                                              />
                                                              <Image
                                                                source={require('./Image/trash.png')}
                                                              />
                                                              <Image
                                                                source={require('./Image/staroff.png')}
                                                              />
                                                      </View>
                                              </View>

                                         
                                            

                                            
                      </View> 
                        
                      <View style={styles.footercontainer}>

                            <View style={styles.graybuttonContainer}>
                              <Button onPress={this._previousPage} title="Previos page" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
                            </View>

                            <View style={styles.bluebuttonContainer}>
                              <Button onPress={this._nextPage} title="Next page" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
                            </View>
                      </View>
      </View>

      
    );
  }
} 



const styles = StyleSheet.create({
  bluebuttonContainer: {
    backgroundColor: '#4990E2',
    borderRadius: 5,
    padding: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  graybuttonContainer: {
    backgroundColor: '#EDEDED',
    borderRadius: 5,
    padding: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },

  container: {
    
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: '#ddd',
    //alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  footercontainer: {
    //flex: 2,
    height: 50,
    flexDirection: 'row',
    //backgroundColor: '#fef',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 9,
  },

  container2: { 
    flex: 1,
    position: 'relative',
    //height: ,
    flexDirection: 'row',
    //backgroundColor: '#fef',
    alignItems: 'flex-start',
   justifyContent: 'flex-start',
    padding: 9,
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#eee',
    
    //alignItems: 'left',
    justifyContent: 'space-between',
    padding: 0,
  },

  container4: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#eee',
    
    //alignItems: 'left',
    justifyContent: 'space-between',
    padding: 0,
  },

  textContainer:{
    alignItems: 'center',
    justifyContent: 'center',

  },
  titulo: {
    color: 'black',
    fontWeight: '400',
    fontSize: 32,
    fontFamily: 'Helvetica Neue',
    textAlign: 'left',
    padding: 10,
  },
  bodytext: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    textAlign: 'left',
    padding: 0,
  },
});

