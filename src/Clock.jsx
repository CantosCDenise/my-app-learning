import { useEffect, useState } from "react"

export function Clock(){
    const [date, setDate] = useState(new Date())
    useEffect(() => {           //useEffect allows us to have a side effect
        console.log("Setting up clock interval")

        const intervalId = setInterval(() => {
            console.log("Updating date...")

            setDate(new Date())
        }, 1000)                

        return () => {
            console.log("Clearing clock interval")

            clearInterval(intervalId)               
        }                       //useEffect can return a cleanup function
    }, [])

    return (
        <div>
            <p>Current time: {date.toLocaleTimeString()}</p>
        </div>
    )
}