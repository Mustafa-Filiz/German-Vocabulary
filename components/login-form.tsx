import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            You can easily login or sign-up with your Google account.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          <Button variant="outline" type="button" className="w-full">
            Login with Google
          </Button>
          {/* <Link href="/" className="text-sm w-full text-center">
            Landing page
          </Link> */}
        </CardContent>
      </Card>
    </div>
  );
}
