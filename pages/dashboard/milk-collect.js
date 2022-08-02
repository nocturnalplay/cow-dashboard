import Head from "next/head"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Image from "next/image"

export default function MilkCollection() {
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
                                <input type="date" id="date" />
                            </div>
                            <div>
                                <label htmlFor="bacth">batch</label>
                                <input type="text" id="batch" />
                            </div>
                            <div>
                                <label htmlFor="id">farmer id</label>
                                <input type="text" id="id" />
                            </div>
                            <div>
                                <label htmlFor="name">farmer name</label>
                                <input type="text" id="name" />
                            </div>
                            <div>
                                <label htmlFor="litre">litres collected</label>
                                <input type="text" id="litre" />
                            </div>
                            <div>
                                <label htmlFor="fat">fat</label>
                                <input type="text" id="fat" />
                            </div>
                            <div>
                                <label htmlFor="snf">snf</label>
                                <input type="text" id="snf" />
                            </div>
                            <div>
                                <label htmlFor="phvalue">phvalue</label>
                                <input type="text" id="phvalue" />
                            </div>
                            <div>
                                <label htmlFor="temp">temperature</label>
                                <input type="text" id="temp" />
                            </div>
                            <div>
                                <label htmlFor="water">water %</label>
                                <input type="text" id="water" />
                            </div>
                            <div>
                                <label htmlFor="ec">ec value</label>
                                <input type="text" id="ec" />
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