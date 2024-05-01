import Image from "next/image";
import Navbar from "@/components/Global/navbar"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
          <div className="flex flex-col mt-[-100px] md:mt-[-50px]"></div>
        </div>

      </section>
    </main>
  );
}
