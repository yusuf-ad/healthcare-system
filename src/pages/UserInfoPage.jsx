import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function UserInfoPage() {
  return (
    <div className="mt-12 mx-auto">
      <form className="flex flex-col gap-6 justify-end">
        <div className="grid w-full max-w-lg items-center gap-3">
          <Label htmlFor="name">Your name</Label>
          <Input type="text" id="name" placeholder="John" />
        </div>

        <div className="grid w-full max-w-lg items-center gap-3">
          <Label htmlFor="surname">Your surname</Label>
          <Input type="text" id="surname" placeholder="Doe" />
        </div>

        <div className="grid w-full max-w-lg items-center gap-3">
          <Label htmlFor="phone">Your phone number</Label>
          <Input type="tel" id="phone" placeholder="+90 541 295 87 61" />
        </div>

        <Button className="w-28 self-end mt-2 py-6">Next</Button>
      </form>
    </div>
  );
}

export default UserInfoPage;
