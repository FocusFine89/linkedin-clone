import { Col } from "react-bootstrap";

const JobsSidebar = () => {
  return (
    <Col md={2}>
      <div className="border border-light-subtle rounded-3">
        <div>
          <h6>
            {" "}
            <i class="bi bi-bookmark-fill"></i> Le mie offerte di lavoro
          </h6>
        </div>
        <div className="mt-4">
          <h6>
            <i class="bi bi-list"></i> Preferenze
          </h6>
        </div>
        <div className="mt-4">
          <h6>
            <i class="bi bi-file-earmark-check"></i> Valutazioni delle
            competenze
          </h6>
        </div>
        <div className="mt-4">
          <h6>
            <i class="bi bi-youtube"></i> Indicazioni per chi cerca lavoro
          </h6>
        </div>
      </div>
      <div className=" d-flex justify-content-evenly px-5 mt-3 border border-primary rounded-4">
        <i className="bi bi-pencil-square"></i>
        <h6>Pubblica offerta gratuita</h6>
      </div>
    </Col>
  );
};

export default JobsSidebar;
