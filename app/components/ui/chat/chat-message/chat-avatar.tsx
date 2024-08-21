import { User, Scale } from "lucide-react";
import Image from "next/image";

export default function ChatAvatar({ role }: { role: string }) {
  if (role === "user") {
    return (
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-background shadow">
        <User className="h-4 w-4" />
      </div>
    );
  }

  return (
    <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow">
     <Scale className="h-4 w-4" />
      {/* <Image
        className="rounded-md"
        src="/Panel Expertos Logo.jpg"
        alt="Panel Logo"
        width={44}
        height={44}
        priority
      /> */}
    </div>
  );
}


{/* <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-white text-white shadow"></div> */}