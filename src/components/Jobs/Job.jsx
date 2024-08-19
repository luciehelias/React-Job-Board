const Job = (props) => {
  return (
    <>
      <div className="containerJob" style={{ border: "5px solid color1" }}>
        <h3>{props.title}</h3>
        <div className="information">
          <p>
            {props.contractType} - {props.country} - {props.city}
          </p>
        </div>
      </div>
    </>
  );
};
export default Job;
