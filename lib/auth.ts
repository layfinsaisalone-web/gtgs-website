import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const adminEmail = "globaltechnologyandgeneralserv@gmail.com";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (!session.user) return session;
      const typedSession = session as typeof session & {
        user: {
          role?: "admin" | "user";
        };
      };
      typedSession.user.role = token.role === "admin" ? "admin" : "user";
      return typedSession;
    },
    async jwt({ token, profile }) {
      const email = profile?.email ?? token.email;
      if (email) {
        token.email = email;
        token.role = email === adminEmail ? "admin" : "user";
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
