import './App.css';
import {useState} from "react";

function App() {
    const [type, setType] = useState()
    const [price, setPrice] = useState(null)
    const [street, setStreet] = useState()
    const [postal, setPostal] = useState()
    const [city, setCity] = useState()
    const [message, setMessage] = useState()

    const checkPrice = () => {
        if(type === "pocztowka") setPrice("1zł")
        else if(type === "list") setPrice("1,5zł")
        else if(type === "paczka") setPrice("10zł")
        setMessage("")
    }

    const handleSubmit = () => {
        if (postal.length !== 5) {
            setMessage("Kod pocztowy powinien się składać z 5 cyfr.")
            return
        }

        for (let i = 0; i < postal.length; i++) {
            const znak = postal[i];

            if (znak < '0' || znak > '9') {
                setMessage("Kod pocztowy powinien się składać z samych cyfr")
                return
            }
        }
    }

    return (
        <div className="wrap">
            <div className="card">
                <h2 className="title">Nadaj Przesyłkę, PESEL: 00000000000</h2>

                <div className="left">
                    <fieldset className="group">
                        <legend>Rodzaj przesyłki</legend>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                value="pocztowka"
                                defaultChecked="true"
                                checked={type === "pocztowka"}
                                onChange={(e) => setType(e.target.value)}
                            />{" "}
                            Pocztówka
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                value="list"
                                checked={type === "list"}
                                onChange={(e) => setType(e.target.value)}
                            />{" "}
                            List
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                value="paczka"
                                checked={type === "paczka"}
                                onChange={(e) => setType(e.target.value)}
                            />{" "}
                            Paczka
                        </label>
                    </fieldset>
                    <button className="Price" onClick={checkPrice}>Sprawdź cenę</button>
                    <img className="koperta" src="koperta.jpg"/>
                    <div className="priceBox">
                        <div className="price">
                            Cena: {price !== null ? price : "-"}
                        </div>
                    </div>
                </div>

                <div className="right">

                    <legend>Dane adresowe</legend>
                    </div>
                    <div className="field">
                        <label>Ulica z numerem</label>
                        <input value={street} onChange={(e) => setStreet(e.target.value)} />
                    </div>

                    <div className="field">
                        <label>Kod pocztowy</label>
                        <input value={postal} onChange={(e) => setPostal(e.target.value)} />
                    </div>

                    <div className="field">
                        <label>Miasto</label>
                        <input value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>

                    <button className="btn confirm" onClick={handleSubmit}>Zatwierdź</button>

                    {message && <div className="message">{message}</div>}

            </div>
        </div>
    );
}

export default App;
