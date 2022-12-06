
import show from "./show.task";
import create from "./create.task";
import edit from "./edit.task";
import list from "./list.task";

export default { 
  name: "task",
  label: "task",
  hide: false,
  create,
  edit,
  list,
  show,
}