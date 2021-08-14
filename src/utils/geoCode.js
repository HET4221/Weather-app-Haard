const request = require('request')

const geoCode = (address, callback)=>{
    const url1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address  +".json?access_token=pk.eyJ1IjoiaGFhcmQ3IiwiYSI6ImNrcWx0eXhxbzEycjEycHBxcXF2bmY2b3EifQ.xdhlo3gow86IKUs30dXMYw&limit=1"
    request({url: url1, json: true}, (error,response)=>{
        if(error){
            //console.log("problem in accessing GeoCode");
            callback("problem in accessing GeoCode", undefined)
        }else{
            //lat and lon
            
            callback(undefined,{
                 latitude:  response.body.features[0].center[0],
                 longitude:  response.body.features[0].center[1],
                 location: "Place: " + response.body.features[0].place_name
            })
            
            
        }
        
    })
    
    
}

module.exports = geoCode;