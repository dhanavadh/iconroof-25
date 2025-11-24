"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItemComp({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left focus:outline-none py-2"
      >
        <p className="font-medium text-neutral-800 text-xl">{question}</p>
        <ChevronDown
          className={`text-neutral-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pt-4 pb-6 " : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden text-neutral-600">
          {answer}
        </div>
      </div>
    </div>
  );
}
