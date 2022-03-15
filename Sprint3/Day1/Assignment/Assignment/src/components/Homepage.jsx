import {useContext} from "react"
 import {AuthContext} from '../context/AuthContext'
export function Homepage (){
    const {token}= useContext(AuthContext)
    console.log("hompage",token)
    const x=token
    return (
        <div>You are on Homepage :{x}</div>
    )
}