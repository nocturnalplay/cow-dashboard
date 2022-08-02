import Head from "next/head"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Image from "next/image"

export default function MilkPurity() {
    return (
        <div className='body'>
            <Head>
                <title>Cow-Society | Milk Purity</title>
            </Head>
            <Header /> {/* header for the dashboard*/}
            <div className="container">
                <Menu active="5" />
                <div className="form-body">
                    <h1>milk purity verification</h1>
                    <aside>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>farmer id</th>
                                    <th>farmer name</th>
                                    <th>date</th>
                                    <th>batch</th>
                                    <th>fat</th>
                                    <th>snf</th>
                                    <th>ec value</th>
                                    <th>ph value</th>
                                    <th>temperature</th>
                                    <th>water %</th>
                                    <th>statement</th>
                                </tr>
                            </thead>
                            <tbody>
                                {apidata.map((a, i) => {
                                    return (
                                        <tr key={a.id}>
                                            <td>{i + 1}</td>
                                            <td>{a.id}</td>
                                            <td>{a.name}</td>
                                            <td>{a.date}</td>
                                            <td>{a.batch}</td>
                                            <td>{a.fat}</td>
                                            <td>{a.snf}</td>
                                            <td>{a.ec}</td>
                                            <td>{a.ph}</td>
                                            <td>{a.temp}</td>
                                            <td>{a.water}</td>
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
                    </aside>

                </div>
            </div>
        </div>
    )
}
const apidata = [
    { id: "123456", name: "sri", date: "22/02/2022", batch: "morning", fat: "12.04", snf: ".022", ec: "14.09", ph: "5.5", temp: "12", water: "7.5", status: "accept" },
    { id: "167890", name: "sri", date: "22/02/2022", batch: "morning", fat: "12.04", snf: ".022", ec: "14.09", ph: "5.5", temp: "12", water: "7.5", status: "accept" },
    { id: "125690", name: "sri", date: "22/02/2022", batch: "morning", fat: "12.04", snf: ".022", ec: "14.09", ph: "5.5", temp: "12", water: "7.5", status: "reject" },

]