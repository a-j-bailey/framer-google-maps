import { addPropertyControls, ControlType } from "framer"

export default function MapComponent(props) {
    const style = {
        display: "inline-block",
        backgroundColor: "orange",
        padding: 8,
    }

    return <div style={style}>{props.text}</div>
}

Button.defaultProps = {
    text: "My Title",
}

addPropertyControls(Button, {
    text: {
        title: "Text",
        type: ControlType.String,
    },
})