import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapAutoComplete from '../components/MapAutoComplete';
import MapMarker from '../components/MapMarker';
import PlaceCard from '../components/PlaceCard';
import ConstraintSlider from '../components/ConstraintSlider';
import CategoryDropDown from "../components/category";
import WundrLogo from '../images/Logotype.png';
import { 
  Link,
  NavLink
} from 'react-router-dom';

import { Button, Divider, message } from 'antd';

require('dotenv').config();

// ENTER API KEY AT LINE 216

// where we want our map to be centered
// const NY_BKBRIDGE = { lat: 40.7073329, lng: -74.0057195 };
const NY_BKBRIDGE = { lat: 40.680663, lng: -73.964908 };


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-primary bg-light ">
      <Link className="navbar-brand" to="/">
        <img src={WundrLogo} alt="Logo" height="34px" width="auto" className="d-inline-block align-top" />
        </Link>

    </nav>
  );
}

class MapsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constraints: [{ name: '', time: 0 }],
      userChoices: {category: '', transitMode: ''},
      categoryTypes: {
        entertainment: ['amusement_park', 'aquarium', 'book_store', 'beauty_salon', 'bowling_alley', 'casino', 'department_store', 'movie_theater', 'night_club', 'shopping_mall', 'stadium', 'zoo', 'park'],
        history: ['art_gallery', 'museum'],
        scenic: ['park', 'zoo', ],
        food: ['bakery', 'bar', 'cafe', 'restaurant']
      },
      searchIsClicked: false,
      searchResults: [],
      mapsLoaded: false,
      markers: [],
      map: {},
      mapsApi: {},
      newyorkLatLong: {},
      autoCompleteService: {},
      placesService: {},
      geoCoderService: {},
      directionService: {},
    };
  }

  // Update name for constraint with index === key
  updateConstraintName = ((event, key) => {
    event.preventDefault();
    const prevConstraints = this.state.constraints;
    const constraints = Object.assign([], prevConstraints);
    constraints[key].name = event.target.value;
    this.setState({ constraints });
  });

  // Updates distance (in KM) for constraint with index == key
  updateConstraintTime = ((key, value) => {
    const prevConstraints = this.state.constraints;
    const constraints = Object.assign([], prevConstraints);
    constraints[key].time = value;
    this.setState({ constraints });
  });

  updateUserChoices = ((event) => {
    // event.preventDefault();
    const prevUserChoices = this.state.userChoices;
    const userChoices = Object.assign([], prevUserChoices);
    userChoices.category = event; //.target.value
    this.setState({ userChoices });
    console.log(this.state.userChoices);
  })

  updateTransitMode = ((event) => {
    const prevUserChoices = this.state.userChoices;
    const userChoices = Object.assign([], prevUserChoices);
    userChoices.transitMode = event.target.value;
    this.setState({ userChoices });
    console.log(this.state.userChoices);
  })

  // Adds a Marker to the GoogleMaps component
  addMarker = ((lat, lng, name) => {
    const prevMarkers = this.state.markers;
    const markers = Object.assign([], prevMarkers);

    // If name already exists in marker list just replace lat & lng.
    // let newMarker = true;
    // for (let i = 0; i < markers.length; i++) {
      // if (markers[i].name === name) {
        // newMarker = false;
        // markers[i].lat = lat;
        // markers[i].lng = lng;
      //   break;
      // }
    // }
    // Name does not exist in marker list. Create new marker
    // if (newMarker) {
      markers.push({ lat, lng, name });
      // message.success(`Added new "${name}" Marker`);
    // }

    this.setState({ markers });
  });

  // Runs once when the Google Maps library is ready
  // Initializes all services that we need
  apiHasLoaded = ((map, mapsApi) => {
    this.setState({
      mapsLoaded: true,
      map,
      mapsApi,
      newyorkLatLong: new mapsApi.LatLng(NY_BKBRIDGE.lat, NY_BKBRIDGE.lng),
      autoCompleteService: new mapsApi.places.AutocompleteService(),
      placesService: new mapsApi.places.PlacesService(map),
      geoCoderService: new mapsApi.Geocoder(),
      directionService: new mapsApi.DirectionsService(),
    });
  });

  // With the constraints
  handleSearch = (() => {
    this.setState({searchIsClicked: true});
    const { markers, constraints, placesService, directionService, mapsApi } = this.state;
    if (markers.length === 0) {
      message.warn('Add a constraint and try again!');
      return;
    }
    const filteredResults = [];
    const marker = markers[0];
    const timeLimit = constraints[0].time;
    const markerLatLng = new mapsApi.LatLng(marker.lat, marker.lng);

    // getting which type array we need to use
    let temp;
    if (this.state.userChoices.category === 'fun')
      temp = this.state.categoryTypes.entertainment;
    else if (this.state.userChoices.category === 'nature')
      temp = this.state.categoryTypes.scenic;
    else if (this.state.userChoices.category === 'history')
      temp = this.state.categoryTypes.history;
    else
      temp = this.state.categoryTypes.food;

    const placesRequest = {
      location: markerLatLng,
      type: temp,                                 // List of types: https://developers.google.com/places/supported_types
      query: this.state.userChoices.category,
      rankBy: mapsApi.places.RankBy.prominence, 
    };

    // used to get a random number between 0 and a specified value
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    }

    // First, search for ice cream shops.
    placesService.textSearch(placesRequest, ((response) => {
      // Only look at the nearest top 5.

      console.log(response.length);
      const responseLimit = Math.min(3, response.length);

      // array initialized with false. If an activity becomes used, then that index in this
      // array becomes true. So if we get another random number that is equal to true valued index,
      // we can skip it
      const responseLength = Array.apply(null, Array(response.length)).map(index => {
        return false;
      });
      console.log(responseLength);

      for (let i = 0; i < responseLimit; i++) {
        // Finds random number from the first half of the results 
        let temp = getRandomInt((response.length));
        const activity = response[temp];
        
        // Makes sure that a response has not been chosen before
        while (responseLength[temp] === true || !activity.photos || activity.photos.length <= 0 || typeof(activity.photos[0].getUrl()) === 'undefined'){
          temp = getRandomInt((response.length));
          activity = response[temp];
        }

        const { rating, name } = activity;
        const address = activity.formatted_address; 
        const priceLevel = activity.price_level; 
        let photoUrl = '';
        photoUrl = activity.photos[0].getUrl();

        this.state.geoCoderService.geocode(activity, ((response) => {
          const { location } = response[0].geometry;
          console.log(location);
          this.addMarker(location.lat(), location.lng(), location.name);
        }))

        let openNow = false;
        if (activity.opening_hours) {
          openNow = activity.opening_hours.open_now; // e.g true/false
        }
        
        // console.log(`IIIIIIIII: ${i}`)
        // console.log(typeof(activity.photos[0].getUrl()));
        // console.log(activity.photos.length);

        // if (activity.photos && activity.photos.length > 0 && activity.photos[0].getUrl().length > 0) {
        //   photoUrl = activity.photos[0].getUrl();
        //   console.log(typeof(activity.photos[0].getUrl()));
        //   console.log(activity.photos.length);
        // }

        // Second, For each activity, check if it is within acceptable travelling distance
        const directionRequest = {
          origin: markerLatLng,
          destination: address, // Address of activity
          travelMode: this.state.userChoices.transitMode, //'DRIVING',
        }
        directionService.route(directionRequest, ((result, status) => {
          if (status !== 'OK') { return }
          const travellingRoute = result.routes[0].legs[0]; // { duration: { text: 1mins, value: 600 } }
          const travellingTimeInMinutes = travellingRoute.duration.value / 60;
          if (travellingTimeInMinutes < timeLimit) {
            const distanceText = travellingRoute.distance.text; // 6.4km
            const timeText = travellingRoute.duration.text; // 11 mins
            filteredResults.push({
              name,
              rating,
              address,
              openNow,
              priceLevel,
              photoUrl,
              distanceText,
              timeText,
            });
          }
          // Finally, Add results to state
          this.setState({ searchResults: filteredResults });

        }));

        responseLength[temp] = true;
      }

      // add markers
      for (let i = 0; i < this.state.searchResults.length; i++) {
        console.log(this.state.searchResults.length);
        console.log(this.state.searchResults[i].lat);
        console.log(this.state.searchResults[i].lng);

        this.addMarker(this.state.searchResults[i].lat, this.state.searchResults[i].lng, this.state.searchResults[i].name);
      }

    }));
  });


  
  render() {
    const { constraints, mapsLoaded, newyorkLatLong, markers, searchResults } = this.state;
    const { autoCompleteService, geoCoderService } = this.state; // Google Maps Services
    return (

  <body>
    <Navigation/>
      <div className="w-100 d-flex py-4 flex-wrap justify-content-center">
        <h1 className="w-100 fw-md1">Find Something to Do!</h1>
        {/* Constraints section */}
        <section className="col-4">
          {mapsLoaded ?
            <div>
              {constraints.map((constraint, key) => {
                const { name, time } = constraint;
                let temp;
                if (this.state.userChoices.transitMode === 'DRIVING')
                  temp = "car";
                else if (this.state.userChoices.transitMode === 'WALKING')
                  temp = "user"; 
                else
                  temp = "robot"
                return (
                  <div key={key} className="mb-4">
                    <div className="d-flex mb-2">
                      {/* <Input className="col-4 mr-2" placeholder="Name" onChange={(event) => this.updateConstraintName(event, key)} /> */}
                      <MapAutoComplete
                        autoCompleteService={autoCompleteService}
                        geoCoderService={geoCoderService}
                        newyorkLatLong={newyorkLatLong}
                        markerName={name}
                        addMarker={this.addMarker}
                      />
                    </div>
                    <CategoryDropDown 
                      onChange={(event) => this.updateUserChoices(event)}
                      onSwitch={(event) => this.updateTransitMode(event)}
                    />
                    <div>
                      <div>How many minutes away do you want to go? </div>
                    <ConstraintSlider
                      iconType={temp}
                      value={time}
                      onChange={(value) => this.updateConstraintTime(key, value)}
                    />
                    </div>
                    <Divider />
                  </div>
                );
              })}
            </div>
            : null
          }
        </section>

        {/* Maps Section */}
        <section className="col-4 h-md">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAbERNzM4B9kAEErVnaQmJ2t1Pntx9mdHo",
              libraries: ['places', 'directions']
            }}
            defaultZoom={10}
            defaultCenter={{ lat: NY_BKBRIDGE.lat, lng: NY_BKBRIDGE.lng }}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)} // "maps" is the mapApi. Bad naming but that's their library.
          >
            {/* Pin markers on the Map*/}
            {markers.map((marker, key) => {
              const { name, lat, lng } = marker;
              return (
                <MapMarker key={key} name={name} lat={lat} lng={lng} />
              );
            })}
          </GoogleMapReact>
        </section>

        {/* Search Button */}
        <Button className="mt-4 fw-md" type="primary" size="large" onClick={this.handleSearch}>Search!</Button>

        {/* Results section */}
        {searchResults.length > 0 ?
          <>
            <Divider />
            <section className="col-12">
              <div className="d-flex flex-column justify-content-center">
                <h1 className="mb-4 fw-md1">Tadah! Things to do!</h1>
                <div className="d-flex flex-wrap">
                  {searchResults.map((result, key) => (
                    <PlaceCard info={result} />
                  ))}
                </div>
              </div>
            </section>
          </>
          : this.state.searchIsClicked ? <h1 className="mb-4 fw-md1">Couldn't find anything but if you retry with new settings, 
                                        we should be able to get something to show up</h1>
                                        : null}
      </div>
    </body>

    )
  }
}

export default MapsContainer;