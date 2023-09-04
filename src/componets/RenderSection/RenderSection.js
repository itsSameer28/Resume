import React, { useRef } from "react";
import Form from "../Form/Form";
import Resume1 from "../Resume1/Resume1";
import { jsPDF } from "jspdf";
import { Button } from "@mui/material";
import { useContext } from "react";
import { userContext } from "../../Context/Context";
import Resume2 from "../Resume2/Resume2";
import html2canvas from "html2canvas";
import Resume3 from "../Resume3/Resume3";
import Resume4 from "../Resume4/Resume4";
import Resume5 from "../Resume5/Resume5";

const div1Style = { width: "50vw" };
const mainDivStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "15px",
};
const RenderSection = () => {
  const { resume, setResume } = useContext(userContext);
  const reportTemplateRef = useRef(null);
  const exportPdf = () => {
    const input = document.getElementById("Template");
    html2canvas(input, {
      logging: true,
      letterRendering: true,
      useCORS: true,
      scale: 4,
    }).then((canvas) => {
      const imgWidth = 214;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imageData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imageData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("document.pdf");
    });
  };
  return (
    <div>
      <div style={mainDivStyle}>
        <Form />
        {resume === 1 && (
          <div style={div1Style}>
            <div
              ref={reportTemplateRef}
              style={{ padding: "20px" }}
              id="Template"
            >
              <Resume1 />{" "}
            </div>
          </div>
        )}
        {resume === 2 && (
          <div style={div1Style}>
            <div ref={reportTemplateRef} id="Template">
              <Resume2 />
            </div>
          </div>
        )}
        {resume === 3 && (
          <div style={div1Style}>
            <div ref={reportTemplateRef} id="Template">
              <Resume3 />
            </div>
          </div>
        )}
        {resume === 4 && (
          <div style={div1Style}>
            <div ref={reportTemplateRef} id="Template">
              <Resume4 />
            </div>
          </div>
        )}
        {resume === 5 && (
          <div style={div1Style}>
            <div ref={reportTemplateRef} id="Template">
              <Resume5 />
            </div>
          </div>
        )}
      </div>
      <Button className="button" onClick={() => exportPdf()}>
        Generate PDF
      </Button>
    </div>
  );
};

export default RenderSection;
