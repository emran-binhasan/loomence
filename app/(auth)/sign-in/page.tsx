import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constsants";
import Image from "next/image";
import Link from "next/link";
import CredentialsSignInForm from "./credentials-signin-fom";
import {redirect} from 'next/navigation'
import { auth } from "@/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

const SignInPage = async () => {
  const session = await auth();
  if(session?.user){
    redirect('/');
  }
  return <div className="w-full max-w-md mx-auto">
    <Card>
        <CardHeader>
            <Link href='/' className="flex justify-center items-center">
            <Image src='/images/logo.svg' alt={`${APP_NAME} logo`} width={60} height={60} priority={true}/>
            </Link>
       
        <CardTitle className="text-center">Sign In</CardTitle>
        <CardDescription className="text-center">Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
            <CredentialsSignInForm/>
        </CardContent>
    </Card>
  </div>;
};

export default SignInPage;
