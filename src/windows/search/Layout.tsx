import { Center, Flex, Overlay, Popover, ScrollArea } from "@mantine/core"
import { useFocusTrap } from "@mantine/hooks";
import { invoke } from "@tauri-apps/api/core";

type Props = {
    inputBar: React.ReactNode;
    resultList: React.ReactNode;
    resultVisible: boolean;
}

export const Layout = ({resultList, inputBar, resultVisible}: Props) => {
    const focusTrap = useFocusTrap();

    return (
        <>
            <Center pt={"35vh"} ref={focusTrap}>
                <Popover
                    opened={resultVisible}
                    position="bottom-start"
                    width="target"
                    transitionProps={{ transition: "fade-down", duration: 50 }}
                >
                    <Popover.Target>
                        {inputBar}
                    </Popover.Target>
                    <Popover.Dropdown p={0}>
                        <ScrollArea.Autosize
                            mah={"30vh"}
                            type="auto"
                        >
                            <Flex direction={"column"}>
                                {resultList}
                            </Flex>
                        </ScrollArea.Autosize>
                    </Popover.Dropdown>
                </Popover>
            </Center>
            <Overlay opacity={0.5} zIndex="var(--ui-index-3)" onClick={() => invoke("set_search_toggle", { value: false })} />
        </>
    )
}