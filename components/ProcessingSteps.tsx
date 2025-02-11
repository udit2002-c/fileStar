"use client"

import { useState, useEffect } from "react"
import { Check, FileText } from "lucide-react"

interface ProcessingStepsProps {
  file: File
}

const steps = [
  "Extract text from image",
  "Translate text to English",
  "Summarize text",
  "Generate questions from text",
  "Answer questions from text",
]

export default function ProcessingSteps({ file }: ProcessingStepsProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < steps.length - 1) {
          return prevStep + 1
        }
        clearInterval(interval)
        return prevStep
      })
      setProgress((prevProgress) => Math.min(prevProgress + 20, 100))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="text-[#1C160C] text-base font-medium leading-normal">
            {progress === 100 ? "Finished" : "Processing"}
          </p>
        </div>
        <div className="rounded bg-[#E9DFCE]">
          <div
            className="h-2 rounded bg-[#019863] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[#A18249] text-sm font-normal leading-normal">
          {progress === 100 ? "Complete" : `${Math.round(progress)}% complete`}
        </p>
      </div>

      {steps.map((step, index) => (
        <div key={index}>
          <h2 className="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
            Step {index + 1}: {step}
          </h2>
          <div className="grid grid-cols-[40px_1fr] gap-x-2">
            <div className="flex flex-col items-center gap-1 pt-3">
              {index <= currentStep ? (
                <div className="rounded-full bg-[#019863] p-1 text-white">
                  <Check size={22} />
                </div>
              ) : (
                <div className="rounded-full bg-[#E9DFCE] p-1 text-[#A18249]">
                  <FileText size={22} />
                </div>
              )}
              {index < steps.length - 1 && (
                <div className={`w-[1.5px] h-12 ${index < currentStep ? "bg-[#019863]" : "bg-[#E9DFCE]"}`} />
              )}
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-[#1C160C] text-base font-medium leading-normal">
                {index < currentStep ? "Completed" : index === currentStep ? "In progress" : "Waiting"}
              </p>
              <p className="text-[#A18249] text-base font-normal leading-normal">
                {index < currentStep ? "2 minutes ago" : index === currentStep ? "Processing..." : "Waiting to start"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

