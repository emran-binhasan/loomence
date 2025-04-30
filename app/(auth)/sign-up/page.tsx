import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constsants";
import Image from "next/image";
import Link from "next/link";
import CredentialsSignUpForm from "./credentials-signup-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const Metadata = {
    title:"Sign Up",
    description:"Create an account"
}

const SignUpPage = async (props:{searchParams:Promise<{callbackUrl?:string}>}) => {
    const {callbackUrl} = await props.searchParams;
    const session = await auth();
    if(session?.user){
        return redirect(callbackUrl || '/')
    }
    return ( <div className="w-full max-w-md mx-auto">
        <Card>
            <CardHeader>
            <Link href='/' className="flex justify-center items-center">
            <Image src='/images/logo.svg' alt={`${APP_NAME} logo`} width={60} height={60} priority={true}/>
            </Link>
            <CardTitle className="text-center">Sign Up</CardTitle>
            <CardDescription className="text-center">Create an account</CardDescription>
            </CardHeader>
            <CardContent>
                <CredentialsSignUpForm/>
            </CardContent>
        </Card>
    </div> );
}
 
export default SignUpPage;