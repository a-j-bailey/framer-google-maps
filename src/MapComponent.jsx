import { addPropertyControls, ControlType } from "framer"

export default function MapComponent(props) {
    const style = {
        display: "inline-block",
        backgroundColor: "orange",
        padding: 8,
    }

    return <div style={style}>{props.text}</div>
}

MapComponent.defaultProps = {
    text: "My Title",
}

addPropertyControls(MapComponent, {
    text: {
        title: "Text",
        type: ControlType.String,
    },
})