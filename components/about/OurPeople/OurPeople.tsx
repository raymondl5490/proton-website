import { People as data } from "@/data/about/People";
import Person from "./Person";
import styles from "./OurPeople.module.scss";

export const OurPeople = () => {
  return (
    <div className={styles.container}>
      {data.map((person, index) => (
        <Person data={person} key={index} />
      ))}
    </div>
  );
};

export default OurPeople;
