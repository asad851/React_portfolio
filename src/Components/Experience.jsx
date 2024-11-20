import React from "react";

function Experience() {
  return (
    <section class="experience mb-3" id="experience">
      <div class="container">
        <div class="row">
          <div size="12" class="col">
            <div>
              <div class="">
                <h2>Experience</h2>
                <h5 className="mb-0">CARESYNC</h5>
                <h6 className="mt-0">
                  Founding Engineer - Frontend Development
                </h6>
                <p class="mt-2 text-left">
                  I contributed to the development of a healthcare platform
                  aimed at optimizing patient discharge processes for NHS
                  London, significantly improving efficiency and reducing
                  unnecessary costs. Key accomplishments include:
                </p>

                <p class="mt-2 text-left">
                  <span class="voilet-text">Building from Scratch:</span>{" "}
                  Designed and developed the entire frontend architecture,
                  implementing state management, centralized API calling through
                  custom-built Axios interceptors, and reusable custom hooks.
                </p>
                <p class="mt-2 text-left">
                  <span class="voilet-text">
                    {" "}
                    Authentication and Security:{" "}
                  </span>{" "}
                  Engineered secure user authentication flows, ensuring
                  authenticated users are routed appropriately, while
                  unauthorized users remain restricted.
                </p>
                <p class="mt-2 text-left">
                  <span class="voilet-text">
                    {" "}
                    Streamlined Patient Discharge Process:
                  </span>{" "}
                  Streamlined Patient Discharge Process: Designed and
                  implemented a step-by-step form workflow to expedite the
                  discharge procedure, reducing the time required from 7-8 days
                  to just 7 hours.
                </p>
                <p class="mt-2 text-left">
                  <span class="voilet-text"> Dynamic Form Tracking:</span>{" "}
                  Developed multiple forms on the frontend, incorporating a
                  circular progress bar to visually represent the percentage of
                  form completion, enhancing user engagement and clarity.
                </p>
                <p class="mt-2 text-left">
                  <span class="voilet-text">
                    {" "}
                    Integrated Transportation Service:
                  </span>{" "}
                  Built a pickup and drop-off service integrated with mapping
                  functionality to facilitate seamless patient transfers to
                  their homes post-discharge.
                </p>
                <p class="mt-2 text-left">
                  <span class="voilet-text"> Cost and Time Savings:</span> The
                  initiative saved substantial government funds by accelerating
                  discharge procedures, minimizing bed occupancy rates, and
                  reducing administrative delays.
                </p>
                <p>
                  This project directly improved healthcare operational
                  efficiency, alleviating stress on healthcare workers while
                  ensuring patients received prompt and smooth transitions out
                  of the hospital.
                </p>
              </div>
              <div>
                <h5 className="mb-0">UNSUIT LEGAL TECHNOLOGIES PRIVATE Ltd</h5>
                <h6 className="mt-0">
                  Founding Engineer - Frontend Development
                </h6>
                <p>
                  As a founding engineer, I have been instrumental in
                  architecting and developing a robust frontend ecosystem for a
                  legal AI platform aimed at streamlining the workflow for legal
                  professionals. My contributions include:
                </p>
                <p class="mt-2 text-left">
                  <span class="voilet-text">Building from Scratch:</span>{" "}
                  Designed and developed the entire frontend architecture,
                  implementing state management, centralized API calling through
                  custom-built Axios interceptors, and reusable custom hooks.
                </p>
                <p class="mt-2 text-left">
                  <span class="voilet-text">
                    {" "}
                    Authentication and Security:{" "}
                  </span>{" "}
                  Engineered secure user authentication flows, ensuring
                  authenticated users are routed appropriately, while
                  unauthorized users remain restricted. Implemented cookie-based
                  session management with automatic logout after 48 hours for
                  enhanced security.
                </p>
                <p class="mt-2 text-left">
                  <span class="voilet-text"> AI Chat Integration: </span> Built
                  an AI-powered chatbot enabling users to query specific
                  documents. Users can select a document and ask contextual
                  questions, streamlining information retrieval.
                </p>
                <p class="mt-2 text-left">
                  <span class="voilet-text">
                    File Manager with Hierarchical Tree Structure:
                  </span>{" "}
                  Built Developed a sophisticated file and folder manager with
                  CRUD operations, leveraging a tree-based hierarchy for
                  intuitive navigation. Integrated seamless file uploads from
                  local devices, Google Drive, Dropbox, and OneDrive.
                </p>
                <p class="mt-2 text-left">
                  <span class="voilet-text">Editable Data Tables:</span> Created
                  a feature to display tabular data with editable cells, powered
                  by a rich-text editor, to manage critical document-related
                  information such as dates and key details.
                </p>
                <p class="mt-2 text-left">
                  <span class="voilet-text">
                    Document Management Enhancements:
                  </span>{" "}
                  Built a document splitter to enable backend processing of
                  large files. Developed a document merger feature to combine
                  files for streamlined sharing and collaboration.
                </p>
                <p class="mt-2 text-left">
                  <span class="voilet-text">Efficiency Gains:</span> Reduced
                  document review time for legal professionals by 20 man-hours
                  per week through intuitive document management tools.
                </p>
                <p>
                  My work has significantly improved the efficiency and
                  usability of our platform, making it a trusted solution for
                  legal practitioners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
