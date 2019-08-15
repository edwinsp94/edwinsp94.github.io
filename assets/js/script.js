$(document).ready(function() {
  html2canvas(document.getElementById("resume")).then(function(canvas) {
    var imgData = canvas.toDataURL("image/png");
    var imgWidth = 220;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;

    var doc = new jsPDF();

    doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    doc.save("Resume.pdf");
  });
});
