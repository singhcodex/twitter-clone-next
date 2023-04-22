export default function LoadMore({tweets, setTweets}){
    return (
        <>
        <div className="mt-10 flex justify-center">
            <button
            className="justified-self-center border px-8 py-2 text-white font-bold rounded-full bg-slate-500 hover:bg-slate-600"
            onClick={async () => {
                const lastTweetId = tweets[tweets.length -1].id
                const res = await fetch(`/api/tweets?take=2&cursor=${lastTweetId}`)
                const data = await res.json()
                setTweets([...tweets, ...data])
            }}>Load More...</button>
        </div>
        </>
    )
}