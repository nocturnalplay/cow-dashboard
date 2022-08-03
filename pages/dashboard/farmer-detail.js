import Head from "next/head"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Image from "next/image"
import { useState } from "react"

export default function FarmerDetail() {
    const [farmer, setfarmer] = useState({
        name: "",
        number: "",
        address: "",
        animalCount: "",
        animalType: "none",
        jercy: "0",
        sindhu: "0",
        country: "0",
    })
    const changeHandler = (e) => {

        setfarmer({ ...farmer, [e.target.name]: e.target.value })

    }
    console.log(farmer)
    return (
        <div className='body'>
            <Head>
                <title>Cow-Society | Farmer Details</title>
            </Head>
            <Header /> {/* header for the dashboard*/}
            <div className="container">
                <Menu active="3" />
                <div className="form-body">
                    <h1>farmer details</h1>
                    <form>
                        <menu>
                            <div>
                                <label htmlFor="name">farmer name</label>
                                <input type="text" id="name" name="name" onChange={changeHandler} value={farmer.name} />
                            </div>
                            <div>
                                <label htmlFor="mobile">mobile no</label>
                                <input type="number" id="mobile" name="number" onChange={changeHandler} value={farmer.number} />
                            </div>
                            <div style={{ flex: "100%" }}>
                                <label htmlFor="adddress">address</label>
                                <textarea type="text" id="address" rows={5} name="address" onChange={changeHandler} value={farmer.address}></textarea>
                            </div>
                            <div>
                                <label htmlFor="count">animal owned</label>
                                <input type="number" id="count" name="animalCount" onChange={changeHandler} value={farmer.animalCount} />
                            </div>
                            <div>
                                <label htmlFor="animal">types of animal</label>
                                <select value={farmer.animalType} name="animalType" onChange={changeHandler} >
                                    <option value="none">none</option>
                                    <option value="cow">cow</option>
                                    <option value="buffalo">buffalo</option>
                                </select>
                            </div>
                            <div style={{ flex: "100%" }}>
                                <label htmlFor="bread">bread</label>
                                <article>
                                    <div>
                                        <label htmlFor="bread">jercy</label>
                                        <input type="number" id="animal" name="jercy" onChange={changeHandler} value={farmer.jercy} />
                                    </div>
                                    <div>
                                        <label htmlFor="bread">sindhu</label>
                                        <input type="number" id="animal" name="sindhu" onChange={changeHandler} value={farmer.sindhu} />
                                    </div>
                                    <div>
                                        <label htmlFor="bread">country</label>
                                        <input type="number" id="animal" name="country" onChange={changeHandler} value={farmer.country} /></div>
                                </article>
                            </div>
                        </menu>
                        <footer>
                            <button>save</button>
                            <button>cancel</button>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    )
}