import NextAuth from 'next-auth';

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            email: string;
            name: string;
            image: {
                data: {
                    height: number;
                    width: number;
                    url: string;
                    is_silhouette: boolean;
                };
            };
        };
        accessToken: string;
        expires: string;
    }
}
