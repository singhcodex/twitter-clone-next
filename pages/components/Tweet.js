import timeago from "@/lib/timeago";
import Image from "next/image";

export default function Tweet ({tweet}){
    return (
        <>
        
        <div className="card border m-3 rounded px-2 py-5">
            <p>
                {tweet.author.image && (
                    <Image
                    className='rounded-full'
                    src={tweet.author.image}
                    alt={tweet.author.name}
                    width='40' height='40'
                    />
                )}
            </p>
            <p className="float-right">
                {timeago.format(new Date(tweet.createdAt))}
            </p>
            <small className="hover:text-blue-600">@{tweet.author.name}</small>
            <p>{tweet.content}</p>
            
        </div>
        
        </>
    )
}