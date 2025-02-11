"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FileUpload from "../components/FileUpload"
import ProcessingSteps from "../components/ProcessingSteps"

export default function Home() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF]">
      <Header />
      <main className="flex-grow px-4 md:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          <h1 className="text-[#1C160C] text-4xl font-black leading-tight tracking-[-0.033em] text-center mb-6">
            Your Transformation Garden
          </h1>
          {!uploadedFile ? <FileUpload onFileUpload={setUploadedFile} /> : <ProcessingSteps file={uploadedFile} />}
        </div>
      </main>
      <Footer />
    </div>
  )
}

