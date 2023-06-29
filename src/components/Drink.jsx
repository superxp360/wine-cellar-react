import { useState } from "react";

export default function Drink() {
    const [drinkType, setDrinkType] = useState("Red");
    const [drinklist, setDrinkList] = useState();

    const getDrink = async(drinkType) => {
        const res = await fetch(`https://api.sampleapis.com/wines/${drinkType}`);
        const data = await res.json();
        setDrinkList(data);
    }

    return(
        <section>
            <nav>
                <button onClick={() => setDrinkType('reds')}>Red</button>
                <button onClick={() => setDrinkType('whites')}>White</button>
                <button onClick={() => setDrinkType('sparkling')}>Sparkling</button>
                <button onClick={() => setDrinkType('rose')}>Rose</button>
                <button onClick={() => setDrinkType('dessert')}>Dessert</button>
                <button onClick={() => setDrinkType('port')}>Port</button>
            </nav>

            <div>
                <button onClick={() => getDrink(drinkType)}>Get Drink</button>
            </div>
            
            <h2>{drinkType}</h2>
            <div className="drink-list">
                {
                    !drinklist
                        ? <p>No list</p>
                        : drinklist.map( (element,index) => {
                            return(
                                <div key={index}>
                                    <img src={element.image} alt="" />
                                    <h3>{element.wine}</h3>
                                    <p>Location: {element.location}</p>
                                    <p>Rating: {element.rating.average}</p>
                                    <p>Review: {element.rating.reviews}</p>
                                </div>);   
                        })
                }

            </div>     
        </section>
    )
}

