import Image from "next/image";

export default function registerlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="grid grid-cols-2 w-full h-screen grid-rows-1 bg-purple-950">
        <div className="flex items-center justify-center">
          <Image
            src="/coding.png"
            alt="coding"
            width={600}
            height={600}
            quality={100}
          ></Image>
        </div>
        <div className="flex items-center justify-center bg-slate-300">
          <div className=" flex bg-slate-200 max-w-md w-screen h-4/6 justify-center rounded-lg shadow-lg flex-col">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
