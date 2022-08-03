import { useRouter } from "next/router"

export default function Signup() {
    const router = useRouter()
    const savedata = () => {
        router.push("/")
    }
    return (
        <div className="signup-body">
            <form>
                <h1>society registration</h1>
                <div className="signup-layer">
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" id="name" />
                    </div>
                    <div>
                        <label htmlFor="location">location</label>
                        <input type="text" id="location" />
                    </div>
                    <div style={{ flex: "100%" }}>
                        <label htmlFor="address1">address 1</label>
                        <textarea type="text" id="address1" rows={5} />
                    </div>
                    <div style={{ flex: "100%" }}>
                        <label htmlFor="address2">address 2</label>
                        <textarea type="text" id="address2" rows={5} />
                    </div>
                    <div>
                        <label htmlFor="city">city</label>
                        <input type="text" id="city" />
                    </div>
                    <div>
                        <label htmlFor="state">state</label>
                        <input type="text" id="state" />
                    </div>
                    <div>
                        <label htmlFor="country">country</label>
                        <input type="text" id="country" />
                    </div>
                    <div>
                        <label htmlFor="pin-code">pin code</label>
                        <input type="number" id="pin-code" />
                    </div>
                    <div>
                        <label htmlFor="mobile-no">mobile no</label>
                        <input type="number" id="mobile-no" />
                    </div>
                    <div>
                        <label htmlFor="email-id">email id</label>
                        <input type="text" id="email-id" />
                    </div>
                </div>
                <footer>
                    <button type="button" onClick={savedata}>save</button>
                    <button type="button">cancle</button>
                </footer>
            </form>
        </div>
    )
}