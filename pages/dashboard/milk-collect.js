import Head from "next/head"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Image from "next/image"
import { useState } from "react"

export default function MilkCollection() {
    const [milk, setmilk] = useState({ //entire data stored in the milk object
        date: "",
        batch: "none",
        id: "",
        name: "",
        litres: "",
        fat: "",
        snf: "",
        ph: "",
        temp: "",
        water: "",
        ec: ""
    })
    const changeHandler = (e) => {
        setmilk({ ...milk, [e.target.name]: e.target.value })
    }
    const senddata = () => {
        //API call happens here
    }
    console.log(milk)
    return (
        <div className='body'>
            <Head>
                <title>Cow-Society | Milk Collection</title>
            </Head>
            <Header /> {/* header for the dashboard*/}
            <div className="container">
                <Menu active="4" />
                <div className="form-body">
                    <h1>milk collection</h1>
                    <form>
                        <menu>
                            <div>
                                <label htmlFor="date">date</label>
                                <input type="date"
                                    id="date"
                                    name="date"
                                    onChange={changeHandler}
                                    value={milk.date}
                                />
                            </div>
                            <div>
                                <label htmlFor="bacth">batch</label>
                                <select id="batch"
                                    name="batch"
                                    onChange={changeHandler}
                                    value={milk.batch}
                                >
                                    <option value="none" selected>none</option>
                                    <option value="morning">morning</option>
                                    <option value="evening">evening</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="id">farmer id</label>
                                <input type="text" id="id" name="id"
                                    onChange={changeHandler}
                                    value={milk.id} />
                            </div>
                            <div>
                                <label htmlFor="name">farmer name</label>
                                <input type="text" id="name"
                                    name="name"
                                    onChange={changeHandler}
                                    value={milk.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="litre">litres collected</label>
                                <input type="text" id="litre"
                                    name="litres"
                                    onChange={changeHandler}
                                    value={milk.litres}
                                />
                            </div>
                            <div>
                                <label htmlFor="fat">fat</label>
                                <input type="text" id="fat"
                                    name="fat"
                                    onChange={changeHandler}
                                    value={milk.fat}
                                />
                            </div>
                            <div>
                                <label htmlFor="snf">snf</label>
                                <input type="text" id="snf"
                                    name="snf"
                                    onChange={changeHandler}
                                    value={milk.snf}
                                />
                            </div>
                            <div>
                                <label htmlFor="phvalue">phvalue</label>
                                <input type="text" id="phvalue"
                                    name="ph"
                                    onChange={changeHandler}
                                    value={milk.ph}
                                />
                            </div>
                            <div>
                                <label htmlFor="temp">temperature</label>
                                <input type="text" id="temp"
                                    name="temp"
                                    onChange={changeHandler}
                                    value={milk.temp}
                                />
                            </div>
                            <div>
                                <label htmlFor="water">water %</label>
                                <input type="text" id="water"
                                    name="water"
                                    onChange={changeHandler}
                                    value={milk.water}
                                />
                            </div>
                            <div>
                                <label htmlFor="ec">ec value</label>
                                <input type="text" id="ec"
                                    name="ec"
                                    onChange={changeHandler}
                                    value={milk.ec}
                                />
                            </div>
                        </menu>
                        <footer>
                            <button onClick={senddata}>save</button>
                            <button>cancle</button>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    )
}