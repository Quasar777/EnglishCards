import classes from "./Button.module.scss";

const Button = ({text}: {text: string}) => {
    return (
        <button className={classes.button}>
            {text}
        </button>
    );
}

export default Button;
