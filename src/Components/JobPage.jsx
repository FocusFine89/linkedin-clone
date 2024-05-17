import { useState } from "react";
import { Alert, Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import JobsSidebar from "./JobsSidebar";

const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getFetchJobs = (searchJob) => {
    setLoading(true);

    fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?search=${searchJob}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Errore durante la fetch:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Row className="justify-content-center my-3">
      <Col xs={12} md={2}>
        <JobsSidebar />
      </Col>
      <Col xs={12} md={6}>
        <div className="mb-3 d-flex align-items-center">
          <input
            className="form-control me-2"
            placeholder="Cerca lavoro"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            className="btn btn-primary"
            onClick={() => getFetchJobs(search)}
          >
            Cerca
          </Button>
        </div>

        <Card>
          <Card.Body>
            <Card.Title>Offerte di Lavoro per te</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Sulla base del tuo profilo e della tua cronologia delle ricerche
            </Card.Subtitle>
            {loading ? (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Caricamento...</span>
                </Spinner>
              </div>
            ) : jobs.length > 0 ? (
              jobs.slice(0, 10).map((job) => (
                <Card key={job.id} className="border-0 mb-3">
                  <Card.Body>
                    <Card.Title>
                      <a href={job.url} className="text-decoration-none">
                        {job.title}
                      </a>
                    </Card.Title>
                    <Card.Text className="fs-6">{job.company_name}</Card.Text>
                    <Card.Text className="fs-6 text-muted">
                      {`${job.candidate_required_location} (${job.job_type})`}
                    </Card.Text>
                    <hr />
                  </Card.Body>
                </Card>
              ))
            ) : (
              <Alert variant="light" className="mt-4 fw-bold">
                Nessun risultato trovato
              </Alert>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default JobPage;
