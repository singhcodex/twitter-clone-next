export default function Utils(){
    return (
        <div className="container m-auto">
            <h2 className="text-xl my-10 text-center font-semibold">Utils</h2>
            <div className="flex justify-between">
                <button className="rounded bg-slate-500 text-white px-10 py-2 hover:bg-slate-600"
                onClick={async () => {
                    await fetch('/api/utils', {
                        body: JSON.stringify({
                            task: 'clean_database',
                        }),
                        headers: {'Content-Type': 'application/json'},
                        method: 'POST',
                    })
                }}>Clean DataBase</button>
                <button className="rounded bg-slate-500 text-white px-10 py-2 hover:bg-slate-600"
                onClick={async () => {
                    await fetch('/api/utils', {
                        body: JSON.stringify({
                            task: 'generate_users_and_tweets',
                        }),
                        headers: {'Content-Type': 'application/json'},
                        method: 'POST',
                    })
                }}>Generate Users and Tweets</button>
                <button className="rounded bg-slate-500 text-white px-10 py-2 hover:bg-slate-600"
                onClick={async () => {
                    await fetch('/api/utils', {
                        body: JSON.stringify({
                            task: 'generate_one_tweet',
                        }),
                        headers: {'Content-Type': 'application/json'},
                        method: 'POST',
                    })
                }}>
                    Generate One Tweet
                </button>

            </div>
        </div>
    )
}