import { useRef } from "react";
import { ListItem } from "./ListItem";
import { ListEmpty } from "./ListEmpty";
import { useNavigation } from "../model/useNavigation";
import { invoke } from "@tauri-apps/api/core";
import { Result } from "../../../types";

type Props = {
    result: Result[];
    onTrigger: (active: number) => void;
}

export function ResultList({ result, onTrigger }: Props) {
    const navigationRefs = useRef<Record<number, HTMLButtonElement | null>>({});

    const triggerHandler = (hovered: number) => {
        setHovered(hovered);
        onTrigger(hovered);
        invoke("set_search_toggle", { value: false });
    };

    const { hovered, setHovered } = useNavigation({
        navigationRefs,
        elementsLength: result.length,
        onTrigger(hovered) {
            triggerHandler(hovered);
        }
    });

    const resultList = result.map((item, index) => {
        const isActive = hovered === index;

        const clickHandler = () => triggerHandler(index);

        return (
            <ListItem
                key={index}
                item={item.name}
                active={isActive}
                onClick={clickHandler}
                ref={(element) => (navigationRefs.current[index] = element)}
            />
        );
    });

    if (result.length <= 0) return <ListEmpty />;

    return (
        <>{resultList} </>
    );
}
