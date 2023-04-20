import { ButtonContent, HighlightedButtonContent,SubmitButtonContent } from "./styles";

export const Button = ({ title, reverse, children, ...props }) => {
  return (
    <ButtonContent reverse={reverse} {...props}>
      <div className="title">{title}</div>
      {children && <div className="children">{children}</div>}
    </ButtonContent>
  );
};

export const HighlightedButton = ({
  title,
  reverse,
  children,
  ...props
}) => {
  return (
    <HighlightedButtonContent reverse={reverse} {...props}>
      <div className="title">{title}</div>
      {children && <div className="children">{children}</div>}
    </HighlightedButtonContent>
  );
};

export const SubmitButton = ({
  title,
  reverse,
  children,
  ...props
}) => {
  return (
    <SubmitButtonContent reverse={reverse} {...props}>
      <div className="title">{title}</div>
      {children && <div className="children">{children}</div>}
    </SubmitButtonContent>
  );
};
