import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";

const Menu = () => {
  return (
    <div className="flex justify-center gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1 ">
        <ThemeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart" className="flex items-center gap-1">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </Link>
        </Button>
        <UserButton/>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="border flex flex-col items-start justify-center px-1.5 py-3">
            <SheetTitle className="px-3 py1.5">Menu</SheetTitle>
            
            <Button asChild variant="ghost">
              <Link href="/cart" className="flex items-center gap-1">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
              </Link>
            </Button>
            <UserButton/>
            <SheetDescription>..</SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
