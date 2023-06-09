import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github';
import {NextAuthOptions} from 'next-auth'


const authOption:NextAuthOptions={
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_CLIENTID as string,
            clientSecret:process.env.GITHUB_SECRETID as string
         })
    ],
}
const handler= NextAuth(authOption);

export {handler as GET,handler as POST}