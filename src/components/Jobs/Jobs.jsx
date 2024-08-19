import Job from "./job";

const Jobs = () => {
  return (
    <>
      <div className="containerJobs">
        <Job
          className="color1"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="green"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Patin"
        />
        <Job
          className="job"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          className="job"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          className="job"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          className="job"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Job
          className="job"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans Montana"
        />
        <Job
          className="job"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New-York"
        />
        <Job
          className="job"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
    </>
  );
};
export default Jobs;
