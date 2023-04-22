import Tweet from "./Tweet";

export default function Tweets({tweets, nolink}){
    if(!tweets) return null

    return (
        <>
        <div className="container mx-auto">
        {tweets.map((tweet, index) => (
            <Tweet key={index} tweet={tweet} nolink={nolink}/>
        ))}
        </div>
        </>
    )
}