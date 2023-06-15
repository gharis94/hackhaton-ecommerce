import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github';
import {NextAuthOptions} from 'next-auth'
import GoogleProvider from "next-auth/providers/google";


const authOption:NextAuthOptions={
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_CLIENTID as string,
            clientSecret:process.env.GITHUB_SECRETID as string,
         }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENTID as string,
            clientSecret:process.env.GOOGLE_SECRETID as string,
        })
    ],
    secret:process.env.JWT_SECRET
}
const handler= NextAuth(authOption);

export {handler as GET,handler as POST}