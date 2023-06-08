import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github';

const handler=NextAuth({
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_CLIENTID as string,
            clientSecret:process.env.GITHUB_SECRETID as string
         })
    ],
})

export {handler as GET,handler as POST}