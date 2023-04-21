import timeago from "@/lib/timeago";

export default function Tweet ({tweet}){
    return (
        <>
        
        <div className="card border m-3 rounded px-2 py-5">
            <p className="float-right">
                {timeago.format(new Date(tweet.createdAt))}
            </p>
        
            <p>{tweet.content}</p>
            <small className="hover:text-blue-600">{tweet.author.email}</small>
        </div>
        
        </>
    )
}