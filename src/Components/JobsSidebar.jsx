import { Col } from "react-bootstrap";

const JobsSidebar = () => {
  return (
    <>
      <Col
        md={12}
        className="bg-light d-flex flex-column align-items-center border rounded"
      >
        <div className=" rounded-3 mt-3">
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
      </Col>
      <div className=" d-flex justify-content-evenly px-4 py-3 mt-3 border border-primary rounded-3 mb-3 ">
        <i className="bi bi-pencil-square"></i>
        <h6>Pubblica offerta gratuita</h6>
      </div>
    </>
  );
};

export default JobsSidebar;
