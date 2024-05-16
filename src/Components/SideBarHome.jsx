import React, { useState } from "react";
import "../SideBarHome.css"; 
import Button from 'react-bootstrap/Button';

const SideBarHome = () => {
  const [showMore, setShowMore] = useState(false);

  const newsList = [
    { title: "Priorità sostenibilità per la Gen Z", time: "1 giorno fa - 1.593 lettori" },
    { title: "Dove sventolano le bandiere blu", time: "17 ore fa - 134 lettori" },
    { title: "Scalapay e Deutsche Bank uniscono l...", time: "5 giorni fa - 834 lettori" },
    { title: "Come nasce un punto vendita autom...", time: "20 ore fa - 243 lettori" },
    { title: "Alle smart city mancano tecnici", time: "1 giorno fa - 291 lettori" },
    { title: "italia in vetta per congressi ospitati", time: "1 giorno fa" },
    { title: "Se il paragone non aiuta", time: "2 ore fa - 2502 lettori" },
    { title: "Avanzamenti nella medicina personalizzata", time: "6 giorni fa - 521 lettori" }
  ];

  const visibleNews = showMore ? newsList : newsList.slice(0, 4);

  return (
    <div className="sidebar-container d-flex justify-center">
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
          <Button variant="secondary"
            id="btnDetails"className="btn p-0 mt-1"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Meno Dettagli" : "Vedi Altro"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBarHome;
