import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()

  //make a API i call for to validate the user
  const getloginuser = () => {
    router.push("/dashboard")
  }
  return (
    <div className='signin-body'>
      <div className='signin-left'></div>
      <div className='signin-right'>
        <div className='signin-intro'>
          <Image src="/i1.png" alt="logo" width={100} height={100} />
          <header>
            <h2>cow society</h2>
            <p>here is the place to maintain all the society details and also farmer details</p>
          </header>
        </div>
        <h1>login</h1>
        <div className='input-body'>
          <div>
            <label>user id</label>
            <input type="text" />
          </div>
          <div>
            <label>password</label>
            <input type="password" />
          </div>
          <button type='button' onClick={getloginuser}>login</button>
          <footer>
            <span>create new user <Link href="/signup">clickme</Link></span>
            <span>forgot password?</span>
          </footer>
        </div>
      </div>
    </div>
  )
}
