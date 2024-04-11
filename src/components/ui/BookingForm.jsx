import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
("use client");

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Link } from "react-router-dom";

function BookingForm({ currentPage, setCurrentPage, page, setPage }) {
  const [date, setDate] = useState();

  return (
    <form className="flex flex-col gap-6 justify-end">
      <div className="grid w-full max-w-xl items-center gap-[6px]">
        <Label className="text-sm font-medium" htmlFor="department">
          Select Department
        </Label>
        <Select className="w-full" id="department">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cardiology">Cardiology</SelectItem>
            <SelectItem value="neurology">Neurology</SelectItem>
            <SelectItem value="orthopedics">Orthopedics</SelectItem>
            <SelectItem value="pediatrics">Pediatrics</SelectItem>
            <SelectItem value="radiology">Radiology</SelectItem>
            <SelectItem value="dermatology">Dermatology</SelectItem>
            <SelectItem value="gastroenterology">Gastroenterology</SelectItem>
            <SelectItem value="endocrinology">Endocrinology</SelectItem>
            <SelectItem value="nephrology">Nephrology</SelectItem>
            <SelectItem value="urology">Urology</SelectItem>
            <SelectItem value="pulmonology">Pulmonology</SelectItem>
            <SelectItem value="psychiatry">Psychiatry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full max-w-xl items-center gap-[6px]">
        <Label className="text-sm font-medium" htmlFor="doctor">
          Select Doctor
        </Label>
        <Select className="w-full" id="doctor">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yusuf-ad">Yusuf Ad</SelectItem>
            <SelectItem value="ali-haydar-altay">Ali Haydar Altay</SelectItem>
            <SelectItem value="hatice-yaman">Hatice Yaman</SelectItem>
            <SelectItem value="aydin-boysan">Aydin Boysan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full max-w-xl items-center gap-[6px]">
        <Label className="text-sm font-medium" htmlFor="phone">
          Select Date
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid w-full max-w-xl items-center gap-[6px]">
        <Label className="text-sm font-medium" htmlFor="time">
          Select Time
        </Label>
        <Select className="w-full" id="time">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="09:00">09:00</SelectItem>
            <SelectItem value="10:00">10:00</SelectItem>
            <SelectItem value="11:00">11:00</SelectItem>
            <SelectItem value="12:00">12:00</SelectItem>
            <SelectItem value="13:00">13:00</SelectItem>
            <SelectItem value="14:00">14:00</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Link
        onClick={() => setPage(3)}
        className="self-end"
        to={"/appointment/confirm"}
      >
        <Button className="w-28  mt-2 py-6">Book</Button>
      </Link>
    </form>
  );
}

export default BookingForm;
