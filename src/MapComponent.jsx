/**
 * This is a backup of the map component that lives on Framer, here:
 * https://framer.com/m/Google-Maps-NnO8.js
 * 
 * @author: Adam Bailey (adam@magicmirrorcreative.com)
 */

import {
    APIProvider,
    Map,
    Marker,
    AdvancedMarker,
    Pin,
} from "@vis.gl/react-google-maps"
import { addPropertyControls, ControlType } from "framer"

const styles = {
    standard: [],
    retro: [
        {
            elementType: "geometry",
            stylers: [
                {
                    color: "#ebe3cd",
                },
            ],
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#523735",
                },
            ],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#f5f1e6",
                },
            ],
        },
        {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#c9b2a6",
                },
            ],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#dcd2be",
                },
            ],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#ae9e90",
                },
            ],
        },
        {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [
                {
                    color: "#dfd2ae",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#dfd2ae",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#93817c",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#a5b076",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#447530",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                    color: "#f5f1e6",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                {
                    color: "#fdfcf8",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {
                    color: "#f8c967",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#e9bc62",
                },
            ],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [
                {
                    color: "#e98d58",
                },
            ],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#db8555",
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#806b63",
                },
            ],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
                {
                    color: "#dfd2ae",
                },
            ],
        },
        {
            featureType: "transit.line",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#8f7d77",
                },
            ],
        },
        {
            featureType: "transit.line",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#ebe3cd",
                },
            ],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
                {
                    color: "#dfd2ae",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#b9d3c2",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#92998d",
                },
            ],
        },
    ],
    aubergine: [
        {
            elementType: "geometry",
            stylers: [
                {
                    color: "#1d2c4d",
                },
            ],
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#8ec3b9",
                },
            ],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1a3646",
                },
            ],
        },
        {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#4b6878",
                },
            ],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#64779e",
                },
            ],
        },
        {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#4b6878",
                },
            ],
        },
        {
            featureType: "landscape.man_made",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#334e87",
                },
            ],
        },
        {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [
                {
                    color: "#023e58",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#283d6a",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#6f9ba5",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1d2c4d",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#023e58",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#3C7680",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                    color: "#304a7d",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#98a5be",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1d2c4d",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {
                    color: "#2c6675",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#255763",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#b0d5ce",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#023e58",
                },
            ],
        },
        {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#98a5be",
                },
            ],
        },
        {
            featureType: "transit",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1d2c4d",
                },
            ],
        },
        {
            featureType: "transit.line",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#283d6a",
                },
            ],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
                {
                    color: "#3a4762",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#0e1626",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#4e6d70",
                },
            ],
        },
    ],
    silver: [
        {
            elementType: "geometry",
            stylers: [
                {
                    color: "#f5f5f5",
                },
            ],
        },
        {
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#616161",
                },
            ],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#f5f5f5",
                },
            ],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#bdbdbd",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#eeeeee",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
                {
                    color: "#e5e5e5",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#9e9e9e",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                    color: "#ffffff",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {
                    color: "#dadada",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#616161",
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#9e9e9e",
                },
            ],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
                {
                    color: "#e5e5e5",
                },
            ],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
                {
                    color: "#eeeeee",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#c9c9c9",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#9e9e9e",
                },
            ],
        },
    ],
    dark: [
        {
            elementType: "geometry",
            stylers: [
                {
                    color: "#212121",
                },
            ],
        },
        {
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#212121",
                },
            ],
        },
        {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#9e9e9e",
                },
            ],
        },
        {
            featureType: "administrative.land_parcel",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#bdbdbd",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
                {
                    color: "#181818",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#616161",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1b1b1b",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#2c2c2c",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#8a8a8a",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                {
                    color: "#373737",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {
                    color: "#3c3c3c",
                },
            ],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [
                {
                    color: "#4e4e4e",
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#616161",
                },
            ],
        },
        {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#3d3d3d",
                },
            ],
        },
    ],
    night: [
        {
            elementType: "geometry",
            stylers: [
                {
                    color: "#242f3e",
                },
            ],
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#746855",
                },
            ],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#242f3e",
                },
            ],
        },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#d59563",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#d59563",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
                {
                    color: "#263c3f",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#6b9a76",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                    color: "#38414e",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#212a37",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#9ca5b3",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {
                    color: "#746855",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#1f2835",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#f3d19c",
                },
            ],
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
                {
                    color: "#2f3948",
                },
            ],
        },
        {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#d59563",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#17263c",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#515c6d",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#17263c",
                },
            ],
        },
    ],
}

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/components/auto-sizing
 *
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */
export default function Google_Maps(props) {
    return (
        <div
            style={{
                width: 400,
                height: 300,
                ...props.style,
            }}
        >
            {!(props.api_key.length > 0) ? (
                <p>Please enter a valid API Key</p>
            ) : (
                <APIProvider apiKey={props.api_key}>
                    <Map
                        defaultZoom={props.defaultZoom}
                        zoom={props.defaultZoom}
                        defaultCenter={{
                            lat: props.defaultCenter.lat,
                            lng: props.defaultCenter.lng,
                        }}
                        center={{
                            lat: props.defaultCenter.lat,
                            lng: props.defaultCenter.lng,
                        }}
                        gestureHandling={"greedy"}
                        disableDefaultUI={props.disableUI}
                        styles={styles[props.mapStyle]}
                        mapId={props.map_id}
                    >
                        {props.markers.map((marker) => {
                            if (marker.advanced) {
                                return (
                                    <AdvancedMarker
                                        clickable={true}
                                        position={{
                                            lat: marker.position.lat,
                                            lng: marker.position.lng,
                                        }}
                                        onClick={() => {
                                            window.open(marker.link)
                                        }}
                                        title={marker.markerTitle}
                                    >
                                        <Pin
                                            background={marker.backgroundColor}
                                            borderColor={marker.borderColor}
                                            glyph={
                                                marker.glyph
                                                    ? marker.glyph
                                                    : undefined
                                            }
                                            glyphColor={marker.glyphColor}
                                            scale={marker.scale}
                                        />
                                    </AdvancedMarker>
                                )
                            } else {
                                return (
                                    <Marker
                                        clickable={true}
                                        position={{
                                            lat: marker.position.lat,
                                            lng: marker.position.lng,
                                        }}
                                        onClick={() => {
                                            window.open(marker.link)
                                        }}
                                        title={marker.markerTitle}
                                    />
                                )
                            }
                        })}
                    </Map>
                </APIProvider>
            )}
        </div>
    )
}

const latLongControl = {
    lat: {
        type: ControlType.Number,
        title: "Lat",
        min: -90,
        max: 90,
        step: 0.0001,
        default: 0,
    },
    lng: {
        type: ControlType.Number,
        title: "Long",
        min: -180,
        max: 180,
        step: 0.0001,
        default: 0,
    },
}

addPropertyControls(Google_Maps, {
    api_key: {
        type: ControlType.String,
        title: "API Key",
    },
    map_id: {
        type: ControlType.String,
        title: "Map ID",
        description:
            "Map ID is required to use Cloud Styling or Advanced Markers. [Read More](https://developers.google.com/maps/documentation/javascript)",
    },
    defaultCenter: {
        type: ControlType.Object,
        title: "Center",
        controls: latLongControl,
    },
    defaultZoom: {
        type: ControlType.Number,
        title: "Zoom",
        defaultValue: 3,
    },
    disableUI: {
        type: ControlType.Boolean,
        title: "Disable UI",
        defaultValue: true,
    },
    mapStyle: {
        type: ControlType.Enum,
        title: "Map Style",
        defaultValue: "standard",
        displaySegmentedControl: false,
        options: Object.keys(styles),
        optionTitles: Object.keys(styles),
    },
    markers: {
        title: "Markers",
        type: ControlType.Array,
        control: {
            title: "Marker",
            type: ControlType.Object,
            controls: {
                advanced: {
                    title: "Advanced",
                    type: ControlType.Boolean,
                    defaultValue: false,
                    description: "A Map ID is required for Advanced Markers",
                },
                markerTitle: {
                    type: ControlType.String,
                    title: "Title",
                },
                position: {
                    type: ControlType.Object,
                    title: "Position",
                    controls: latLongControl,
                },
                link: {
                    type: ControlType.Link,
                    title: "On Click",
                },
                // ADVANCED Props:
                backgroundColor: {
                    type: ControlType.Color,
                    title: "Background",
                    hidden(props) {
                        return !props.advanced
                    },
                },
                borderColor: {
                    type: ControlType.Color,
                    title: "Border",
                    hidden(props) {
                        return !props.advanced
                    },
                },
                glyph: {
                    type: ControlType.String,
                    title: "Glyph",
                    hidden(props) {
                        return !props.advanced
                    },
                },
                glyphColor: {
                    type: ControlType.Color,
                    title: "Glyph Color",
                    hidden(props) {
                        return !props.advanced
                    },
                },
                scale: {
                    type: ControlType.Number,
                    title: "Scale",
                    defaultValue: 1,
                    step: 0.01,
                    hidden(props) {
                        return !props.advanced
                    },
                },
            },
        },
    },
})
