$(document).ready(function() {
  html2canvas(document.getElementById("resume")).then(function(canvas) {
    var doc = new jsPDF("p", "mm", "a4");
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    var imgData = canvas.toDataURL("image/png");
    doc.addImage(imgData, "PNG", 0, 0, width, height);
    doc.save("Resume.pdf");
  });
});
