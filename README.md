# Framer Google Maps

This plugin allows you to easily integrate Google Maps into your Framer projects, providing a customizable and interactive map component.

Additionally, a self-contained Map Component can be found [here](https://framer.com/m/Google-Maps-NnO8.js@EZqF6KF5YlINVnj7qjlP) for inserting into your project instead of using the plugin.

Visit the Website: https://googlemaps.framer.website/

## Features

- Embed Google Maps in your Framer projects
- Customize map appearance and behavior
- Customize Pin appearance
- Display multiple locations simultaneously

## Set Up

1. Add the Plugin to your Framer project.
2. Get a Google API Key

## Parameters

You can customize the map's appearance and behavior using Framer's controls and properties:

### Map Properties

- **API Key**
    - **Type**: `String`
    - **Description**: Your Google Maps API key for authentication and access to Google Maps services.

- **Map ID**
    - **Type**: `String`
    - **Description**: Required for using Cloud Styling or Advanced Markers. Refer to Google Maps documentation for more details.

- **Default Center**
    - **Type**: `Lat / Long`
    - **Description**: Sets the initial center position of the map using latitude and longitude coordinates.

- **Default Zoom**
    - **Type**: `Number`
    - **Default Value**: 3
    - **Description**: Sets the initial zoom level of the map.

- **Disable UI**
    - **Type**: `Boolean`
    - **Default Value**: `true`
    - **Description**: When set to true, disables the default Google Maps user interface elements.

- **Map Style**
    - **Type**: `['standard', 'retro', 'aubergine', 'silver', 'dark', 'night']`
    - **Default Value**: `standard`
    - **Description**: Allows selection of predefined map styles from available options.

- **Markers**
    - **Type**: `Array`
    - **Description**: An array of Marker objects to be placed on the map.

### Marker Properties

- **Advanced**:
  - **Type**: `Boolean`
  - **Default Value**: `false`
  - **Description**: Enables advanced marker features (requires a Map ID).

- **Marker Title**:
  - **Type**: `String`
  - **Description**: Title or label for the marker.

- **Position**:
  - **Type**: `Lat / Long`
  - **Description**: Latitude and longitude coordinates for the marker's position.

- **Link**:
  - **Type**: `Link`
  - **Description**: Action to perform when the marker is clicked.

### Advanced Marker Properties

*These properties are only visible when "Advanced" is set to true:*

- **Background Color**:
  - **Type**: `Color`
  - **Description**: Sets the background color of the advanced marker.

- **Border Color**:
  - **Type**: `Color`
  - Description: Sets the border color of the advanced marker.

- **Glyph**:
  - **Type**: `String`
  - **Description**: A symbol or icon to display within the marker.

- **Glyph Color**:
  - **Type**: `Color`
  - **Description**: Sets the color of the glyph.

- **Scale**:
  - **Type**: `Number`
  - **Default Value**: `1`
  - **Step**: `0.01`
  - **Description**: Adjusts the size of the advanced marker.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
