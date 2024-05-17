import React, { useState } from 'react'
import '../SideBarHome.css'
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap'

const SideBarHome = () => {
  const [showMore, setShowMore] = useState(false)

  const newsList = [
    {
      title: 'Priorità sostenibilità per la Gen Z',
      time: '1 giorno fa - 1.593 lettori',
    },
    {
      title: 'Dove sventolano le bandiere blu',
      time: '17 ore fa - 134 lettori',
    },
    {
      title: 'Scalapay e Deutsche Bank uniscono l...',
      time: '5 giorni fa - 834 lettori',
    },
    {
      title: 'Come nasce un punto vendita autom...',
      time: '20 ore fa - 243 lettori',
    },
    {
      title: 'Alle smart city mancano tecnici',
      time: '1 giorno fa - 291 lettori',
    },
    { title: 'italia in vetta per congressi ospitati', time: '1 giorno fa' },
    { title: 'Se il paragone non aiuta', time: '2 ore fa - 2502 lettori' },
    {
      title: 'Avanzamenti nella medicina personalizzata',
      time: '6 giorni fa - 521 lettori',
    },
  ]

  const visibleNews = showMore ? newsList : newsList.slice(0, 4)

  return (
    <div className="sidebar-container d-flex flex-column justify-center mt-4">
      <div className="bg-white sidebar-content">
        <h4>LinkedIn Notizie</h4>
        <span className="subTitle">Storie principali</span>
        <div className="notizie-container d-flex flex-column">
          {visibleNews.map((news, index) => (
            <div key={index} className="notizia">
              <h6>{news.title}</h6>
              <span>{news.time}</span>
            </div>
          ))}
          <Button
            variant="secondary"
            id="btnDetails"
            className="btn p-0 mt-1"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Meno Dettagli' : 'Vedi Altro'}
          </Button>
        </div>
      </div>
      <div className="advertisement mt-3 ">
        <img
          src="https://i0.wp.com/academy.linkedinforbusiness.it/wp-content/uploads/2021/06/LinkedIn-Ads-strategy-2021.png?fit=1400%2C1400&ssl=1"
          alt="Pubblicità"
          href="#"
        />
      </div>
      <Row className="footerAside">
        <Col className="footer-col text-center col-6 pb-2">informazioni</Col>
        <Col className="footer-col text-center col-6 pb-2">accessibilità</Col>
        <Col className="footer-col text-center col-6 pb-2">
          centro assistenza
        </Col>
        <Col className="footer-col text-center col-6 pb-2">
          privacy e condizioni
        </Col>
        <Col className="footer-col text-center col-12 pb-2">
          opzioni per gli annunci pubblicitari
        </Col>
        <Col className="footer-col text-center col-6 pb-2">pubblicità</Col>
        <Col className="footer-col text-center col-6 pb-2">
          servizi alle aziende
        </Col>
        <Col className="footer-col text-center col-6 pb-2">
          scarica l app linkedin
        </Col>
        <Col className="footer-col text-center col-6">altro</Col>
      </Row>
    </div>
  )
}

export default SideBarHome
