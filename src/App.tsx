import { framer, Draggable } from "framer-plugin"
import "./App.css"

const mapStyles = [
    {
        title: 'Retro',
        thumbnailUrl: 'https://developers.google.com/static/maps/documentation/images/retro.png'
    },
    {
        title: 'Aubergine',
        thumbnailUrl: 'https://developers.google.com/static/maps/documentation/images/aubergine.png'
    },
    {
        title: 'Silver',
        thumbnailUrl: 'https://developers.google.com/maps/documentation/images/silver.png'
    },
    {
        title: 'Dark',
        thumbnailUrl: 'https://developers.google.com/static/maps/documentation/images/dark.png'
    },
    {
        title: 'Standard',
        thumbnailUrl: 'https://developers.google.com/static/maps/documentation/images/standard.png'
    },
    {
        title: 'Night',
        thumbnailUrl: 'https://developers.google.com/static/maps/documentation/images/night.png'
    },
]

framer.showUI({
    position: "top right",
    width: 360,
    height: 345,
})

export function App() {
    function DraggableThumbnail({ style }: { style: any }) {
        return <Draggable data={{
            type: 'componentInstance',
            url: 'https://framer.com/m/Google-Maps-NnO8.js@OHCy443GYQtbIR7Lw2EU',
            attributes: {
                controls: {
                    mapStyle: style.title.toLowerCase()
                }
            }
        }}>
            <div style={{
                minWidth: 100,
                minHeight: 100,
                borderRadius: '8px',
                backgroundColor: '#212121',
                display: "block",
                backgroundImage: `url(${style.thumbnailUrl})`,
                position: "relative",
                overflow: 'hidden',
                cursor: 'grab',
            }}>
                <p style={{
                    position: "absolute",
                    bottom: 0,
                    padding: 4,
                    backgroundColor: '#212121',
                    width: '100%',
                    fontWeight: 'bold',
                }}>{style.title}</p>
            </div>
        </Draggable>
    }

    return (
        <main>
            <p>
                Welcome to the Simple Maps Plugin! <br />
                Choose a default map style to begin:
            </p>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', gap: 8 }}>
                {mapStyles.map((style) => {
                    return <DraggableThumbnail style={style} />
                })}
            </div>
            <hr/>
            <p>
                More information and support for plugin can be found <a href="https://github.com/a-j-bailey/framer-google-maps" target="_blank">here</a>.
            </p>
        </main>
    )
}