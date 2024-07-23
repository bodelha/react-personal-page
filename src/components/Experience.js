import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <ul>
        <li>
          <h3>Software Engineer at BYNE (June 2023 - June 2024)</h3>
          <p>Worked on an application where clients' managers can follow the activity history of BYNE's main product. Used containerization and K8s as the orchestrator, WhisperX, and FastAPI.</p>
        </li>
        <li>
          <h3>Senior Software Engineer at Epam Anywhere (October 2022 - April 2023)</h3>
          <p>Developed a User Management application using a microservice architecture, Terraform, AWS API Gateway, and Lambda Functions.</p>
        </li>
        <li>
          <h3>Experienced Software Engineer at Nomad (June 2022 - August 2022)</h3>
          <p>Enhanced scalability and stability of the solution, performed codebase refactors, and analyzed frequent bugs.</p>
        </li>
        <li>
          <h3>Python Software Engineer at BTG Pactual (October 2020 - June 2022)</h3>
          <p>Developed an investment portfolio comparison tool, involved in ETL processes, and implemented business rules.</p>
        </li>
        <li>
          <h3>Researcher at umgrauemeio (July 2019 - February 2020)</h3>
          <p>Conducted experiments with non-ML techniques of Computer Vision, prepared datasets, and managed the Omdena Challenge.</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
