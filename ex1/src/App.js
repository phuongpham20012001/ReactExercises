import styles from "./App.module.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import NewsNotification from "./components/NewsNotification";
import SideMenu from "./components/SideMenu";
import somedays12 from "./Images/somedays12.jpg";

function App() {
  const newsNotificationData = [
    {
      topic: "Analysis",
      body: "Is one finnish fighter euivalent to ten russian? ",
    },
    {
      topic: "Coronavirus",
      body: "New infection daily 49",
    },
    {
      topic: "Ice Hockey",
      body: "Jokerit skips the tournament ",
    },
  ];
  const mainSectionData = [
    {
      title: "Koronavirus",
      article:
        "Työväenpuolue voittamassa vaalit, valta vaihtuu Norjassa Kahdeksan vuotta vallassa ollut Erna Solbergin porvallinen Høyre-puolue on joutumassa oppositioon.   voittamassa vaalit, valta vaihtuu Norjassa Kahdeksan vuotta vallassa ollut Erna Solbergin porvallinen Høyre-puolue on joutumassa oppositioon.",
      image: somedays12,
    },
    {
      title: "Työväenpuolue",
      article:
        "Suomi sai uuden Michelin-ravintolan – Finnjävel Salongin tarjonta ylistää mummojen kokkausta.Suomi sai uuden Michelin-ravintolan – Finnjävel Salongin tarjonta ylistää mummojen kokkausta",
      image: somedays12,
    },
  ];
  const SideMenuData = [
    {
      title: "Luetuimmat",
      content:
        "21-vuotias opiskelija avasi vahingossa kaksi osake­säästö­tiliä, tuloksena tuhansien eurojen rangaistus ",
    },
    {
      content:
        "Helsingissä on arkkitehtien mielestä menossa purkuvimma, jossa ei ole järkeä",
    },
    {
      content:
        "Tutkijat: Länsimaat epäonnistuivat, humanitaarisen avun keskittyminen naisiin on vain lisännyt epätasa-arvoa Afganistanissa",
    },
    {
      content:
        "Helsingissä on arkkitehtien mielestä menossa purkuvimma, jossa ei ole järkeä",
    },
    {
      content:
        "Helsingissä on arkkitehtien mielestä menossa purkuvimma, jossa ei ole järkeä",
    },
    {
      content:
        "Helsingissä on arkkitehtien mielestä menossa purkuvimma, jossa ei ole järkeä",
    },
    {
      content:
        "Helsingissä on arkkitehtien mielestä menossa purkuvimma, jossa ei ole järkeä",
    },
    {
      content:
        "Helsingissä on arkkitehtien mielestä menossa purkuvimma, jossa ei ole järkeä",
    },
    {
      content:
        "Helsingissä on arkkitehtien mielestä menossa purkuvimma, jossa ei ole järkeä",
    },
    {
      content:
        "Helsingissä on arkkitehtien mielestä menossa purkuvimma, jossa ei ole järkeä",
    },
    {
      content:
        "Helsingissä on arkkitehtien mielestä menossa purkuvimma, jossa ei ole järkeä",
    },
    {
      content:
        "Helsingissä on arkkitehtien mielestä menossa purkuvimma, jossa ei ole järkeä",
    },
    {
      content:
        "Helsingissä on arkkitehtien mielestä menossa purkuvimma, jossa ei ole järkeä",
    },
  ];

  return (
    <div className={styles.background}>
      <Header />
      {newsNotificationData.map((element) => (
        <NewsNotification data={element} />
      ))}
      <div className={styles.container}>
        <div className={styles.body1}>
          {mainSectionData.map((element) => (
            <MainSection data={element} />
          ))}
        </div>
        <div className={styles.body2}>
          {SideMenuData.map((element) => (
            <SideMenu data={element} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
