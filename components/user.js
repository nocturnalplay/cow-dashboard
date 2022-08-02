import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function User() {
    const [user, setuser] = useState(false)
    const opuser = () => {
        setuser(a => !a)
    }
    return (
        <>
            <div className="user-icon">
                <Image src="/user.png" onClick={opuser} alt="user" height="40" width="40" />
            </div>
            {user && <div className="user-space">
                <span>username</span>
                <span>user id</span>
                <Link href="/">logout</Link>
            </div>}
        </>
    )
}