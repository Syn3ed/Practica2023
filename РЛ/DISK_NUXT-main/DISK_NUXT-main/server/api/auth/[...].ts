import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'

/*const runtimeConfig = useRuntimeConfig()*/

export default NuxtAuthHandler({
   pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
        signIn: '/login',
    },
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: '11aeb76872d61cf12fb6',
           clientSecret: '8db435b251b4e42fd8cff55a4f7d4c2c4a34089d'
        })
    ]
})

/*  GithubProvider.default({
           clientId: runtimeConfig.public.GITHUB_CLIENT_ID,
           clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET,
        })*/
