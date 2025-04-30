"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpUser } from "@/lib/actions/user.action";
import { signUpDefaultValues } from "@/lib/constsants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const CredentialsSignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button
        disabled={pending}
        className="w-full cursor-pointer"
        variant={"default"}
      >
        {pending ? "Signing up..." : "Sign up"}
      </Button>
    );
  };

  return (
    <>
      <form className="space-y-3" action={action}>
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            // required
            autoComplete="name"
            defaultValue={signUpDefaultValues.name}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            // required
            autoComplete="email"
            defaultValue={signUpDefaultValues.email}
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
            defaultValue={signUpDefaultValues.password}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            autoComplete="confirmPassword"
            defaultValue={signUpDefaultValues.confirmPassword}
          />
        </div>
        <div>
          <SignUpButton />
        </div>
        {data && !data.success && (
          <p className="text-destructive text-[15px] text-center">
            {data.message}
          </p>
        )}
        <div className="text-center">
        <span className="text-muted-foreground text-sm">
            Already have an account?{' '} </span>
            <Link href='/sign-in' target="self" className="link text-sm">Sign In</Link>
      </div>
      </form>
    </>
  );
};

export default CredentialsSignUpForm;
