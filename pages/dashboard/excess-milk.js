import Head from "next/head"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Image from "next/image"

export default function ExcessMilk() {
    return (
        <div className='body'>
            <Head>
                <title>Cow-Society | Excess Milk</title>
            </Head>
            <Header /> {/* header for the dashboard*/}
            <div className="container">
                <Menu active="7" />
                <div className="form-body">
                    
                </div>
            </div>
        </div>
    )
}