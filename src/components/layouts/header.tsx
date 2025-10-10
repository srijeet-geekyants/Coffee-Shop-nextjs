import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between py-4">
      <Link href="/" className="text-2xl font-bold text-red-500">
        zomato
      </Link>
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost">
          <Link href="/login">Log in</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>
    </header>
  );
}