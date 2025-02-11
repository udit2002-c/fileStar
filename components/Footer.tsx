import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="flex justify-center bg-[#F4EFE6]">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 md:flex-row md:justify-around">
            <a className="text-[#A18249] text-base font-normal leading-normal min-w-40" href="#">
              About Us
            </a>
            <a className="text-[#A18249] text-base font-normal leading-normal min-w-40" href="#">
              Careers
            </a>
            <a className="text-[#A18249] text-base font-normal leading-normal min-w-40" href="#">
              Blog
            </a>
            <a className="text-[#A18249] text-base font-normal leading-normal min-w-40" href="#">
              Terms of Service
            </a>
            <a className="text-[#A18249] text-base font-normal leading-normal min-w-40" href="#">
              Privacy Policy
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-[#A18249]">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-[#A18249]">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-[#A18249]">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-[#A18249]">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-[#A18249] text-base font-normal leading-normal">@2023 Garden</p>
        </div>
      </div>
    </footer>
  )
}

