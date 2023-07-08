import styles from "./Aikyam.module.css";
import prithvi1 from "../Images/prithvi1.jpg";
import prithvi2 from "../Images/prithvi2.jpg";
import prithvi3 from "../Images/prithvi3.jpg";
import aikyam1 from "../Images/aikyam1.jpg";
import aikyam2 from "../Images/aikyam2.jpg";
import aikyam3 from "../Images/aikyam3.jpg";
import udaan1 from "../Images/udaan1.jpg";
import udaan2 from "../Images/udaan2.jpg";
import udaan3 from "../Images/udaan3.jpg";
import NEU1 from "../Images/NEU1.png";
import NEU2 from "../Images/NEU2.png";
import NEU3 from "../Images/NEU3.png";
import man1 from "../Images/man1.jpg";
import man2 from "../Images/man2.jpg";
import man3 from "../Images/man3.jpg";
import safher1 from "../Images/safher1.jpg";
import safher2 from "../Images/safher2.jpg";
import safher3 from "../Images/safher3.jpg";

const Aikyam = ({ name }) => {
  console.log(name);
  const content = {
    Aikyam: [
      "Communal conflicts, hatred, and violence have been a burning issue in today's India, even after 75 years of Independence. Recent examples of such hatred can be found in various parts of India, and mob lynchings see headlines in newspapers almost every day. The fault lines in the society not only affect peace and harmony but also negatively impact the image of the country and the business attraction power of the place, thus affecting the economy and overall lives of people. This situation needs to change. Keeping the above in mind, Alcheringa will host a new campaign called AIKYAM - Our Unity lies in our Diversity. Our campaign aims at spreading Communal Peace and Harmony in society through performances, panel discussions, poster-making competitions, and organizing a fundraiser for people affected due to communal violence. We will also be hosting several live interaction sessions with insightful personalities.",
      [aikyam1, aikyam2, aikyam3],
    ],
    SAFHER: [
      "Women have shattered barriers, venturing into space and assuming leadership roles as Heads of States, unequivocally proving their equality with men. However, the unfortunate truth persists: women are not safe in their immediate surroundings. Our society is marred by escalating violence, where the fear of crime lingers. In response, Alcheringa initiated SafHer, a campaign intertwining women's safety, upliftment, and empowerment. SafHer empowers women to raise their voices, hold perpetrators accountable, and create a society where they flourish with confidence and freedom, uniting safety and empowerment to realize their true potential.",
      [safher1, safher2, safher3],
    ],
    MANSHAKTI: [
      "Alcheringa IIT Guwahati, has taken a small step on the long journey towards mental wellness. Manshakti is a mental health awareness and wellness campaign which aims to empathize and understand the people who suffer. During this time of a global pandemic, our health care heroes are striving to battle against the invisible enemy!The only solace they have is our love and support motivating them to keep working. A few words of appreciation is the least we can do to help them fight the stress and inhibitions and empower their minds in this state of crisis! Through Manshakti, we managed to collect the motivating messages and greetings from public and were sent to the Covid-19 doctors and staff.",
      [man1, man2, man3],
    ],
    UDAAN: [
      'Originated under the name "Bachpan" in 2011, Udaan is a social initiative taken by the students of IIT Guwahati which aims on delivering hope to those who never had the opportunity. In the past it has contributed towards the upliftment of the underprivileged through the conduction of various educational workshop and innovational programs. During their vacations, students from IIT Guwahati and several other colleges conducted Udaan where they reached out to various underprivileged children from orphanages, villages and slums in their locality, and spared a weekend to give flights to their hopes with the help of various documentaries, presentations, games and motivation.',
      [udaan1, udaan2, udaan3],
    ],
    Prithvi: [
      "Climate change is the greatest threat to our existence in our short history on this planet. Each of our daily actions affects the environment in some way or the other. Making people realize their role in the large movement against climate change, by educating them through activities that draw their attention towards issues that affect our planet, can make this world a better place to live in. In solidarity with the international activism about climate change, Team Alcheringa launched Project Prithvi, where we believe in the principle of living life simply and saving the world from climate change.",
      [prithvi1, prithvi2, prithvi3],
    ],
    "NORTH-EAST UNVIELD": [
      "North East India is a microcosm of India with its own diversity in terms of languages, culture, arts and religion. There is a need to promote and unveil the true potential of this part of country, which is still unexplored by many. Our campaigns hits the nail on its head by promoting the shared identity and culture that this part of country shares with other part of the nation, by showcasing, through videos and posters, the rich and diverse food and travel destinations and by running information campaigns to develop entrepreneurship and to remove stereotypes from the minds of general people about this part of country.",
      [NEU3, NEU2, NEU1],
    ],
  };
  return (
    <div>
      <div className={styles.heading}>{name}</div>
      <div className={styles.bodypart}>
        <div className={styles.leftpart}>{content[name][0]}</div>
        <div className={styles.rightpart}>
          <img
            src={content[name][1][0]}
            alt=""
            style={{
              objectFit: "cover",
              height: "20vw",
              width: "46vw",
              overflow: "hidden",
              borderTopRightRadius: "5vw",
              borderBottomLeftRadius: "5vw",
            }}
          />
          <div style={{ display: "flex" }}>
            <img
              src={content[name][1][1]}
              alt=""
              style={{
                objectFit: "cover",

                height: "15vw",
                width: "23vw",
                overflow: "hidden",
                borderTopRightRadius: "5vw",
                borderBottomLeftRadius: "5vw",
                marginTop: "2vw",
                marginRight: "1vw",
              }}
            />
            <img
              src={content[name][1][2]}
              alt=""
              style={{
                objectFit: "cover",

                height: "15vw",
                width: "22vw",
                marginTop: "2vw",
                marginLeft: "1vw",
                overflow: "hidden",
                borderTopRightRadius: "5vw",
                borderBottomLeftRadius: "5vw",
              }}
            />
          </div>
        </div>
        <div className={styles.bgdclass}>
          <div className={styles.colorbgd}></div>
          <div className={styles.dotsgreen}></div>
          <div className={styles.rectgreen}></div>
        </div>
      </div>
    </div>
  );
};

export default Aikyam;
