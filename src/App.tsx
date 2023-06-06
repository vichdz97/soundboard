import Button from "./components/Button"

function App() {
    const createButtons = () => {
        const buttons = [];
        for (let i = 0; i <= 10; i++) {
            buttons.push(
                <div className="col-6 col-md-3 col-lg-2"><Button onClick={() => {}}>B{i}</Button></div>
            );            
        }
        return buttons;
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="heading text-center">
                <h1>Soundboard</h1>
                <p>Click a <button className="btn btn-danger">button</button> and see what sound it makes! <br /> Have fun!</p>
            </div>
            <div className="row text-center">
                { createButtons() }
            </div>
        </div>

    )
}

export default App
