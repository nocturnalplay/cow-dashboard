import Head from "next/head"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Image from "next/image"

export default function FarmerDetail() {
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
                                <input type="text" id="name" />
                            </div>
                            <div>
                                <label htmlFor="mobile">mobile no</label>
                                <input type="text" id="mobile" />
                            </div>
                            <div>
                                <label htmlFor="adddress">address</label>
                                <input type="text" id="address" />
                            </div>
                            <div>
                                <label htmlFor="count">animal owned</label>
                                <input type="number" id="count" />
                            </div>
                            <div>
                                <label htmlFor="animal">types of animal</label>
                                <input type="number" id="animal" />
                            </div>
                            <div>
                                <label htmlFor="bread">bread</label>
                                <input type="number" id="animal" />
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