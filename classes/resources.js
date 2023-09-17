// Sample data for internship resources (replace with your data)
const internshipResources = [
    { title: 'Internship Search Tips', url: 'https://example.com/tips' },
    { title: 'Resume Writing Guide', url: 'https://example.com/resume-guide' },
    { title: 'Interview Preparation Checklist', url: 'https://example.com/interview-checklist' },
];

const resourceList = document.getElementById('resourceList');

// Function to display internship resources
function displayResources() {
    // Clear previous resources
    resourceList.innerHTML = '';

    // Display resources
    internshipResources.forEach(resource => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = resource.url;
        link.textContent = resource.title;
        link.target = '_blank'; // Open links in a new tab
        listItem.appendChild(link);
        resourceList.appendChild(listItem);
    });
}

// Initial display of resources
displayResources();
