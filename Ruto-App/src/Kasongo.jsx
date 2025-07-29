import React, { useState, useEffect } from 'react';
import profile from './assets/profile.jpeg';
import {Link} from "react-router-dom";

// Define getTimeLeft outside the component
function getTimeLeft() {
  const electionDate = new Date('2027-08-12T00:00:00');
  const now = new Date();
  const difference = electionDate - now;
  const diff = Math.max(difference, 0);

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function Kasongo() {
  const [countdown, setCountdown] = useState(getTimeLeft());

  useEffect(() => {
    // setInterval is necessary to update the countdown every second
    const intervalId = setInterval(() => {
      setCountdown(getTimeLeft());
    }, 1000);

    // Cleanup interval on unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <h1>Head of the Republic of Abductistan</h1>
        <div className='navbar-links'>
        <ul>
        <li><Link to="/Kasongo">Corruption</Link></li>
        <li><Link to="/AbuseOffice">Abuse of Power</Link></li>
        <li><Link to="/Murder">Murder</Link></li>
        <li><Link to="/FLying">Flying or Lying</Link></li>
        </ul>
        </div>
      </nav>
      <div id='mid-body'>
        <div className='prof'>
          <img src={profile} alt="Kasongo Profile" className='profile-img' />
          <h3 style={{color:"black"}}> Wantam Samoei Ruto</h3>
           <hr style={{color:"purple"}}/>
       
          <p style={{color:"black", fontFamily:"sans-serif"}}>The head of syndicate and terrorist organistaion(UDA) which illegally occupies power in Kenya. </p>
        </div>
        <div id='clock'>
          <h1>Count down to Kasongo's Exit</h1>
          <p >
           {countdown.days} Days, {String(countdown.hours).padStart(2, '0')} Hours,{' '}
            {String(countdown.minutes).padStart(2, '0')} Minutes,{' '}
            {String(countdown.seconds).padStart(2, '0')} Seconds
          </p>
      
        </div>
      </div>
    
       <section id="corrupt">
        <h2>Corruption Scandals Explained</h2>
        <p>The criminal mentioned above is associated with various corruption scandals in which the republic has lost trillions of shillings.It is inconceivable that he is not yet in jail or rather executed via a firing squad or hanged in a public place to ensure indeed he dies .The scandals include :</p>
        <ol className="scandal-list">
          <li>
            <strong>Arror and Kimwarer dam scandals:</strong> The people of Elgeiyo Marakwet and Baringo were on the verge of acquiring piped water for the first time in their lives, but the criminal mentioned above stole billions of shillings from the project, which led to the collapse of the dam projects and left the people without water. The criminal is responsible for the suffering and deaths of many people who died from lack of water and related illness.This further fuels the continous violence in the region due to water scarcity and the criminal's actions have led to the loss of billions of shillings in the republic's coffers.He is a natoinal security threat and should be arrested and charged with treason for his actions against the republic.Murkomen also played a role in the scandal by facilitating the theft of funds and covering up the criminal's actions.
          </li>
          <li>
            <strong>NCPB maize scandal:</strong> The bastard undercut the farmers by importing maize at a lower price from his farms in the Democratic republic of Congo together with his satanic family, which led to the collapse of the maize industry in the republic and the loss of billions of shillings.Farmers were left counting losses and many were forced to sell their land and livestock to pay debts incurred from loans taken to finance maize farming.The man caused immense stress and suffering to the farmers and their families, leading to many deaths from stress-related illnesses.Wallahi he will not see the end of his life, he will die a painful death and his family will suffer the consequences of his actions.
          </li>
          <li>
            <strong>Fake fertilizer:</strong> The criminal mentioned above is responsible for the repackaging and distrubution of fake fertilizer, which led to significant losses for farmers and agricultural sectors.He is therefore not only responsible for food insecurity but also for the loss of billions of shillings in the agricultural sector.He and his syndicate are also responsible for the death of many farmers who used the fake fertilizer.The stole fertilizer donation from Russian federation and mixed with soil and chicken droppings to make it look like fertilizer and then repackaged it for sale.Mya Allah curse him and his syndicate for the rest of their lives.
          </li>
          <li>
            <strong>Murumbi land Grabs:</strong> The Satanic guy mentioned above has no regard to elders.He forcefully grabbed land from the former Vice President Joseph Murumbi leaving his family landless,hence squatters in this country,.The man's instaiable greed and hunger for power has led to the suffering of many people in the republic, especially the poor and vulnerable.He has no regard for the law and has used his position to enrich himself at the expense of the people of Abductistan,whom he also abducts and tortures for his own pleasure and amusement.He is the reincarnation of the devil and should be treated as such.Kilgoris based Mobuttu Sseko.
          </li>
          <li>
            <strong>Weston Hotel land saga:</strong> The demonic criminal above second to only <a></a> is responsible for fraudulent acquisition of land from Civil Aviation authority  neccessary for expansion of Wilson airport.The man is largely responsible for Kenya lacking proper civil aviation,his hotel on top of it sitting on what should be runway blocks view of airtraffic contro tower endangering millions of lives of patriotov citizens of this great nation,of course Allah will continue cursing him.     
             </li>
             <li> <strong> Adani Files : </strong> The demonic guy was mentioned in the Adani files where he was pushing for the corrrupt and notorious conglomarate to modernise JKIA and take control of it for 30 years.The deal was shrouded in mystery and despite that Kasongo kept pushing irrespective of the fact that JKIA is a national security asset and can't be handed over to a foreign corporate.Under pressure from Kenyans he was forced to withdraw from lease agreements but the patriots are watching him,he cannot  and should not be trusted.He is cunning,lying and sly.</li>
        </ol>

       </section>
       <marquee>In Conclusion; Ruto must go</marquee>
       <hr/>
       <footer style={{ textAlign: 'center', fontSize: '14px', color: '#888', padding: '10px 0' }}>&copy; Ngetich Oliver 2025</footer>
    </div>
  );
}
export default Kasongo;