import people from "@/data/about/People.json";
import Person from "./Person";
import styles from "./OurPeople.module.scss";

export const OurPeople = () => {
  return (
    <div className={styles.container}>
      {people.map((person, index) => (
        <Person data={person} key={index} />
      ))}
    </div>
  );
};

export default OurPeople;
