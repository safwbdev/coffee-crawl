import { ReactNode } from "react";

export interface InputProps {
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    isEdit?: boolean
}

export interface formProps {
    children: ReactNode;
    action: (formData: FormData) => void;
    className?: string;
    onSubmit?: () => void;
}

export interface buttonProps {
    type?: "button" | "submit" | "reset";
    text: string | ReactNode;
    onClick?: () => void;
    actionButton?: boolean;
    bgColor?: string;
}
export interface placeProps {
    id: string
    name?: string | null;
    location?: string | null;
    type?: string | null;
    rating?: number | null;
    cuisine?: string | null;
    isCompleted: boolean;
    favorite?: boolean;
    createdAt?: Date;

}