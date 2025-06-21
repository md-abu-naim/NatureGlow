import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Are your skincare products suitable for all skin types?",
    answer:
      "Yes! Our products are formulated with natural and non-irritating ingredients like green tea, aloe vera, and rose water, making them safe for dry, oily, and sensitive skin.",
  },
  {
    question: "Do your hair care products help with dandruff and hair fall?",
    answer:
      "Absolutely. Our Herbal Strengthening Hair Oil and Aloe Neem Shampoo are made with ayurvedic herbs like amla, neem, and bhringraj which target scalp health and reduce hair fall & dandruff.",
  },
  {
    question: "Are your lip care products safe for daily use?",
    answer:
      "Yes. Our lip balms and butters are made with shea butter, mint, and rose oil. They're petroleum-free and gentle enough for everyday use, even on chapped lips.",
  },
  {
    question: "How do I know which product is right for me?",
    answer:
      "We recommend starting with our Face Care or Body Care categories. Each product includes a short bio and detailed features to help you choose based on your skin concern.",
  },
  {
    question: "Do your body care products contain synthetic exfoliants?",
    answer:
      "No. Our body scrubs, like the Exfoliating Coffee Scrub, are made with natural ingredients and contain no microplastics or harsh chemicals.",
  },
];

const FAQ = () => {
    return (
        <div>
            <div className="bg-green-50 py-16 px-4 md:px-10 rounded-3xl shadow-inner my-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-green-800">Frequently Asked Questions</h2>
                    <p className="text-green-600 text-sm mt-2">Your skincare queries—answered naturally.</p>
                </div>

                {/* Accordion */}
                <div className="space-y-4">
                    {
                        faqs?.map(faq => <div key={faq.question} className="collapse collapse-arrow bg-white border border-green-200 shadow-sm rounded-xl">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold text-green-800">
                            {faq.question}
                        </div>
                        <div className="collapse-content text-gray-600 text-sm leading-relaxed">
                            {faq.answer}
                        </div>
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FAQ;