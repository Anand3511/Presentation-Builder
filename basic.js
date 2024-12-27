

document.getElementById('generate').addEventListener('click', function () {
    const title = document.getElementById('company-title').value;
    const content = document.getElementById('presentation-content').value;

    if (title.trim() === "" || content.trim() === "") {
        alert('Please fill in both fields.');
        return;
    }

    document.getElementById('title-output').textContent = title;
    document.getElementById('content-output').textContent = content;
    document.getElementById('download-pdf').style.display = 'block';
});

// Download the presentation as a PDF
document.getElementById('download-pdf').addEventListener('click', function () {
    const element = document.getElementById('presentation'); // Select the presentation element
    const options = {
        margin: 1,
        filename: 'presentation.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Use html2pdf to create and download the PDF
    html2pdf().set(options).from(element).save();
});