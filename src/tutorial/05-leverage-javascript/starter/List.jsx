import { people } from "../../../data.js";
import { Person } from "./Person";

const List = () => {
  return <Person people={people} />;
};
export default List;
