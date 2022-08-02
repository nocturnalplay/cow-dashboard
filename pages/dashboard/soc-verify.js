import Head from "next/head"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Image from "next/image"
export default function SocityVerification() {
    return (
        <div className='body'>
            <Head>
                <title>Cow-Society | society varification</title>
            </Head>
            <Header /> {/* header for the dashboard*/}
            <div className="container">
                <Menu active="1" />
                <div className="form-body">
                    <h1>Socierty verification</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>mobile no</th>
                                <th>address</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apidata.map((a, i) => {
                                return (
                                    <tr key={a.num + a.addr.slice(10)}>
                                        <td>{i + 1}</td>
                                        <td>{a.num}</td>
                                        <td>{a.addr}</td>
                                        <td>{a.status === "accept" ?
                                            <Image src="/accept.png" alt="accept" width={25} height={25} title={a.status} />
                                            : a.status === "reject" ?
                                                <Image src="/reject.png" alt="accept" width={25} height={25} title={a.status} />
                                                : a.status === "pending" ?
                                                    <Image src="/pending.png" alt="accept" width={25} height={25} title={a.status} />
                                                    : ""
                                        }</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
const apidata = [
    { num: "1234567890", addr: "salem", status: "pending" },
    { num: "1234567890", addr: "salem", status: "accept" },
    { num: "1234567890", addr: "salem", status: "reject" },

]