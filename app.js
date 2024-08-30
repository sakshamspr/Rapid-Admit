// // // // // // // // function getLocation() {
// // // // // // // //     if (navigator.geolocation) {
// // // // // // // //         navigator.geolocation.getCurrentPosition(showPosition, showError);
// // // // // // // //     } else {
// // // // // // // //         alert("Geolocation is not supported by this browser.");
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // function showPosition(position) {
// // // // // // // //     const latitude = position.coords.latitude;
// // // // // // // //     const longitude = position.coords.longitude;
// // // // // // // //     findNearbyHospitals(latitude, longitude);
// // // // // // // // }

// // // // // // // // function findNearbyHospitals(lat, lon) {
// // // // // // // //     const url = `https://nominatim.openstreetmap.org/search?format=json&limit=5&q=hospital&lat=${lat}&lon=${lon}`;
    
// // // // // // // //     fetch(url)
// // // // // // // //         .then(response => response.json())
// // // // // // // //         .then(data => displayHospitals(data))
// // // // // // // //         .catch(error => console.error('Error:', error));
// // // // // // // // }

// // // // // // // // function displayHospitals(hospitals) {
// // // // // // // //     const hospitalList = document.getElementById('hospital-list');
// // // // // // // //     hospitalList.innerHTML = '';

// // // // // // // //     hospitals.forEach(hospital => {
// // // // // // // //         const div = document.createElement('div');
// // // // // // // //         div.className = 'hospital';
// // // // // // // //         div.innerHTML = `
// // // // // // // //             <h3>${hospital.display_name}</h3>
// // // // // // // //             <p>Latitude: ${hospital.lat}</p>
// // // // // // // //             <p>Longitude: ${hospital.lon}</p>
// // // // // // // //         `;
// // // // // // // //         hospitalList.appendChild(div);
// // // // // // // //     });
// // // // // // // // }

// // // // // // // // function showError(error) {
// // // // // // // //     switch(error.code) {
// // // // // // // //         case error.PERMISSION_DENIED:
// // // // // // // //             alert("User denied the request for Geolocation.");
// // // // // // // //             break;
// // // // // // // //         case error.POSITION_UNAVAILABLE:
// // // // // // // //             alert("Location information is unavailable.");
// // // // // // // //             break;
// // // // // // // //         case error.TIMEOUT:
// // // // // // // //             alert("The request to get user location timed out.");
// // // // // // // //             break;
// // // // // // // //         case error.UNKNOWN_ERROR:
// // // // // // // //             alert("An unknown error occurred.");
// // // // // // // //             break;
// // // // // // // //     }
// // // // // // // // }
// // // // // // // function getLocation() {
// // // // // // //     if (navigator.geolocation) {
// // // // // // //         navigator.geolocation.getCurrentPosition(showPosition, showError);
// // // // // // //     } else {
// // // // // // //         alert("Geolocation is not supported by this browser.");
// // // // // // //     }
// // // // // // // }

// // // // // // // function showPosition(position) {
// // // // // // //     const latitude = position.coords.latitude;
// // // // // // //     const longitude = position.coords.longitude;
// // // // // // //     findNearbyHospitals(latitude, longitude);
// // // // // // // }

// // // // // // // function findNearbyHospitals(lat, lon) {
// // // // // // //     const url = `https://nominatim.openstreetmap.org/search?format=json&limit=10&q=hospital&lat=${lat}&lon=${lon}`;
    
// // // // // // //     fetch(url)
// // // // // // //         .then(response => response.json())
// // // // // // //         .then(data => {
// // // // // // //             const filteredHospitals = data.filter(hospital => {
// // // // // // //                 const distance = calculateDistance(lat, lon, hospital.lat, hospital.lon);
// // // // // // //                 return distance <= 10; // distance in kilometers
// // // // // // //             });
// // // // // // //             displayHospitals(filteredHospitals);
// // // // // // //         })
// // // // // // //         .catch(error => console.error('Error:', error));
// // // // // // // }

// // // // // // // function calculateDistance(lat1, lon1, lat2, lon2) {
// // // // // // //     const R = 6371; // Radius of the Earth in km
// // // // // // //     const dLat = (lat2 - lat1) * (Math.PI / 180);
// // // // // // //     const dLon = (lon2 - lon1) * (Math.PI / 180);
// // // // // // //     const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
// // // // // // //             Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
// // // // // // //             Math.sin(dLon / 2) * Math.sin(dLon / 2);
// // // // // // //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// // // // // // //     return R * c; // Distance in km
// // // // // // // }

// // // // // // // function displayHospitals(hospitals) {
// // // // // // //     const hospitalList = document.getElementById('hospital-list');
// // // // // // //     hospitalList.innerHTML = '';

// // // // // // //     hospitals.forEach(hospital => {
// // // // // // //         const div = document.createElement('div');
// // // // // // //         div.className = 'hospital';
// // // // // // //         div.innerHTML = `
// // // // // // //             <h3>${hospital.display_name}</h3>
// // // // // // //             <p>Latitude: ${hospital.lat}</p>
// // // // // // //             <p>Longitude: ${hospital.lon}</p>
// // // // // // //         `;
// // // // // // //         hospitalList.appendChild(div);
// // // // // // //     });
// // // // // // // }

// // // // // // // function showError(error) {
// // // // // // //     switch(error.code) {
// // // // // // //         case error.PERMISSION_DENIED:
// // // // // // //             alert("User denied the request for Geolocation.");
// // // // // // //             break;
// // // // // // //         case error.POSITION_UNAVAILABLE:
// // // // // // //             alert("Location information is unavailable.");
// // // // // // //             break;
// // // // // // //         case error.TIMEOUT:
// // // // // // //             alert("The request to get user location timed out.");
// // // // // // //             break;
// // // // // // //         case error.UNKNOWN_ERROR:
// // // // // // //             alert("An unknown error occurred.");
// // // // // // //             break;
// // // // // // //     }
// // // // // // // }
// // // // // // function getLocation() {
// // // // // //     if (navigator.geolocation) {
// // // // // //         navigator.geolocation.getCurrentPosition(showPosition, showError);
// // // // // //     } else {
// // // // // //         alert("Geolocation is not supported by this browser.");
// // // // // //     }
// // // // // // }

// // // // // // function showPosition(position) {
// // // // // //     const latitude = position.coords.latitude;
// // // // // //     const longitude = position.coords.longitude;
// // // // // //     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
// // // // // //     findNearbyHospitals(latitude, longitude);
// // // // // // }

// // // // // // function findNearbyHospitals(lat, lon) {
// // // // // //     const url = `https://nominatim.openstreetmap.org/search?format=json&limit=10&q=hospital&lat=${lat}&lon=${lon}`;

// // // // // //     fetch(url)
// // // // // //         .then(response => response.json())
// // // // // //         .then(data => {
// // // // // //             console.log("Hospitals data:", data);
// // // // // //             const filteredHospitals = data.filter(hospital => {
// // // // // //                 const distance = calculateDistance(lat, lon, hospital.lat, hospital.lon);
// // // // // //                 return distance <= 10; // distance in kilometers
// // // // // //             });
// // // // // //             displayHospitals(filteredHospitals);
// // // // // //         })
// // // // // //         .catch(error => console.error('Error fetching hospital data:', error));
// // // // // // }

// // // // // // function calculateDistance(lat1, lon1, lat2, lon2) {
// // // // // //     const R = 6371; // Radius of the Earth in km
// // // // // //     const dLat = (lat2 - lat1) * (Math.PI / 180);
// // // // // //     const dLon = (lon2 - lon1) * (Math.PI / 180);
// // // // // //     const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
// // // // // //             Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
// // // // // //             Math.sin(dLon / 2) * Math.sin(dLon / 2);
// // // // // //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// // // // // //     return R * c; // Distance in km
// // // // // // }

// // // // // // function displayHospitals(hospitals) {
// // // // // //     const hospitalList = document.getElementById('hospital-list');
// // // // // //     hospitalList.innerHTML = '';

// // // // // //     if (hospitals.length === 0) {
// // // // // //         hospitalList.innerHTML = '<p>No nearby hospitals found within the specified range.</p>';
// // // // // //         return;
// // // // // //     }

// // // // // //     hospitals.forEach(hospital => {
// // // // // //         const div = document.createElement('div');
// // // // // //         div.className = 'hospital';
// // // // // //         div.innerHTML = `
// // // // // //             <h3>${hospital.display_name}</h3>
// // // // // //             <p>Latitude: ${hospital.lat}</p>
// // // // // //             <p>Longitude: ${hospital.lon}</p>
// // // // // //         `;
// // // // // //         hospitalList.appendChild(div);
// // // // // //     });
// // // // // // }

// // // // // // function showError(error) {
// // // // // //     switch(error.code) {
// // // // // //         case error.PERMISSION_DENIED:
// // // // // //             alert("User denied the request for Geolocation.");
// // // // // //             break;
// // // // // //         case error.POSITION_UNAVAILABLE:
// // // // // //             alert("Location information is unavailable.");
// // // // // //             break;
// // // // // //         case error.TIMEOUT:
// // // // // //             alert("The request to get user location timed out.");
// // // // // //             break;
// // // // // //         case error.UNKNOWN_ERROR:
// // // // // //             alert("An unknown error occurred.");
// // // // // //             break;
// // // // // //     }
// // // // // // }
// // // // // function findNearbyHospitals(lat, lon) {
// // // // //     const url = `https://nominatim.openstreetmap.org/search?format=json&limit=20&q=hospital&lat=${lat}&lon=${lon}`;

// // // // //     fetch(url)
// // // // //         .then(response => response.json())
// // // // //         .then(data => {
// // // // //             console.log("Raw Hospitals data:", data);
// // // // //             displayHospitals(data); // Display all hospitals without filtering
// // // // //         })
// // // // //         .catch(error => console.error('Error fetching hospital data:', error));
// // // // // }

// // // // // function displayHospitals(hospitals) {
// // // // //     const hospitalList = document.getElementById('hospital-list');
// // // // //     hospitalList.innerHTML = '';

// // // // //     if (hospitals.length === 0) {
// // // // //         hospitalList.innerHTML = '<p>No nearby hospitals found.</p>';
// // // // //         return;
// // // // //     }

// // // // //     hospitals.forEach(hospital => {
// // // // //         const div = document.createElement('div');
// // // // //         div.className = 'hospital';
// // // // //         div.innerHTML = `
// // // // //             <h3>${hospital.display_name}</h3>
// // // // //             <p>Latitude: ${hospital.lat}</p>
// // // // //             <p>Longitude: ${hospital.lon}</p>
// // // // //         `;
// // // // //         hospitalList.appendChild(div);
// // // // //     });
// // // // // }
// // // // function getLocation() {
// // // //     if (navigator.geolocation) {
// // // //         navigator.geolocation.getCurrentPosition(showPosition, showError);
// // // //     } else {
// // // //         document.getElementById('results').innerText = "Geolocation is not supported by this browser.";
// // // //     }
// // // // }

// // // // function showPosition(position) {
// // // //     const latitude = position.coords.latitude;
// // // //     const longitude = position.coords.longitude;

// // // //     document.getElementById('results').innerHTML = `<p>Latitude: ${latitude}, Longitude: ${longitude}</p>`;
// // // //     findHospitals(latitude, longitude);
// // // // }

// // // // function findHospitals(lat, lon) {
// // // //     const apiKey = '139f02debfcf47589fb74e3724c25938';
// // // //     const url = `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lon},${lat},5000&limit=10&apiKey=${apiKey}`;

// // // //     fetch(url)
// // // //         .then(response => response.json())
// // // //         .then(data => {
// // // //             console.log(data); // Log the raw data
// // // //             if (data.features.length > 0) {
// // // //                 displayHospitals(data.features);
// // // //             } else {
// // // //                 document.getElementById('results').innerText = "No nearby hospitals found.";
// // // //             }
// // // //         })
// // // //         .catch(error => {
// // // //             document.getElementById('results').innerText = "Error fetching hospitals.";
// // // //             console.error('Error:', error);
// // // //         });
// // // // }

// // // // function displayHospitals(hospitals) {
// // // //     const resultsDiv = document.getElementById('results');
// // // //     resultsDiv.innerHTML += '<h2>Nearby Hospitals:</h2>';

// // // //     hospitals.forEach(hospital => {
// // // //         const div = document.createElement('div');
// // // //         div.className = 'hospital';
// // // //         div.innerHTML = `
// // // //             <h3>${hospital.properties.name}</h3>
// // // //             <p>${hospital.properties.street}, ${hospital.properties.city}</p>
// // // //             <p>Distance: ${(hospital.properties.distance / 1000).toFixed(2)} km</p>
// // // //         `;
// // // //         resultsDiv.appendChild(div);
// // // //     });
// // // // }

// // // // function showError(error) {
// // // //     let errorText;
// // // //     switch(error.code) {
// // // //         case error.PERMISSION_DENIED:
// // // //             errorText = "User denied the request for Geolocation.";
// // // //             break;
// // // //         case error.POSITION_UNAVAILABLE:
// // // //             errorText = "Location information is unavailable.";
// // // //             break;
// // // //         case error.TIMEOUT:
// // // //             errorText = "The request to get user location timed out.";
// // // //             break;
// // // //         case error.UNKNOWN_ERROR:
// // // //             errorText = "An unknown error occurred.";
// // // //             break;
// // // //     }
// // // //     document.getElementById('results').innerText = errorText;
// // // // }
// // // function getLocation() {
// // //     if (navigator.geolocation) {
// // //         navigator.geolocation.getCurrentPosition(showPosition, showError);
// // //     } else {
// // //         document.getElementById('results').innerText = "Geolocation is not supported by this browser.";
// // //     }
// // // }

// // // function showPosition(position) {
// // //     const latitude = position.coords.latitude;
// // //     const longitude = position.coords.longitude;

// // //     document.getElementById('results').innerHTML = `<p>Latitude: ${latitude}, Longitude: ${longitude}</p>`;
// // //     findHospitals(latitude, longitude);
// // // }

// // // function findHospitals(lat, lon) {
// // //     const apiKey = '139f02debfcf47589fb74e3724c25938'; // Replace with your Geoapify API key
// // //     const url = `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lon},${lat},5000&limit=10&apiKey=${apiKey}`;

// // //     fetch(url)
// // //         .then(response => response.json())
// // //         .then(data => {
// // //             console.log(data); // Log the raw data
// // //             if (data.features.length > 0) {
// // //                 displayHospitals(data.features, lat, lon);
// // //             } else {
// // //                 document.getElementById('results').innerText = "No nearby hospitals found.";
// // //             }
// // //         })
// // //         .catch(error => {
// // //             document.getElementById('results').innerText = "Error fetching hospitals.";
// // //             console.error('Error:', error);
// // //         });
// // // }

// // // function displayHospitals(hospitals, userLat, userLon) {
// // //     const resultsDiv = document.getElementById('results');
// // //     resultsDiv.innerHTML += '<h2>Nearby Hospitals:</h2>';

// // //     hospitals.forEach(hospital => {
// // //         const { lat, lon } = hospital.properties;
// // //         const distance = calculateDistance(userLat, userLon, lat, lon);
        
// // //         const div = document.createElement('div');
// // //         div.className = 'hospital';
// // //         div.innerHTML = `
// // //             <h3>${hospital.properties.name}</h3>
// // //             <p>${hospital.properties.street}, ${hospital.properties.city}</p>
// // //             <p>Distance: ${distance.toFixed(2)} km</p>
// // //         `;
// // //         resultsDiv.appendChild(div);
// // //     });
// // // }

// // // function calculateDistance(lat1, lon1, lat2, lon2) {
// // //     const R = 6371; // Radius of the Earth in km
// // //     const dLat = toRadians(lat2 - lat1);
// // //     const dLon = toRadians(lon2 - lon1);
// // //     const a = 
// // //         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
// // //         Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * 
// // //         Math.sin(dLon / 2) * Math.sin(dLon / 2);
// // //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// // //     return R * c;
// // // }

// // // function toRadians(degrees) {
// // //     return degrees * (Math.PI / 180);
// // // }

// // // function showError(error) {
// // //     let errorText;
// // //     switch(error.code) {
// // //         case error.PERMISSION_DENIED:
// // //             errorText = "User denied the request for Geolocation.";
// // //             break;
// // //         case error.POSITION_UNAVAILABLE:
// // //             errorText = "Location information is unavailable.";
// // //             break;
// // //         case error.TIMEOUT:
// // //             errorText = "The request to get user location timed out.";
// // //             break;
// // //         case error.UNKNOWN_ERROR:
// // //             errorText = "An unknown error occurred.";
// // //             break;
// // //     }
// // //     document.getElementById('results').innerText = errorText;
// // // }
// // function getLocation() {
// //     if (navigator.geolocation) {
// //         navigator.geolocation.getCurrentPosition(showPosition, showError);
// //     } else {
// //         document.getElementById('results').innerText = "Geolocation is not supported by this browser.";
// //     }
// // }

// // function showPosition(position) {
// //     const latitude = position.coords.latitude;
// //     const longitude = position.coords.longitude;

// //     // Reverse Geocoding to get location name
// //     getLocationName(latitude, longitude)
// //         .then(locationName => {
// //             document.getElementById('results').innerHTML = `<p>Current Location: ${locationName}</p>`;
// //             findHospitals(latitude, longitude);
// //         })
// //         .catch(error => {
// //             document.getElementById('results').innerText = "Error retrieving location name.";
// //             console.error('Error:', error);
// //         });
// // }

// // function findHospitals(lat, lon) {
// //     const apiKey = '139f02debfcf47589fb74e3724c25938'; // Replace with your Geoapify API key
// //     const url = `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lon},${lat},5000&limit=10&apiKey=${apiKey}`;

// //     fetch(url)
// //         .then(response => response.json())
// //         .then(data => {
// //             console.log(data); // Log the raw data
// //             if (data.features.length > 0) {
// //                 displayHospitals(data.features, lat, lon);
// //             } else {
// //                 document.getElementById('results').innerText = "No nearby hospitals found.";
// //             }
// //         })
// //         .catch(error => {
// //             document.getElementById('results').innerText = "Error fetching hospitals.";
// //             console.error('Error:', error);
// //         });
// // }

// // function displayHospitals(hospitals, userLat, userLon) {
// //     const resultsDiv = document.getElementById('results');
// //     resultsDiv.innerHTML += '<h2>Nearby Hospitals:</h2>';

// //     hospitals.forEach(hospital => {
// //         const { lat, lon } = hospital.properties;
// //         const distance = calculateDistance(userLat, userLon, lat, lon);
        
// //         const div = document.createElement('div');
// //         div.className = 'hospital';
// //         div.innerHTML = `
// //             <h3>${hospital.properties.name}</h3>
// //             <p>${hospital.properties.street}, ${hospital.properties.city}</p>
// //             <p>Distance: ${distance.toFixed(2)} km</p>
// //         `;
// //         resultsDiv.appendChild(div);
// //     });
// // }

// // function calculateDistance(lat1, lon1, lat2, lon2) {
// //     const R = 6371; // Radius of the Earth in km
// //     const dLat = toRadians(lat2 - lat1);
// //     const dLon = toRadians(lon2 - lon1);
// //     const a = 
// //         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
// //         Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * 
// //         Math.sin(dLon / 2) * Math.sin(dLon / 2);
// //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// //     return R * c;
// // }

// // function toRadians(degrees) {
// //     return degrees * (Math.PI / 180);
// // }

// // function showError(error) {
// //     let errorText;
// //     switch(error.code) {
// //         case error.PERMISSION_DENIED:
// //             errorText = "User denied the request for Geolocation.";
// //             break;
// //         case error.POSITION_UNAVAILABLE:
// //             errorText = "Location information is unavailable.";
// //             break;
// //         case error.TIMEOUT:
// //             errorText = "The request to get user location timed out.";
// //             break;
// //         case error.UNKNOWN_ERROR:
// //             errorText = "An unknown error occurred.";
// //             break;
// //     }
// //     document.getElementById('results').innerText = errorText;
// // }

// // function getLocationName(lat, lon) {
// //     const apiKey = ''; // Replace with your Geoapify API key
// //     const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`;

// //     return fetch(url)
// //         .then(response => response.json())
// //         .then(data => {
// //             if (data.features && data.features.length > 0) {
// //                 return data.features[0].properties.name || "Unknown Location";
// //             } else {
// //                 return "Unknown Location";
// //             }
// //         });
// // }
// function displayLocationName(lat, lon) {
//     fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
//         .then(response => response.json())
//         .then(data => {
//             const locationName = data.address.city || data.address.town || data.address.village || data.display_name;
//             document.getElementById('user-location').innerText = locationName;
//         })
//         .catch(error => {
//             console.error('Error fetching location name:', error);
//         });
// }

// function findHospitals() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             const lat = position.coords.latitude;
//             const lon = position.coords.longitude;
//             displayLocationName(lat, lon);
//             const radius = 5000; // Search within a 5km radius

//             fetch(`https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lon},${lat},${radius}&bias=proximity:${lon},${lat}&limit=10&apiKey=139f02debfcf47589fb74e3724c25938`)
//                 .then(response => response.json())
//                 .then(result => {
//                     const hospitals = result.features;
//                     const hospitalList = document.getElementById('hospital-list');
//                     hospitalList.innerHTML = '';

//                     if (hospitals.length === 0) {
//                         hospitalList.innerHTML = '<li>No nearby hospitals found.</li>';
//                     } else {
//                         hospitals.forEach(hospital => {
//                             const hospitalName = hospital.properties.name || 'Unnamed Hospital';
//                             const hospitalDist = (hospital.properties.distance / 1000).toFixed(2); // Convert to kilometers

//                             const listItem = document.createElement('li');
//                             listItem.innerHTML = `<span>${hospitalName}</span> - ${hospitalDist} km away`;
//                             hospitalList.appendChild(listItem);
//                         });
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error fetching hospitals:', error);
//                 });
//         });
//     } else {
//         alert('Geolocation is not supported by this browser.');
//     }
// }
function displayLocationName(lat, lon) {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(data => {
            const locationName = data.address.city || data.address.town || data.address.village || data.display_name;
            document.getElementById('user-location').innerText = `Your location: ${locationName}`;
        })
        .catch(error => {
            console.error('Error fetching location name:', error);
            document.getElementById('user-location').innerText = 'Location not found';
        });
}

function initMap(lat, lon) {
    const map = L.map('map').setView([lat, lon], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    return map;
}

function addMarkersToMap(map, hospitals, lat, lon) {
    hospitals.forEach(hospital => {
        const hospitalLat = hospital.geometry.coordinates[1];
        const hospitalLon = hospital.geometry.coordinates[0];
        const marker = L.marker([hospitalLat, hospitalLon]).addTo(map);
        
        const hospitalName = hospital.properties.name || 'Unnamed Hospital';
        const hospitalDist = (hospital.properties.distance / 1000).toFixed(2); // Convert to kilometers

        marker.bindPopup(`<b>${hospitalName}</b><br>${hospitalDist} km away`);

        // Add hospital to list
        const hospitalList = document.getElementById('hospital-list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${hospitalName}</span> - ${hospitalDist} km away`;
        hospitalList.appendChild(listItem);
    });
}

function findHospitals() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            displayLocationName(lat, lon);

            const map = initMap(lat, lon);

            const radius = 5000; // Search within a 5km radius

            fetch(`https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lon},${lat},${radius}&bias=proximity:${lon},${lat}&limit=10&apiKey=139f02debfcf47589fb74e3724c25938`)
                .then(response => response.json())
                .then(result => {
                    const hospitals = result.features;
                    if (hospitals.length === 0) {
                        document.getElementById('hospital-list').innerHTML = '<li>No nearby hospitals found.</li>';
                    } else {
                        addMarkersToMap(map, hospitals, lat, lon);
                    }
                })
                .catch(error => {
                    console.error('Error fetching hospitals:', error);
                });
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

window.onload = findHospitals;



