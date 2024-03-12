import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType? : "button" | "submit";
}

export interface SearchParlayTypeProps{
    parlayType: string;
    setParlayType: (parlayType: string) => void;
}

// export interface SearchManuFacturerProps {
//     manufacturer: string;
//     setManuFacturer: (manufacturer: string) => void;
//   }