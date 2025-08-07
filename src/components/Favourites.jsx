import { useDispatch, useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { Row, Col, Container } from "react-bootstrap";

const Favourites = () => {
  const jobs = useSelector((state) => {
    return state.favourites.content;
  });

  console.log(jobs);

  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-4 border border-3 border-danger-subtle rounded-3 w-50 text-center ms-3 bg-dark shadow-lg p-2">
        <h1 className="fs-3 text-light">Pagina Preferiti</h1>
      </div>
      {/* aggiungo l'azienda che ho selezionate per inserirlo nella lista dei preferiti */}
      <Container>
        <Row>
          <Col xs="12">
            <ListGroup>
              {jobs.map((job, i) => {
                return (
                  <ListGroup.Item key={i} className="my-3">
                    <div className="d-flex flex-column">
                      <h2>{job.title}</h2>
                      <h4>{job.company_name}</h4>
                      <h4>{job.url}</h4>
                    </div>
                    <div className="d-flex flex-column">
                      <p>
                        {job.category}-{job.job_type}
                      </p>
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_JOB_FAVOURITE",
                          payload: job._id,
                        });
                      }}
                    >
                      Remove
                    </button>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Favourites;
