const Job = (props) => {
  return (
    <>
      <div
        className="containerJob"
        style={{ border: `10px solid ${props.color}` }}
      >
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
