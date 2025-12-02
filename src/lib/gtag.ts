// Google Ads Conversion Tracking

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Track qualified lead (LINE click, form submit, etc.)
export const trackQualifyLead = (leadType?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'qualify_lead', {
      lead_type: leadType || 'line_click',
    });
  }
};

// Track phone call click
export const trackPhoneClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'qualify_lead', {
      lead_type: 'phone_call',
    });
  }
};

// Track form submission
export const trackFormSubmit = (formName?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'qualify_lead', {
      lead_type: 'form_submit',
      form_name: formName,
    });
  }
};
