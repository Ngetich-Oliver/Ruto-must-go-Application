import { Link } from "react-router-dom";
import Flying from "./assets/IMG-20250707-WA0001.jpg"
import Wantam from  "./assets/wantam.avif"
function FLying()
{
return(
  <div>
<nav className="navbar">
        <h1>Republic of Abductistan</h1>
        <div className='navbar-links'>
        <ul>
        <li><Link to="/Kasongo">Corruption</Link></li>
        <li><Link to="/AbuseOffice">Abuse of Power</Link></li>
        <li><Link to="/Murder">Murder</Link></li>
        <li><Link to="FLying">Flying or Lying</Link></li>
        </ul>
        </div>
      </nav>
      <section id="corrupt">
      <h2>The Flying President</h2>
      <p>One of the famous quotes since the administration is that if El Chapo is not lying ,then he is flying.They call him kiguu na njia.After being sworn i the guy has visited various countries with little to show for it.He is a flying president beacuse of:</p>
      <figure>
        <img src={Flying} alt="kasongo flying" className="fifth" />
        <figcaption>Photo :Travel vlogger Kasongo on one of his usual trips abroad.</figcaption>
      </figure>
      
      <ol className="scandal-list">
        <li><strong>State Visit to America : </strong> The imbecile wasted billions of tax payers dollars to visit the united states using a private jet.Despite claiming his 'friends' paid for it, no one is buying the explanation because it raises ethical issues of how a president can receive gifts worth billions of dollars from a foreign country.This contradicts the consitutional provisions on value of gifts to be accpeted by state officers.The trip also brought little economic or military value to the country.Despite being declared a Major Non-Nato ally,the Kenya Defence Forces has not received any modern equipments from United States rather they received more flying coffins like the one which killed the then CDF General Francis Ogolla.Further our Airforce and navy is in pits despite threats to our soveregnity  the rogue and failed Federal Republic of somalia infested by Al Shabaab.Its an abusive relationship,we give them bases on our soil in excahnge for nothing.The bastard son of Sarah was on tourism for 5 days.What a shame</li>
        <li><strong>Useless Summits : </strong> The Abductor in chief has attended many uselss summits one of them being Ukraine peace summit.The cold blooded muderer despite having little to no influnece over the conflict went there and talked nonsense.Despite the summmit being ridiculous due to the absence of  the Russian federation,Kaunda Uongo Man saw it wise to waste taxpayers money to experience Swiss Mountains.That is on top of Italy Africa summit ,South Korea- Africa Summit and many many other countries he has visited.He is a vlogging president who like a dog is summoned by peanuts of his western masters.Exceptionally shameful. </li>
        <li><strong>Useless Trips to China : </strong> The bastard has been to China more than 5 times in the last 3 years and yet he has not brought any tangible benefits to the country.China is a country that has been known to give loans to African countries with little to no returns and yet the bastard keeps going there. He is a useless president who is only interested in flying around the world and lying to Kenyans about his zero achievements.Its such a shame that he could not learn from China how do uplift millions from poverty via manufucturing and eliminating corruption fro governance system</li>
        </ol>
        <h2>Kasongo's Lies</h2>
        <p>Popular known as mtukufu lies because of his endless lies always like an AI  of lies generated instantly which appears to have some truth in it to someone who is not familiar to his lies. Such a confident liar thunder should strike him
        </p>
        <figure>
      <img src={Wantam} alt="rhe liar" className="fifth"/>
      <figcaption>A picture of kasongo's mouth ready to lie</figcaption>
      </figure>
      <ol className="scandal-list">
      <li><strong>No Extra-Judicial killings : </strong> During his campaign period the bastard had stated that during his term if elected there'll be no exta-judicial killings.Contrary to this after he was elected Kenya witnessed an increase in this extra judicial killings such as during the Anti finance bill demonestration in 2024 many were killed under his orders by the police in the streets of Nairobi and after the justified angry citizens(Legends) went to have some small talks with the MPIGS but were met with brutal force of the police but regardless the comrades occuppied parliament making Kenyans proud .Recently again the murder of teacher ALBERT OJWANG under his orders and his fellow minions in Police custody </li>
      <li><strong>Low Cost of Living : </strong>The liar being a cheater in sheep clothings, a title Hustler;bringing together kenyans as a person who understood their plights and struggles they go through each and everyday in their lives from the from women,children to men.Promise this Kenyans of a brigher future they all saw  him  as the fit person to be elected and indeed kenyans using their emotions and not brains elected him.It did take a long time before the liar show them dust.   </li>
      <li><strong>Overexpenditure : </strong>The satanic guy had promised kenyas than he'll significanly reduce goverment expenditure where necessary.Soon as he was sworn in ,the next day he had already travelled to Britain ,Perhaps may this was a red flag to kenyans though Kenyans did see this.The liar also added a number of advisers,making foreign unnecessary trips,Renovating statehouse yearly without even considering the struggles taxpayers go through, such a person who dishonour history and the plights of his people; a greedy hyena eating even his neigbours in his home Sugoi.Deducting so much from Kenyans with no solid evidence of what he has done his three year reign</li>
      <li><strong>Debt Increase</strong></li>

      </ol>
  </section>
  <marquee>In Conclusion; Ruto must go</marquee>
             <hr/>
      
             <div>
       <footer style={{ textAlign: 'center', fontSize: '14px', color: '#888', padding: '10px 0' }}>&copy; Ngetich Oliver 2025</footer>
  </div>
  
  </div>
);
}
export default FLying;