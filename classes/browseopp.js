// Sample data for internship opportunities (replace with your data)
const internships = [
    { title: 'Software Developer Intern', company: 'TechCo', location: 'New York, NY' },
    { title: 'Marketing Intern', company: 'MarketingX', location: 'Los Angeles, CA' },
    { title: 'Data Analyst Intern', company: 'DataCorp', location: 'San Francisco, CA' },
];

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const internshipList = document.getElementById('internshipList');

// Function to display internships based on search keywords
function displayInternships(keywords) {
    // Clear previous results
    internshipList.innerHTML = '';

    // Filter internships based on keywords
    const filteredInternships = internships.filter(internship => {
        return (
            internship.title.toLowerCase().includes(keywords.toLowerCase()) ||
            internship.company.toLowerCase().includes(keywords.toLowerCase()) ||
            internship.location.toLowerCase().includes(keywords.toLowerCase())
        );
    });

    // Display filtered internships
    filteredInternships.forEach(internship => {
        const listItem = document.createElement('li');
        listItem.textContent = `${internship.title} at ${internship.company}, ${internship.location}`;
        internshipList.appendChild(listItem);
    });
}

// Event listener for search button click
searchButton.addEventListener('click', () => {
    const keywords = searchInput.value;
    displayInternships(keywords);
});

// Initial display of internships (all)
displayInternships('');
