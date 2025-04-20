'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/images/logo.svg"
const NotFoundPage = () => {
  return (
    <div className="h-screen space-y-3 flex flex-col items-center justify-center">
      <Image src={logo} alt="logo" height={50} width={50}/>
      <div className="p-6 space-y-2 shadow rounded text-center">
        <h5 className="">Not found</h5>
        <p className="text-destructive">Could not find requested page </p>
        <Button className="cursor-pointer" onClick={()=>{window.location.href = '/'}}>Go Back Home</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
