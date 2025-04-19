import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constsants"; // typo?
import ThemeToggle from "./theme-toggle";

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

        {/* Actions: Cart & Sign In */}
        <div className="flex items-center space-x-2">
          <ThemeToggle/>
          <Button asChild variant="ghost">
            <Link href="/cart" className="flex items-center gap-1">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in" className="flex items-center gap-1">
              <UserIcon className="w-5 h-5" />
              <span>Sign In</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
