var Data = {
    "shops": [{
            "name": "Dunkin' Donuts",
            "gmapId": "ChIJAS5GvX85ghUR-353leAl2BA",
            "coor": {
                "lat": 26.06774599,
                "lng": 43.55895638
            },
            "fsId": "566347d2498eb02109de0e57"
        },
        {
            "name": "Chocolate line &more",
            "gmapId": "ChIJM7ViIoc5ghURxNO3OQWYcc0",
            "coor": {
                "lat": 26.06002133,
                "lng": 43.55874717
            },
            "fsId": "5776859c498eceb353edb874"
        },
        {
            "name": "SMSA Express",
            "gmapId": "ChIJYRMmqYk5ghURpvNAIUjPLaE",
            "coor": {
                "lat": 26.05362869,
                "lng": 43.55854869
            },
            "fsId": "576efa78cd10b950f1798f9c"
        },
        {
            "name": "Baskin Robbins",
            "gmapId": "ChIJkeQ3sYc5ghURLvEgUfh_OWE",
            "coor": {
                "lat": 26.05789972,
                "lng": 43.55866805
            },
            "fsId": "57874220498e1b5828068449"
        },
        {
            "name": "Othaim Markets",
            "gmapId": "ChIJR_cec4w5ghURsdrjiFo-5OE",
            "coor": {
                "lat": 26.05101781,
                "lng": 43.55564252
            },
            "fsId": "4eb9685d991165b7640c93cf"
        },
    ],
    mapStyles: [{
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "color": "#e0efef"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                    "lightness": 100
                },
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#e6d7c5"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "lightness": 700
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#7fc1d3"
            }]
        }
    ]
}

export default Data