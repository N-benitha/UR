// Sample data for internship companies (replace with your data)
const internshipCompanies = [
    { name: 'TechCo', location: 'New York, NY', website: 'https://example.com/techco' },
    { name: 'MarketingX', location: 'Los Angeles, CA', website: 'https://example.com/marketingx' },
    { name: 'DataCorp', location: 'San Francisco, CA', website: 'https://example.com/datacorp' },
];

const companyList = document.getElementById('companyList');

// Function to display internship companies
function displayCompanies() {
    // Clear previous companies
    companyList.innerHTML = '';

    // Display companies
    internshipCompanies.forEach(company => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = company.website;
        link.textContent = `${company.name} - ${company.location}`;
        link.target = '_blank'; // Open links in a new tab
        listItem.appendChild(link);
        companyList.appendChild(listItem);
    });
}

// Initial display of companies
displayCompanies();
