import Head from "next/head"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Image from "next/image"
export default function Home() {
    return (
        <div className='body'>
            <Head>
                <title>Cow-Society | Dashboard</title>
            </Head>
            <Header /> {/* header for the dashboard*/}
            <div className="container" >
                <Menu />
                <div className="form-body" style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image src="/landing.png" alt="landing page" width="100" height="100" />
                    <span>choose any menu options to validate or enter the values</span>
                </div>
            </div>
        </div>
    )
}