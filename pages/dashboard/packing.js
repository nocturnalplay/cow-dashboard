import Head from "next/head"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Image from "next/image"

export default function Packing() {
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
                                <input type="date" id="date" />
                            </div>
                            <div>
                                <label htmlFor="batch">batch</label>
                                <input type="text" id="batch" />
                            </div>
                            <div>
                                <label htmlFor="litreall">no of litre collected</label>
                                <input type="text" id="litreall" />
                            </div>
                            <div>
                                <label htmlFor="litre1">no of 1 litre collected</label>
                                <input type="text" id="litre1" />
                            </div>
                            <div>
                                <label htmlFor="litre1-2">no of 1/2 litre collected</label>
                                <input type="text" id="litre1-2" />
                            </div>
                            <div>
                                <label htmlFor="excess">no of litre of milk excess(in hand)</label>
                                <input type="text" id="excess" />
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