import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
}

function Button({ children, onClick }: Props) {
    return (
        <button className="btn btn-light shadow m-3 p-5" onClick={onClick}>{children}</button>
    )
}

export default Button