import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { isValidPhone } from "@/utils/isValidPhone";
import InputMask from "react-input-mask";
import { setUserInfo } from "@/slices/appointmentSlice";
import { useDispatch, useSelector } from "react-redux";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(24, { message: "Name must be at most 24 characters long" }),
  surname: z
    .string()
    .min(1, { message: "Surname is required" })
    .max(24, { message: "Surname must be at most 24 characters long" }),
  phone: z.string().refine((phone) => isValidPhone(phone), {
    message: "Phone number should be in this format: 0 555 555 55 55",
  }),
});

function UserInfoForm({ currentPage, setCurrentPage, page, setPage }) {
  const { userInfo } = useSelector((state) => state.appointment);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: userInfo,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSuccess = (data) => {
    setPage(2);
    setCurrentPage(2);
    navigate("/healthcare-system/appointment/book");

    dispatch(setUserInfo(data));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSuccess)}
        className="flex flex-col gap-6 xs:px-8 justify-end w-52 xs:w-[420px]  lg:w-full"
      >
        <div className="grid w-full  max-w-xl items-center gap-3">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="surname"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your surname</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your phone number</FormLabel>
                <FormControl>
                  <InputMask
                    mask="0 999 999 99 99"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    {(inputProps) => (
                      <Input {...inputProps} placeholder="0 544 647 53 31" />
                    )}
                  </InputMask>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {+page === 1 && (
          <Button type="submit" className="w-28  mt-2 py-6 self-end">
            Next
          </Button>
        )}
      </form>
    </Form>
  );
}

export default UserInfoForm;
