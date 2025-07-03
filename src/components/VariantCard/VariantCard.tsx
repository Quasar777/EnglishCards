import { memo } from "react";
import classes from "./VariantCard.module.scss";

interface VariantCardProps {
  text: string;
  onClick: () => void;
  isCorrect?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
}

const VariantCard = memo(({
  text,
  onClick,
  isCorrect,
  isSelected,
  isDisabled,
}: VariantCardProps) => {
  let cardClass = classes.variantCard;

  if (isSelected) {
    cardClass += isCorrect ? ` ${classes.correct}` : ` ${classes.wrong}`;
  } else if (!isSelected && isDisabled && isCorrect) {
    cardClass += ` ${classes.correct}`;
  } else if (isDisabled) {
    cardClass += ` ${classes.disabled}`;
  }

  return (
    <div
      className={cardClass}
      onClick={!isDisabled ? onClick : undefined} 
    >
      <p className={classes.variantCard__text}>{text}</p>
    </div>
  );
});

export default VariantCard;

