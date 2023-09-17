// Sample FAQ data (replace with your data)
const faqs = [
    { question: 'How do I find internship opportunities?', answer: 'You can search for internships on job boards, company websites, and career fairs.' },
    { question: 'When should I start applying for internships?', answer: 'It's a good idea to start applying at least 3-6 months before your desired internship start date.' },
    { question: 'What should I include in my internship resume?', answer: 'Include your education, relevant coursework, skills, and any previous internship or work experience.' },
];

const faqList = document.getElementById('faqList');

// Function to display FAQs
function displayFAQs() {
    // Clear previous FAQs
    faqList.innerHTML = '';

    // Display FAQs
    faqs.forEach(faq => {
        const listItem = document.createElement('li');
        const question = document.createElement('div');
        question.classList.add('question');
        question.textContent = faq.question;
        const answer = document.createElement('div');
        answer.classList.add('answer');
        answer.textContent = faq.answer;
        listItem.appendChild(question);
        listItem.appendChild(answer);
        faqList.appendChild(listItem);
    });
}

// Initial display of FAQs
displayFAQs();
