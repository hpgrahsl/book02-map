(function (window) {
  window["env"] = window["env"] || {};
  window["env"]["mapTitle"] = 'POI Map Visualizer (RHDH Book Demo App)';
  window["env"]["mapAttribution"] =
    'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery &copy; <a href="http://mapbox.com">Mapbox</a>';
  window["env"]["mapUrl"] =
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}";
  window["env"]["mapToken"] =
    "pk.eyJ1IjoiZ3JhaGFtZHVtcGxldG9uIiwiYSI6ImNpemR6cnFhbTF0YWszMnA5eTJ0dXY1ZW8ifQ.-91_VlsyyskWAWF54GYFMg";
  // window["env"]["gatewayApiUrl"] = "http://book02-poi-map-app-book02";
  window["env"]["gatewayApiUrl"] = "http://localhost:8080";
  // window["env"]["websocketEndpoint"] =
  //   "ws://book02-poi-map-app-book02/ws-server-endpoint";
  window["env"]["websocketEndpoint"] =
     "ws://localhost:8080/ws-server-endpoint";
})(this);
