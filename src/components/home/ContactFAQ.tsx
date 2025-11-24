import React from 'react';
import { MessageCircleQuestion } from "lucide-react";
import { getMockFAQItemsAsync } from "@/app/products/mock-data";
import FAQItemComp from "./FAQItemComp";

const ContactFAQ = async () => {
  const faqItems = await getMockFAQItemsAsync();

  return (
    <section className="flex flex-col items-start justify-center mt-4 min-w-full gap-4">
      <span className='flex flex-col w-full'>
        <p className='text-neutral-600'>คำถามที่พบบ่อย</p>
        <h2 className="text-4xl font-bold text-neutral-900 mb-2 mt-1 leading-tight">
          ปรึกษาฟรี
        </h2>
      </span>
      <div className="flex flex-col gap-2 w-full">
        {faqItems.map((item) => (
          <FAQItemComp key={item.id} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default ContactFAQ;
