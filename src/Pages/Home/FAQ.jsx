import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        question: "Are your products safe for sensitive skin?",
        answer:
            "Absolutely! All our products are formulated with gentle, natural ingredients, making them suitable for all skin types, including sensitive skin.",
    },
    {
        question: "Do you test on animals?",
        answer:
            "Never. NatureGlow is 100% cruelty-free. We never test on animals and ensure ethical sourcing for all our ingredients.",
    },
    {
        question: "How long does shipping take?",
        answer:
            "Standard shipping takes 3-5 business days within Bangladesh. International orders may take 7-12 business days depending on location.",
    },
    {
        question: "Can I return a product if it doesn't suit me?",
        answer:
            "Yes. We offer a 7-day return policy for unused products in original packaging. Please contact our support team for assistance.",
    },
];

const FAQ = () => {
    return (
        <div>
            <div className="bg-green-50 py-16 px-4 md:px-10 rounded-3xl shadow-inner my-20">
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