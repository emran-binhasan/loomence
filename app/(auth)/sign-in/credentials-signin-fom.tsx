"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constsants";
import Link from "next/link";
import { useActionState } from "react";
import { useFormState } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.action";

const CredentialsSignInForm = () => {
  return (
    <form className="space-y-3">
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
        <Button className="w-full" variant="default">Sign In</Button>
      </div>
      <div className="text-center">
        <span className="text-muted-foreground text-sm">
            Don&apos;t have an account?{' '} </span>
            <Link href='/sign-up' target="self" className="link text-sm">Sign Up</Link>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
