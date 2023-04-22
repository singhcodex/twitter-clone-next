import timeago from "@/lib/timeago";
import Image from "next/image";
import Link from "next/link";

export default function Tweet ({tweet, nolink}){
    if(!tweet) return
    
    return (
        <>        
        <div className="card border m-3 rounded px-2 py-5">
            <p>
            {tweet.author.image && (
                <Image
                className='rounded-full'
                src={tweet.author.image}
                alt={tweet.author.name}
                width='40'
                height='40'
                />
            )}
            </p>
            <p className="float-right">
                {
                    nolink ? (
                        <span>{timeago.format(new Date(tweet.createdAt))}</span>
                    ) : (
                    <Link href={`/${tweet.author.name}/status/${tweet.id}`} className="hover:underline">
                        {timeago.format(new Date(tweet.createdAt))}
                    </Link>
                    )
                }

                
                
            </p>
            <small className="hover:text-blue-600"><Link href={`/${tweet.author.name}`}>@{tweet.author.name}</Link></small>
            <p>{tweet.content}</p>
            
        </div>
        
        </>
    )
}