import { IconDefinition, IconName } from "@fortawesome/free-solid-svg-icons";
import { subItem } from "./subItem";

export interface Item {
    icon: IconName;
    title: string;
    subItems: subItem[];
}