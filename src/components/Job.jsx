import { Row, Col, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Container fluid>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={9}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
        <Col>
          {/* creo un'elemento per aggiungere l'azienda ai preferiti
      devo andarmi a prendere il corrispettivo elemento da passare poi nel Redux Store */}
          <button
            className="border-0 mt-3"
            onClick={() => {
              dispatch({
                type: `ADD_TO_FAVOURITES`,
                payload: data,
              });
            }}
          >
            <i className="bi bi-star"></i>
          </button>
        </Col>
      </Row>
    </Container>
  );
};
export default Job;
