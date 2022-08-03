import Head from "next/head"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Image from "next/image"
import { useState } from "react"
export default function Packing() {
    const [packing, setpacking] = useState({ //entire data stored in the milk object
        date: "",
        batch: "none",
        totalLitres: "",
        oneLiPack: "",
        halfLiPack: "",
        MilkExcess: ""
    })
    const changeHandler = (e) => {
        setpacking({ ...packing, [e.target.name]: e.target.value })
    }
    const senddata = () => {
        //API call happens here
    }
    console.log(packing)
    return (
        <div className='body'>
            <Head>
                <title>Cow-Society | Packing</title>
            </Head>
            <Header /> {/* header for the dashboard*/}
            <div className="container">
                <Menu active="6" />
                <div className="form-body">
                    <h1>packing & transporting</h1>
                    <form>
                        <menu>
                            <div>
                                <label htmlFor="date">date</label>
                                <input type="date" id="date"
                                    name="date"
                                    onChange={changeHandler}
                                    value={packing.date}
                                />
                            </div>
                            <div>
                                <label htmlFor="batch">batch</label>
                                <select id="batch"
                                    name="batch"
                                    onChange={changeHandler}
                                    value={packing.batch}
                                >
                                    <option value="none">none</option>
                                    <option value="morning">morning</option>
                                    <option value="evening">evening</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="litreall">no of litre collected</label>
                                <input type="text" id="litreall"
                                    name="totalLitres"
                                    onChange={changeHandler}
                                    value={packing.totalLitres}
                                />
                            </div>
                            <div>
                                <label htmlFor="litre1">no of 1 litre collected</label>
                                <input type="text" id="litre1"
                                    name="oneLiPack"
                                    onChange={changeHandler}
                                    value={packing.oneLiPack}
                                />
                            </div>
                            <div>
                                <label htmlFor="litre1-2">no of 1/2 litre collected</label>
                                <input type="text" id="litre1-2"
                                    name="halfLiPack"
                                    onChange={changeHandler}
                                    value={packing.halfLiPack}
                                />
                            </div>
                            <div>
                                <label htmlFor="excess">no of litre of milk excess(in hand)</label>
                                <input type="text" id="excess"
                                    name="MilkExcess"
                                    onChange={changeHandler}
                                    value={packing.MilkExcess}
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