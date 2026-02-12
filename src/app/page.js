import Navbar from "@/components/navbar";
import Sidebar from "@/components/ui/sidebar";
import Image from "next/image";
import ProfileSection from "@/components/userProfile";

export default function Home() {
  return (
    
      <main className="">
        <div className=" flex flex-row w-[100%] h-100vh bg-gray-50 " >
          <div className="w-[15%]">
          <Sidebar />
          </div>
          <div className="w-[85%]">
          <div className="flex flex-col">
            <Navbar />
            <ProfileSection />
          </div>
          </div>
        </div>
      </main>
  );
}
