import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { getCurrentUser } from "../actions/auth-actions";

export async function AuthButton() {
  const { user } = await getCurrentUser();

  return user ? (
    <div className="flex items-center gap-4">
      Hola, {user.email}!
      <Button asChild size="sm" variant="default">
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/login">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
