import { Affix, Button, Checkbox, Drawer, Fieldset, Flex, Grid, ScrollArea, Stack, Tabs } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Icon } from "../../../utils/Icon";

type Props = {
    // inputBar: React.ReactNode;
    // resultList: React.ReactNode;
    // resultVisible: boolean;
}

export const SearchPath = ({ }: Props) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [activeTab, setActiveTab] = useState<string | null>('first');

    return (
        <>
            <Drawer.Root
                opened={opened}
                onClose={close}
                offset={20}
                size={"100%"}
                position="bottom"
                radius={"md"}
                scrollAreaComponent={ScrollArea.Autosize}
            >
                <Drawer.Overlay backgroundOpacity={.5} blur={4} />
                <Drawer.Content>
                    <Tabs
                        defaultValue="main"
                        value={activeTab}
                        onChange={setActiveTab}
                    >
                        <Drawer.Header>
                            <Stack w={"100%"}>
                                <Flex>
                                    <Drawer.Title>Редактор путей поиска</Drawer.Title>
                                    <Drawer.CloseButton />
                                </Flex>
                                <Button variant="outline" onClick={() => setActiveTab("new")}>Добавить новый</Button>
                                <Tabs.List grow>
                                    <Tabs.Tab value="main">Обзор</Tabs.Tab>
                                    <Tabs.Tab value="configure">Настройка</Tabs.Tab>
                                    <Tabs.Tab value="new">Новый</Tabs.Tab>
                                </Tabs.List>
                            </Stack>
                        </Drawer.Header>
                        <Drawer.Body>
                            <Tabs.Panel value="main">
                                Пусто, добавьте хотя-бы один...
                            </Tabs.Panel>
                            <Tabs.Panel value="configure">
                                <Affix position={{ bottom: 40, right: 40 }} style={{ display: activeTab == "second" ? "block" : "none" }}>
                                    <Button
                                        variant="outline"
                                        onClick={() => setActiveTab("first")}
                                    >
                                        Назад
                                    </Button>
                                </Affix>
                                Настройка
                            </Tabs.Panel>
                            <Tabs.Panel value="new">
                                <Affix position={{ bottom: 40, right: 40 }} style={{ display: activeTab == "new" ? "block" : "none" }}>
                                    <Flex gap={5} >
                                        <Button
                                            variant="outline"
                                            onClick={() => setActiveTab("first")}
                                        >
                                            Отмена
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => setActiveTab("first")}
                                        >
                                            Создать
                                        </Button>
                                    </Flex>
                                </Affix>
                                Новый
                            </Tabs.Panel>
                        </Drawer.Body>
                    </Tabs>
                </Drawer.Content>
            </Drawer.Root>
            <Fieldset legend={<Flex gap={5} align={"center"}><Icon name="folder_open" width={22} height={22} />Пути для поиска</Flex>} mb={"sm"}>
                <Grid columns={2} align="center">
                    <Grid.Col span={"auto"}>
                        <div>Пути поиска:</div>
                    </Grid.Col>
                    <Grid.Col span={"auto"}>
                        <Button variant="outline" onClick={open} w={"100%"}>Редактировать</Button>
                    </Grid.Col>
                </Grid>
                <Grid columns={2} align="center">
                    <Grid.Col span={"auto"}>
                        <div>Поиск в меню пуск:</div>
                    </Grid.Col>
                    <Grid.Col span={"auto"}>
                        <Checkbox />
                    </Grid.Col>
                </Grid>
            </Fieldset>
        </>
    )
}