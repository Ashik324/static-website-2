import emailjs from '@emailjs/browser';

// Configuration for EmailJS
// You can get these values by signing up at https://www.emailjs.com/
export const EMAIL_CONFIG = {
  SERVICE_ID: "YOUR_SERVICE_ID", // Replace with your Service ID
  TEMPLATE_ID_ENQUIRY: "YOUR_TEMPLATE_ID", // Replace with your Template ID
  TEMPLATE_ID_NEWSLETTER: "YOUR_NEWSLETTER_TEMPLATE_ID", // Optional: Separate template for newsletter
  PUBLIC_KEY: "YOUR_PUBLIC_KEY", // Replace with your Public Key
};

export const sendEmail = async (templateParams: Record<string, unknown>, templateId = EMAIL_CONFIG.TEMPLATE_ID_ENQUIRY) => {
  if (
    EMAIL_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID" || 
    EMAIL_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY"
  ) {
    console.warn("EmailJS is not configured. Simulating success.");
    console.log("Payload:", templateParams);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    return { status: 200, text: "OK (Simulated)" };
  }

  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      templateId,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};
