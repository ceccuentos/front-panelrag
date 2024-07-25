import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

{/* <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-b from-blue-400 to-blue-200">  #E0E0E0 
  <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-b from-orange-950 via-orange-600 to-orange-500">
  original: ackground-gradient

  */}
export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-purple-400 to-blue-500 p-4 rounded-lg shadow-lg">
      <div className="space-y-2 lg:space-y-10 w-[90%] lg:w-[60rem]">
        <Header />
        <div className="h-[65vh] flex bg-[#F9FAFB]">
          <ChatSection />
        </div>
      </div>
    </main>
  );
}
