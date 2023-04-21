import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"
import { faker} from '@faker-js/faker'

export default async function handler(req, res){
    const session = await getServerSession(req, res, authOptions)
    if(req.method !== 'POST') return res.end()
// clean database from other user
    if(req.body.task === 'clean_database'){
        await prisma.tweet.deleteMany({})
        await prisma.user.deleteMany({
            where: {
                NOT: {
                    email: {in : [session.user.email]},
                }
            }
        })
    }

    if(req.body.task === 'generate_users_and_tweets'){
        let count = 0

        while(count < 5){
            await prisma.user.create({
                data: {
                    name: faker.internet.userName().toLowerCase(),
                    email: faker.internet.email().toLowerCase(),
                    image: faker.internet.avatar(),
                }
            })
            count++
        }

        //create one tweet per user

        const users = await prisma.user.findMany({})

        // users.forEach( async (user) => {
        //     await prisma.tweet.create({
        //         data: {
        //             content: faker.hacker.phrase(),
        //             author: {
        //                 connect: {id: user.id},
        //             }
        //         }
        //     })
        // })

        users.forEach(async (user) =>{
            await prisma.tweet.create({
                data: {
                    content : faker.hacker.phrase(),
                    author: {
                        connect: {id: user.id},
                    }
                }
            })
        })
    }

// create one tweet randomly 
    if(req.body.task === 'generate_one_tweet'){

        const users = await prisma.user.findMany({})

        const randomIndex = Math.floor(Math.random() * users.length)
        const user = users[randomIndex]

        await prisma.tweet.create({
            data: {
                content: faker.hacker.phrase(),
                author: {
                    connect: {id: user.id},
                }
            }
        })

    }

    res.end()
}