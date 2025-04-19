
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constsants"; 
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between items-center justify-between py-4">
        {/* Logo + App Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} logo`}
            height={36}
            width={36}
            priority
          />
          <span className="hidden lg:block font-poppins font-bold text-2xl">{APP_NAME}</span>
        </Link>
         <Menu/>
      </div>
    </header>
  );
};

export default Header;
