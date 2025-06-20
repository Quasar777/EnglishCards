import classes from "./MainCard.module.scss";

const MainCard = ({text, isCorrect}: {text: string, isCorrect?: boolean | null}) => {
    return (
        <div className={classes.mainCard}>
            <p className={classes.mainCard__text}>{text}</p>
        </div>
    );
}

export default MainCard;
