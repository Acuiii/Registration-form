// function generatePDF(){
//     const element = document.getElementById("form");

//     html2pdf()
//     .from(element)
//     .save();
// }

// function generatePDF() {
//     const doc = new jsPDF();
//     doc.text('Rental Agreement Signature', 105, 10, { align: 'center' });
//     doc.fromHTML(document.getElementById('rentalForm'), 15, 15);
//     doc.save('rental_agreement.pdf');
// }
function hide() {
  const element = document.getElementById("hideElement");
  element.style.display = 'none';
}


function generatePDF() {

    // containner rentalForm
    const element = document.getElementById("rentalForm");
    const options = {
      margin: 1,
      filename: 'RentalForm.pdf',
      image: { type: 'jpeg', quality: 0.98},
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    html2pdf().from(element).set(options).save();
  }

//   function saveFile() {
//     // Get the input element
//     var input = document.getElementById('inputGroupFile04');

//     // Check if any file is selected
//     if (input.files.length > 0) {
//         // Get the first file (assuming only one file is selected)
//         var file = input.files[0];

//         // Create a new FileReader
//         var reader = new FileReader();

//         // Define the onload event handler
//         reader.onload = function(event) {
//             // Create a new Blob from the file content
//             var blob = new Blob([event.target.result], { type: file.type });

//             // Create a temporary anchor element
//             var link = document.createElement('a');

//             // Set the href attribute to the Blob URL
//             link.href = window.URL.createObjectURL(blob);

//             // Set the download attribute with the file name
//             link.download = file.name;

//             // Append the anchor element to the body
//             document.body.appendChild(link);

//             // Trigger a click event on the anchor element
//             link.click();

//             // Remove the anchor element from the body
//             document.body.removeChild(link);
//         };

//         // Read the file as ArrayBuffer
//         reader.readAsArrayBuffer(file);
//     } else {
//         alert('Please select a file to upload.');
//     }
// }
