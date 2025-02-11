"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"

interface FileUploadProps {
  onFileUpload: (file: File) => void
}

export default function FileUpload({ onFileUpload }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0])
      }
    },
    [onFileUpload],
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
      "application/pdf": [".pdf"],
    },
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
  })

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-xl transition-colors ${
        isDragging ? "border-[#019863] bg-[#E9DFCE]" : "border-[#E9DFCE]"
      }`}
    >
      <input {...getInputProps()} />
      <div className="text-6xl mb-4">🌱</div>
      <p className="text-[#1C160C] text-lg font-medium mb-2">Plant your file here</p>
      <p className="text-[#A18249] text-sm">Drag and drop or click to upload</p>
    </div>
  )
}

