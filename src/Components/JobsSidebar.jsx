import { Col } from 'react-bootstrap'
import '../JobsSidebar.css'

const JobsSidebar = () => {
  return (
    <>
      <Col
        md={12}
        className="bg-light d-flex flex-column align-items-center border rounded p-4"
      >
        <div className="rounded-3 mt-3 ">
          <div className="d-flex align-items-center">
            <i className="bi bi-bookmark-fill me-2"></i>
            <h6 className="m-0">Le mie offerte di lavoro</h6>
          </div>
          <div className="mt-4">
            <div className="d-flex align-items-center">
              <i className="bi bi-list me-2"></i>
              <h6 className="m-0">Preferenze</h6>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex align-items-center">
              <i className="bi bi-file-earmark-check me-2"></i>
              <h6 className="m-0">Valutazioni delle competenze</h6>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex align-items-center">
              <i className="bi bi-youtube me-2"></i>
              <h6 className="m-0">Indicazioni per chi cerca lavoro</h6>
            </div>
          </div>
        </div>
      </Col>
      <div className="free-job-offer d-flex align-items-center justify-content-center px-4 py-3 mt-3 border border-primary rounded-3 mb-3">
        <i className="bi bi-pencil-square me-2"></i>
        <span>Pubblica un'offerta gratuita</span>
      </div>
    </>
  )
}

export default JobsSidebar
