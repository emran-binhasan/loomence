"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constsants";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.action";
import { useSearchParams } from "next/navigation";

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials,{
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  const SignInButton = () =>{
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full cursor-pointer" variant={'default'}>{pending ? 'Signing in...' : 'Sign In'}</Button>
    )
  }


  return (
    <form className="space-y-3" action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl}/>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={signInDefaultValues.email}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="password"
          defaultValue={signInDefaultValues.password}
        />
      </div>
      <div>
        <SignInButton />
      </div>
      {data && !data.success && (
        <p className="text-destructive text-[15px] text-center">{data.message}</p>
      )}
      <div className="text-center">
        <span className="text-muted-foreground text-sm">
            Don&apos;t have an account?{' '} </span>
            <Link href='/sign-up' target="self" className="link text-sm">Sign Up</Link>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
