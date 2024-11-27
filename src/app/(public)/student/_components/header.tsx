import Link from "next/link";
import {
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  return (
<header className="bg-BlackCalido w-full h-[70px] fixed top-0 left-0 z-50 border-b border-BorderColor flex items-center justify-between">
  <div className="px-6 flex justify-between w-full items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold text-WhiteCalido font-leaguespartan">
          <Link href="/">EDUCONNECT</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="p-2 text-GrayCalido hover:text-WhiteCalido">
            <BellIcon className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          <button className="p-2 text-GrayCalido hover:text-WhiteCalido">
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
