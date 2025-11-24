import React from 'react';
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { getMockFAQItemsAsync } from "@/app/products/mock-data";

const ContactFAQ = async () => {
  const faqItems = await getMockFAQItemsAsync();

  return (
    <section className="flex flex-col items-start justify-center mt-4 min-w-full py-2 px-6 md:px-8">
      <MessageCircleQuestion className="h-12 w-12 mb-4 text-[#d9300c]" />
      <h1 className="text-start text-3xl text-[#d9300c] font-semibold">
        ติดต่อปรึกษาฟรี!
      </h1>
      <p className="mt-2 mb-4">หากสนใจแต่ไม่รู้จะเริ่มอย่างไรดี ดูที่นี่</p>
      <div className="flex flex-col gap-2 w-full">
        {faqItems.map((item) => (
          <div key={item.id} className="flex justify-between p-2 border-b border-neutral-200">
            <p>{item.question}</p>
            <ChevronDown className="self-center text-neutral-500" />
            {/* For interactivity (expand/collapse), this div would become a client component. */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactFAQ;
