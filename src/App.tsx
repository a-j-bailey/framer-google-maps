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
    height: 300,
})

export function App() {
    function DraggableThumbnail({ style }: { style: any }) {
        return <Draggable data={{
            type: 'componentInstance',
            url: 'https://framer.com/m/Google-Maps-NnO8.js',
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
                }}>{style.title}</p>
            </div>
        </Draggable>
    }

    return (
        <main>
            <p>
                Welcome to the Google Maps Plugin!<br />
                Choose a default map style to begin.
            </p>
            <hr />
            <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', gap: 8 }}>
                {mapStyles.map((style) => {
                    return <DraggableThumbnail style={style} />
                })}
            </div>
        </main>
    )
}