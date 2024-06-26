// CHANGE THE VARIABLES BELOW ACCORDING TO YOUR NEEDS:

// YOUR HOMEASSISTANT ADDRESS.
// EXAMPLE: var hassaddress = "http://192.168.1.10:8123"
var hassaddress = "";

// YOUR HOMEASSISTANT LONG LIVED TOKEN
// GET IT FROM HA PROFILE
var hasspass = "";

// YOUR HOME FLOORPLAN FILE PATH.
// EXAMPLE: var floorplan1stFloor = "./images/floorplan.png"
// EXAMPLE: var floorplan1stFloor = "./images/blank.png"
var floorplan1stFloor = "./images/floorplan.png"; // YOUR FLOORPLAN IMAGE PATH FOR 1ST FLOOR
var floorplan2ndFloor = "./images/blank.png"; // YOUR FLOORPLAN IMAGE PATH FOR 2ND FLOOR
// shift floorplan image right(positive) or left(negative) 
var floorPlanShift = 0;

// SHOW (true) / HIDE (false) MENUS
// SELECT A MAXIMUM OF 3 ITEMS (IF YOU USE ONLY ONE FLOOR) OR 2 ITEMS (IF YOU USE 2 FLOORS) TO FIT IN THE MENU
var showSwitchesMenu = true;
var showLightsMenu = true;
var showAutomationsMenu = true;
var showPlayersMenu = true;

// button size for switches/lights/automations
var buttonSize = 180;

// IF YOUR KINDLE DOES NOT DISPLAY YOUR CORRECT TIME,
// CHANGE THE TIMEOFFSET FROM 0 TO THE DIFFERENCE BETWEEN YOUR NEEDS
// (EITHER NEGATIVES OR POSITIVES VALUES ARE ACCEPTED)
var timeoffset = -3;

// SHOW TIME IN 24H OR 12H PATTERN
// true = 10:34 PM
// false = 22:34
var showAmPmTime = false;

// SHOW (true) / HIDE (false) WEATHER ICON ON EXTENDED FORECAST
var showWeatherIcon = true;
// set to true to make vertical stack for extended weather forecast
var verticalExtendeForecast = false;

// SHOW (true) / HIDE (false) a zig zag background pattern
var showBackgroundPattern = true;

var localization = {
    // uncomment and customize the menu titles
    //    "menu1.title": "Layout",
    //    "menu2.title": "2. Stock",
    //    "menu3.title": "Schalter",
    //    "menu4.title": "Lampen",
    //    "menu5.title": "Automationen",
    //    "menu6.title": "Players",
}

// BELOW YOU NEED TO ADD YOUR DEVICES IN THE FOLLOWING FORMAT:
// ['domain.device_id', X position, Y position, 'type'],
//
// REAL EXAMPLE:
// ["binary_sensor.office_window", 620, 40, "window"],
//
// All lines should end with a comma "," EXCEPT FOR THE LAST ONE.
// IF you have only one item, then it does not have to end with a comma.
//
// Types will define the icons and can be specified for the following DOMAINS:
// SWITCH, BINARY_SENSOR, SENSOR, MEDIA_PLAYER and WEATHER
// 
// CURRENTLY SUPPORTED ICONS/FUNCTION PER DOMAIN:
//
// SWITCH: washingmachine, microwave, smartplug, dishwasher, heater, fridge, waterfountain, fan, plug
// BINARY_SENSOR: window, door
// SENSOR: battery, temperature, humidity, friendly (show attr friendly_name above sensor state), blank (only show the sensor state)
// MEDIA_PLAYER: tv, alexa, googleassistant
// WEATHER: extended (show extended forecast) or none
//
// IF A TYPE IS NOT INFORMED, THEN THE STANDARD ICON FOR THE CATEGORY WILL BE USED
//
// YOU DO NOT NEED/HAVE TO SPECIFY A TYPE FOR DOMAIN=LIGHT, SO IT CAN BE OMITTED.
//
// FULL EXAMPLE:
// var devices1stFloor = [
//   ["switch.switch_xpto_1", 165, 50], // NO TYPE DEFINED
//   ["binary_sensor.front_door", 125, 50, "door"],
//   ["sensor.room_temperature", 125, 430, "temperature"],
//   ["sensor.pc_plug_power", 205, 260, "blank"],
//   ["media_player.hall_tv", 165, 120, "tv"],
//   ["media_player.echo_dot_3", 215, 510, "alexa"],
//   ["weather.forecast_home", 150, 50, "extended"], // EXTENDED FORECAST
//   ["weather.forecast_home", 150, 50] // TODAY FORECAST
// ];


// DEVICES FOR 1ST FLOOR
var devices1stFloor = [
    // LIVING

    // ROOM

    // SUITE

    // KITCHEN

    // outside
    ["weather.home", 120, 15, "extended"], // EXTENDED FORECAST
    ["weather.home", 750, 380],

    //tracker (id, x, y, zone)
    ["device_tracker.dog", 740, 640, "home"], // if dog is home
    ["device_tracker.dog", 650, 200, "not_home"], // if dog is away
    ["device_tracker.dog", 650, 300], // fallback, if he is in another zone
];


// DEVICES FOR THE SECOND FLOOR
// LEAVE EMPTY IF YOU ONLY HAVE 1 FLOOR
// EMPTY EXAMPLE: var devices2ndFloor = [];
var devices2ndFloor = [
    // LOFT

    // POOL

];