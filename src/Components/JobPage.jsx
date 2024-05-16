import { useState } from "react";
import { Alert, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import JobsSidebar from "./JobsSidebar";

const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  const getFetchJobs = (searchJob) => {
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
      });
  };

  return (
    <Row className="justify-content-center my-3">
      <Col xs={12} md={2}>
        <JobsSidebar />
      </Col>
      <Col xs={12} md={4}>
        <div className="mb-3 p-1">
          <input
            className="w-75 me-2 input-search-job"
            placeholder="search for a job"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button className="p-1" onClick={() => getFetchJobs(search)}>
            Search
          </Button>
        </div>

        <Card>
          <Card.Body>
            <Card.Title>Offerte di Lavoro per te</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Sulla base del tuo profilo e della tua cronologia delle ricerche
            </Card.Subtitle>
            {/* Annuncio di lavoro, TODO : Fare il map dopo */}
            {jobs.length > 0 ? (
              jobs.slice(0, 10).map((job) => {
                return (
                  <Card className="border-0">
                    <Card.Body>
                      <Card.Title>
                        <Card.Link href={job.url}>{job.title}</Card.Link>
                      </Card.Title>
                      <Card.Title className="fs-6">
                        {job.company_name}
                      </Card.Title>
                      <Card.Title className="fs-6 text-muted">
                        {`${job.candidate_required_location} (${job.job_type})`}
                      </Card.Title>
                    </Card.Body>
                    <hr />
                  </Card>
                );
              })
            ) : (
              <Alert variant="light" className="mt-4 fw-bold">
                Non ci sono ricerche
              </Alert>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default JobPage;
