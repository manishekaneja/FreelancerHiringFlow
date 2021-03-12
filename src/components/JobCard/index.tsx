import { FC } from "react";
import styles from './jobcard.module.scss';
const JobCard: FC<{
  role: "recruiter" | "candidate";
  data: Job & BasicInfo;
  onClick?: (id: string) => void;
}> = ({ data: { title, description, location, id }, role, onClick }) => (
  <div className={styles.cardShadow}>
    <h3 className={styles.title}>
      {title}
    </h3>
    <p className="p-0 m-0 secondary pb-4 text-sm mb-2 flex-1 overflow-clip overflow-hidden">
      {description} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Temporibus odit modi, facilis vel hic tenetur ipsa vero itaque sunt culpa
      earum commodi deleniti veniam fugit adipisci neque fugiat impedit. Ipsam?
    </p>
    <div className="flex flex-row items-center justify-start">
      <p className="p-0 m-0 secondary  text-sm flex-1 font-normal">{location}</p>
      {role === "recruiter" && onClick && id && (
        <button onClick={onClick.bind({}, id)} className="light-highlighted-button">View Application</button>
      )}
      {role === "candidate" && onClick && id && (
        <button onClick={onClick.bind({}, id)} className="light-highlighted-button">Apply</button>
      )}
    </div>
  </div>
);

export { JobCard };
