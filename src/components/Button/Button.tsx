import classes from "./Button.module.scss";

const Button = ({text, onClick}: {text: string, onClick: () => void}) => {
    return (
        <button onClick={onClick} className={classes.button}>
            {text}
        </button>
    );
}

export default Button;
