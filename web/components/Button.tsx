import { ReactNode, FC } from 'react';

interface Props {
    children?: ReactNode
    theme: string
    onClick: (event: React.MouseEvent<HTMLElement>) => void
    className?: string
}

const darkColor = '#15171B';

const Button: FC<Props> = ({ children, theme, onClick, className }) => {
    return (
        <div onClick={onClick} className={`flex items-center justify-center px-5 py-1 border-2 rounded-full cursor-pointer w-fit h-fit ${className}`} style={{
            color: theme === "dark" ? darkColor : "white",
            borderColor: theme === "dark" ? darkColor : "white"
        }}>
            {children}
        </div >
    );
}

export default Button;
