import { Affix, Button, Checkbox, Drawer, Fieldset, Flex, Grid, ScrollArea, Stack, Tabs, Text } from "@mantine/core";
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
    const [activeTab, setActiveTab] = useState<string | null>("main");

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
                                <Flex align={"center"}>
                                    <Drawer.Title>Редактор путей поиска</Drawer.Title>
                                    <Drawer.CloseButton />
                                </Flex>
                                <Tabs.List display={"none"} defaultValue="main" grow>
                                    <Tabs.Tab value="main">Обзор</Tabs.Tab>
                                    <Tabs.Tab value="edit">Настройка</Tabs.Tab>
                                    <Tabs.Tab value="new">Новый</Tabs.Tab>
                                </Tabs.List>
                            </Stack>
                        </Drawer.Header>
                        <Drawer.Body>
                            <Tabs.Panel value="main">
                                <Button w={"100%"} mb={"lg"} variant="outline" onClick={() => setActiveTab("new")}>Добавить новый</Button>
                                <Text>Пусто, добавьте хотя-бы один...</Text>
                                <Flex justify={"space-between"} align={"center"}>
                                    Test
                                    <Button onClick={() => setActiveTab("edit")}>Редактировать</Button>
                                </Flex>
                            </Tabs.Panel>
                            <Tabs.Panel value="edit">
                                <Affix position={{ bottom: 40, right: 40 }} style={{ display: activeTab == "edit" ? "block" : "none" }}>
                                    <Flex gap={5}>
                                        <Button
                                            variant="outline"
                                            onClick={() => setActiveTab("main")}
                                        >
                                            Изменить
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => setActiveTab("main")}
                                        >
                                            Назад
                                        </Button>
                                    </Flex>
                                </Affix>
                                Настройка
                            </Tabs.Panel>
                            <Tabs.Panel value="new">
                                <Affix position={{ bottom: 40, right: 40 }} style={{ display: activeTab == "new" ? "block" : "none" }}>
                                    <Flex gap={5} >
                                        <Button
                                            variant="outline"
                                            onClick={() => setActiveTab("main")}
                                        >
                                            Создать
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => setActiveTab("main")}
                                        >
                                            Отмена
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