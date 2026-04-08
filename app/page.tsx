"use client";

import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-y-0 z-0 w-full">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-40">
          <source src="/comingsoon.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="group relative z-10 flex flex-col items-center justify-center px-4 text-center text-[#7F7F7F] transition-all duration-300">
          <Image src="/sclogo.svg" alt="Satu Collective Logo" width={362} height={41} />
          <p className="my-5 max-w-2xl text-lg transition-all duration-300 group-hover:text-gray-300 sm:text-xl md:text-xl">
            Website still under development
          </p>

          <p className="text-lg transition-all duration-300 group-hover:text-gray-300 sm:text-xl md:text-xl">
            visit us on our{" "}
            <a
              href="https://www.instagram.com/satucollective/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:text-[#7F7F7F]"
            >
              instagram
            </a>
          </p>

          <p className="text-lg transition-all duration-300 group-hover:text-gray-300 sm:text-xl md:text-xl">
            or mail us at{" "}
            <a href="mailto:studio@satucollective.com" className="transition-all duration-200 hover:text-[#7F7F7F]">
              studio@satucollective.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
