import Image from "next/image";
import Link from "next/link";
import { PiHouseLight, PiGithubLogoLight,  PiDiscordLogoLight } from "react-icons/pi";

function page() {
  return (
    <div className="/">
      <div className="p-5 fixed bottom-28 flex flex-col items-center justify-center mx-auto   w-full ">
        <div className="bg-neutral-600 rounded-full ">
          <Image
            height={1000}
            width={1000}
            className="object-cover w-40 h-40 rounded-full"
            src="https://i.pinimg.com/originals/65/eb/8a/65eb8a6b4a8966bafd26d1dee21ed97f.gif"
            alt="yes"
          />
        </div>
        <h1 className="text-5xl text-center   my-9 btn-shine">
          oh hi there
        </h1>

        <p className="text-neutral-400 lg:max-w-lg text-center">
          i've been known online as archangel or the nothing. welcome to my site, i guess...
        </p>
      </div>

      <div className=" flex justify-center">
        <div className="fixed bottom-7 flex border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500">

          <Link href={"/dashboard"}>
            <span>
              <PiHouseLight className="text-3xl" />
            </span>
          </Link>

          <Link href={"https://discord.gg/DHWfHRWe2V"}>
            <span>
              <PiDiscordLogoLight className="text-3xl"/>
            </span>
          </Link>

          <Link href={"https://github.com/archangel-12"}>
          <span>
            <PiGithubLogoLight className="text-3xl" />
          </span>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default page;