import Logo from "./Logo"
import User from "./user"
export default function Header() {
    return (
        <header className='header'>
            <div className="product">
                <Logo src="/i1.png" width="50" height="50" />
                <h1>cow society</h1>
            </div>
            <User />
        </header>
    )
}