import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Menu({ active }) {
    const [menu, setmenu] = useState(false)
    const [load, setload] = useState(false)
    useEffect(() => {
        const size = window.screen.width
        if (size < 900) {
            setmenu(true)
        }
        setload(true)
    }, [])
    const CloseMenu = () => {
        setmenu(true)
        window.localStorage.setItem('menustate', true)
    }
    const OpenMenu = () => {
        setmenu(false)
        window.localStorage.setItem('menustate', false)
    }
    return (
        <>{load && (
            <div className={menu ? "menu-body active" : "menu-body"} id="menu">
                <div className={menu ? "menu-close active" : "menu-close"} id="menu-close">
                    {
                        menu ?
                            <Image id="me" onClick={OpenMenu} src="/menu1.png" alt="menu" width="25" height="25" />
                            :
                            <Image id="ri" onClick={CloseMenu} src="/left1.png" alt="menu" width="25" height="25" />
                    }
                </div>
                <ul>
                    {
                        menuList.map((a, i) => {
                            return (
                                <Link key={a.link} href={`${process.env.url}dashboard/${a.link}`}>
                                    <div className={`${active == i + 1 ? "menu-option view" : "menu-option"} ${menu ? "active" : ""}`} id="menu-option">
                                        <div className="menu-icon" title={a.txt}>
                                            <Image src={`/${a.icon}`} alt="menu" width="30" height="30" />
                                        </div>
                                        {
                                            menu ? "" : <li >
                                                {a.txt}
                                            </li>
                                        }
                                    </div>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>)}
        </>
    )
}
const menuList = [
    { link: "soc-verify", icon: "society.png", txt: "society verification" },
    { link: "soc-detail", icon: "details.png", txt: "society details" },
    { link: "farmer-detail", icon: "farmer.png", txt: "farmer datails" },
    { link: "milk-collect", icon: "milk.png", txt: "milk collection" },
    { link: "milk-purity", icon: "report.png", txt: "milk purity verification" },
    { link: "packing", icon: "packing.png", txt: "packing & transporting" },
    { link: "excess-milk", icon: "management.png", txt: "excess milk management" }
]