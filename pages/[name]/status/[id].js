import prisma from "@/lib/prisma";
import Tweet from "../../components/Tweet";
import { getTweet } from "@/lib/data";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function SingleTweet({tweet}){
    const {data: session, status} = useSession()
    const router = useRouter()
    if(typeof window !== 'undefined' && !tweet){
        router.push('/home')
        return
    }
    
    return (
        <>
        <div className="container m-auto">
            <Tweet tweet={tweet}/>
            {session && session.user.email === tweet.author.email && (
                <div className="text-center">
                    <a href=""
                    onClick={ async (e) => {
                        e.preventDefault()
                        console.log('delete clicked')
                        const res =  await fetch('/api/tweet', {
                            body: JSON.stringify({
                                id: tweet.id,
                            }),
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            method: 'DELETE'
                        })
                        if(res.status === 401){
                            alert('Unauthorized')
                        }
                        if(res.status === 200){
                            router.push('/home')
                        }
                    }}>
                        Delete
                    </a>
                </div>
            )}
        </div>
        </>
    )
}

export async function getServerSideProps({params}){
    let tweet = await getTweet(params.id, prisma)
    tweet = JSON.parse(JSON.stringify(tweet))

    return {
        props: {
            tweet,
        },
    }
}