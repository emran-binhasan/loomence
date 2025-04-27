import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { signOutUser } from "@/lib/actions/user.action";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { UserIcon } from "lucide-react";

const UserButton = async () => {
  const session = await auth();
  if (!session) {
    return (
      <Button asChild>
        <Link href="/sign-in" className="flex items-center gap-1">
          <UserIcon className="w-5 h-5" />
          <span>Sign In</span>
        </Link>
      </Button>
    );
  }

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "U";
  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
       <DropdownMenuTrigger>
        <div className="flex items-center">
            <Button variant="ghost" className="rounded-full bg-gray-200 h-8 w-8 ml-2 items-center justify-center ">{firstInitial}</Button>
        </div>
       </DropdownMenuTrigger>
       <DropdownMenuContent className="w-56 align-='end" forceMount>
        <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-2 p-1">
                <span className=" leading-none">{session?.user?.name}</span>
                <span className="text-muted-foreground leading-none">{session?.user?.email}</span>
            </div>
        </DropdownMenuLabel>
        <DropdownMenuItem className="p-0">
            <form action={signOutUser} className="w-full">
                <Button className="w-full py-4 text-[13.5px] px-2 h-4 justify-start ml-1" variant='ghost'>Sign Out</Button>
            </form>
        </DropdownMenuItem>
       </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
