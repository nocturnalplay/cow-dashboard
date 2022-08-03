import Head from "next/head"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Image from "next/image"
import { useState } from "react"

export default function ExcessMilk() {
    const [packing, setpacking] = useState({ //entire data stored in the milk object
        date: "",
        batch: "none",
        MilkExcess: "",
        palkova: "",
        butter: ""
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
                <title>Cow-Society | Excess Milk</title>
            </Head>
            <Header /> {/* header for the dashboard*/}
            <div className="container">
                <Menu active="7" />
                <div className="form-body">
                    <h1>excess milk management</h1>
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
                                    value={packing.batch}>
                                    <option value="none">none</option>
                                    <option value="morning">morning</option>
                                    <option value="evening">evening</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="litreall">no of litre milk excess</label>
                                <input type="text" id="litreall"
                                    name="MilkExcess"
                                    onChange={changeHandler}
                                    value={packing.MilkExcess}
                                />
                            </div>
                            <div>
                                <label htmlFor="litre1">no of litre consumed for palkova</label>
                                <input type="text" id="litre1"
                                    name="palkova"
                                    onChange={changeHandler}
                                    value={packing.palkova}
                                />
                            </div>
                            <div>
                                <label htmlFor="litre1-2">no of litre consumed for butter</label>
                                <input type="text" id="litre1-2"
                                    name="butter"
                                    onChange={changeHandler}
                                    value={packing.butter}
                                />
                            </div>
                        </menu>
                        <footer>
                            <button>save</button>
                            <button>cancle</button>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    )
}