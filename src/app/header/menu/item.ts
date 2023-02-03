import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { subItem } from "./subItem";

export interface Item {
    icon: IconDefinition;
    title: string;
    subItems: subItem[];
}