import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
import { SideBar } from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div>
        <AppBar />
        <div className="grid grid-cols-12">
          <div className="col-span-2"><SideBar></SideBar></div>
        <div className="col-span-10"><VideoGrid></VideoGrid></div>
        </div>
      </div>
  );
}
