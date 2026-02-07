import { Button } from "@/components/ui/button";

function LandingHeader() {
  return (
    <div className="w-full flex gap-4 justify-end">
      <Button variant="outline">Register</Button>
      <Button>Login</Button>
    </div>
  );
}

export default LandingHeader;
