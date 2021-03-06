import EmployersListItem from "../emloyers-list-item/employers-list-item";
import "./employers-list.css";
const EmployersList = ({ data, onDelete }) => {
  const elements = data.map((item) => {
    const { id, ...itemsProps } = item;
    return (
      <EmployersListItem key={id} {...itemsProps} onDelete={() => onDelete(id)} />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployersList; 
