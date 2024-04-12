import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

function UserInfoForm({ currentPage, setCurrentPage, page, setPage }) {
  return (
    <form className="flex flex-col gap-6 justify-end">
      <div className="grid w-full max-w-xl items-center gap-3">
        <Label htmlFor="name">Your name</Label>
        <Input type="text" id="name" placeholder="John" />
      </div>

      <div className="grid w-full max-w-xl items-center gap-3">
        <Label htmlFor="surname">Your surname</Label>
        <Input type="text" id="surname" placeholder="Doe" />
      </div>

      <div className="grid w-full max-w-xl items-center gap-3">
        <Label htmlFor="phone">Your phone number</Label>
        <Input type="tel" id="phone" placeholder="0 541 295 87 61" />
      </div>

      {+page === 1 && (
        <Link
          onClick={() => {
            setPage(2);
            setCurrentPage(2);
          }}
          className="self-end"
          to={"/appointment/book"}
        >
          <Button className="w-28  mt-2 py-6">Next</Button>
        </Link>
      )}
    </form>
  );
}

export default UserInfoForm;
