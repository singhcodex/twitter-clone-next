import { getTweets } from "@/lib/data"
import prisma from "@/lib/prisma"


export default async function handler(req, res){
    if(req.method !== 'GET'){
        return res.status(501).end()
    }

    const take = parseInt(req.query.take || 2)
    const cursor = parseInt(req.query.cursor) || null
    
    if(!cursor){
        res.status(400).send({error: 'Mission cursor parameter'})
    }

    const tweets = await getTweets(prisma, take, {id: cursor})
    res.json(tweets)
}