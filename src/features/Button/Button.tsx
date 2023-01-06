import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  className: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  className,
  ...props
}: ButtonProps) => (
  <button className={`button-component ${className}`} disabled={isLoading} {...props}>
    {children}
  </button>
);

export default Button;
