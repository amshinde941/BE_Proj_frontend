import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { SecondaryButton } from "../Button";

const DownloadReportCard = ({ rootElementId, downloadFileName }) => {
  const downloadFileDocument = () => {
    const input = document.getElementById(rootElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", [630, 680], true);
      pdf.addImage(imgData, "JPEG", 150, 0);
      pdf.save(`${downloadFileName}`);
    });
  };
  return (
    <div>
      <SecondaryButton onClick={downloadFileDocument}>Download</SecondaryButton>
    </div>
  );
};

export default DownloadReportCard;
