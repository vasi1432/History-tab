import "/src/css/button.css";
const MyButton = ({ label, onButtonClick, className }) => {
  return (
    <button onClick={onButtonClick} className={className}>
      {label}
    </button>
  );
};
export default MyButton;
