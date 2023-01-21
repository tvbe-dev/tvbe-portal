import NextAuth from 'next-auth';
import CognitoProvider from 'next-auth/providers/cognito';

export const authOptions = {
    providers: [
        CognitoProvider({
            clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID as string,
            clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
            issuer: process.env.COGNITO_ISSUER,
            checks: 'nonce'
        })
    ],
    callbacks: {
        async session({ session, token, user }: any) {
            session.user.username = token.username;
            session.user.sub = token.sub;
            session.user.image = JSON.parse(token.picture);
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }: any) {
            if (profile) {
                token.username = profile['cognito:username'];
            }
            return token;
        }
    }
};
export default NextAuth(authOptions);
