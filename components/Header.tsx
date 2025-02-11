import Link from "next/link"
import { Bell, List } from "lucide-react"

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4EFE6] px-10 py-3">
      <div className="flex items-center gap-4 text-[#1C160C]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_535)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_535">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em]">Garden</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="hidden md:flex items-center gap-9">
          <Link href="#" className="text-[#1C160C] text-sm font-medium leading-normal">
            Explore
          </Link>
          <Link href="#" className="text-[#1C160C] text-sm font-medium leading-normal">
            Templates
          </Link>
          <Link href="#" className="text-[#1C160C] text-sm font-medium leading-normal">
            Help
          </Link>
        </nav>
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-full h-10 w-10 bg-[#F4EFE6] text-[#1C160C]">
            <Bell size={20} />
          </button>
          <button className="flex items-center justify-center rounded-full h-10 w-10 bg-[#F4EFE6] text-[#1C160C]">
            <List size={20} />
          </button>
        </div>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/e8ceecd9-43b1-41e5-92b8-8c0f63a91cc8.png')",
          }}
        />
      </div>
    </header>
  )
}

