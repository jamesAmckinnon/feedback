import React, {useState, useEffect} from 'react'
import {Card} from '../components/card'

export const Home = () => {

    const [dat, setData] = useState([])
    const [inp, setInp] = useState("")

    useEffect(() => {
        fetch('https://flask-api.herokuapp.com/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => console.log(data))
    },[])

    async function handleSubmit(event){
        event.preventDefault()
        const res = await fetch('https://flask-api.herokuapp.com/api/create', {
            method: 'POST',
            body: JSON.stringify({
                content: inp
            })
        })
        const json = await res.text()
        console.log(json)
        if (!res.ok) throw Error(json.message)
    }


    return (
        <>
            <Card/>
            <form onSubmit={handleSubmit}>
                <input
                    id="request_title"
                    type="text"
                    className="border-b border-gray-500 w-200px"
                    maxLength={45}
                    name="request_title"
                    value={inp}
                    onChange={(e) => setInp(e.target.value)}
                />
                <input type='submit'/>
            </form>
        </>
    )
}