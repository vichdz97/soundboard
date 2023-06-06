import Button from "./components/Button"

function App() {
    const sounds = [
        { image: "https://img.icons8.com/external-stickers-smashing-stocks/70/external-Air-Horn-football-stickers-smashing-stocks.png", alt: "air-horn", audio: "/sounds/airhorn.mp3"},
        { image: "https://img.icons8.com/color/48/explosion.png", alt: "explosion", audio: "/sounds/boom.mp3"},
        { image: "https://img.icons8.com/emoji/48/star-struck.png", alt: "star-struck", audio: "/sounds/wow.mp3"},
        { image: "https://img.icons8.com/external-happy-man-bomsymbols-/91/external-fart-happy-man-human-resource-and-life-style-color-set-2-happy-man-bomsymbols-.png", alt: "fart-man", audio: "/sounds/fart.mp3"},
        { image: "https://img.icons8.com/color/48/error--v1.png", alt: "error", audio: "/sounds/error.mp3"},
        { image: "https://img.icons8.com/dusk/64/000000/ice-pop-pink.png", alt: "ice-pop", audio: "/sounds/gulp.mp3"},
        { image: "https://img.icons8.com/color/48/wink--v1.png", alt: "wink", audio: "/sounds/ding.mp3"},
        { image: "https://img.icons8.com/color/48/among-us.png", alt: "among-us", audio: "/sounds/sus.mp3"},
        { image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-baseball-bat-baseball-flaticons-lineal-color-flat-icons-4.png", alt: "baseball-bat", audio: "/sounds/bonk.mp3"},
        { image: "https://img.icons8.com/external-nawicon-flat-nawicon/64/external-broken-bone-medical-nawicon-flat-nawicon.png", alt: "broken-bone", audio: "/sounds/bone-crack.mp3"},
        { image: "https://img.icons8.com/plasticine/100/violin.png", alt: "violin", audio: "/sounds/violin.mp3"},
        { image: "/icons/wig.png", alt: "pink-wig", audio: "/sounds/roman-holiday.mp3"},
    ];

    const createButtons = () => {
        const buttons = [];
        for (let i = 0; i < sounds.length; i++) {
            buttons.push(
                <div className="col-6 col-md-3 col-lg-2">
                    <Button onClick={() => playSound(sounds[i].audio)}>
                        { <img width="50" height="50" src={sounds[i].image} alt={sounds[i].alt} /> }
                    </Button>
                </div>
            );            
        }
        return buttons;
    }

    const playSound = (sound: string) => {
        let audio = new Audio(sound);
        audio.play();
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="heading text-center">
                <h1>Soundboard</h1>
                <p>Click a <button className="btn btn-light shadow p-1 m-1" onClick={() => playSound("/sounds/click.mp3")}>button</button> and see what sound it makes! <br /> Have fun :{")"}</p>
            </div>
            <div className="row text-center">
                { createButtons() }
            </div>
        </div>

    )
}

export default App
