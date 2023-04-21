import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Setup(){
    const router = useRouter()
    const { data: session, status} = useSession()
    const [name, setName] = useState('')
    const loading = status === 'loading'

    if(!session || !session.user) return null
    if(loading) return null

    if(!loading && session.user.name){
        router.push('/home')
    }

    return (
        <form className="text-center card border py-5 w-1/2 m-auto mt-10"
        onSubmit={async (e) => {
            e.preventDefault()

            await fetch('/api/setup', {
                body: JSON.stringify({name}),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
            })
            session.user.name = name
            router.push('/home')
        }}>
            <legend className="text-center my-5">Add User Name</legend>
            <div className="flex-1 mb-5">
                <label className="form-label mx-5">Username</label>
                <input 
                type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}
                className="border p-1 form-input"/>
            </div>
            <button className="border px-8 py-2 mt-0 mr-8 font-bold rounded-full color-accent-contrast bd-color-accent hover:bg-color-accent-hover">
                Save
            </button>
        </form>
    )
}