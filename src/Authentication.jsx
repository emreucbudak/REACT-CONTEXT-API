import React from 'react'
import { useContext } from 'react'
import auth from './context/auth'
function Authentication() {
    const {status, login} = useContext(auth)
    console.log(status)
    
    return (
    <div>
        <div>
            <p>Giriş Yaptınmı</p>
            {status ? <p>Evet Yaptın</p> : <p>Hayır</p>}
            <button onClick={login}>Giriş Yap</button>
        </div>
    </div>
  )
}

export default Authentication