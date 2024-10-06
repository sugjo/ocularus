import { getHotkeyHandler } from "@mantine/hooks";
import { useLayoutEffect, useState } from "react";

type Props = {
    elementsLength: number;
    navigationRefs: React.MutableRefObject<Record<number, HTMLButtonElement | null>>;
    onTrigger: (hovered: number) => void;
};

export const useNavigation = ({ onTrigger, elementsLength, navigationRefs }: Props) => {

    const [hovered, setHovered] = useState(0);

    useLayoutEffect(() => {
        const navigationUp = () => {
            setHovered((current) => {
                const newHovered = current > 0 ? current - 1 : elementsLength - 1;
                newHovered < elementsLength - 2 ? navigationScroll(newHovered - 1) : navigationScroll(newHovered);
                return newHovered;
            });
        };

        const navigationDown = () => {
            setHovered((current) => {
                const newHovered = current < elementsLength - 1 ? current + 1 : 0;
                newHovered > 2 ? navigationScroll(newHovered + 1) : navigationScroll(newHovered);
                return newHovered;
            });
        };

        const navigationScroll = (smoothHovered: number) => {
            navigationRefs.current[smoothHovered]?.scrollIntoView({ block: "nearest" });
        };

        const keydownHandler = getHotkeyHandler([
            ["Tab", navigationDown, { preventDefault: true }],
            ["Shift+Tab", navigationUp, { preventDefault: true }],
            ["ArrowDown", navigationDown, { preventDefault: true }],
            ["ArrowUp", navigationUp, { preventDefault: true }],
            ["Enter", () => onTrigger(hovered), { preventDefault: true }]
        ]);

        document.body.addEventListener("keydown", keydownHandler);

        return () => {
            document.body.removeEventListener("keydown", keydownHandler);
        };
    }, [navigationRefs, elementsLength, hovered, onTrigger]);

    return { hovered, setHovered };
};
