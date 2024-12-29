import { isEnabled, enable, disable } from '@tauri-apps/plugin-autostart';
import { Fieldset, Flex, Grid, Select, Switch } from "@mantine/core"
import { Icon } from "../../../utils/Icon"
import { useEffect, useState } from 'react';

type Props = {
    // inputBar: React.ReactNode;
    // resultList: React.ReactNode;
    // resultVisible: boolean;
}


export const GeneralSettings = ({ }: Props) => {
    const [isAutostart, setAutostart] = useState(false);

    useEffect(() => {
        (async () => {
            setAutostart(await isEnabled());
            console.log(isAutostart);
        })()
    }, []);

    const autostartHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.checked ? await enable() : await disable();
        setAutostart(await isEnabled());
    }

    return (
        <Fieldset legend={<Flex gap={5} align={"center"}><Icon name="settings" width={22} height={22} />Основные настройки</Flex>} mb={"sm"}>
            <Grid style={{display: "none"}} columns={2} align="center">
                <Grid.Col span={"auto"}>
                    Язык интерфейса:
                </Grid.Col>
                <Grid.Col span={"auto"}>
                    <Select value={'Русский'} data={['Русский']} />
                </Grid.Col>
            </Grid>
            <Grid columns={2} align="center">
                <Grid.Col span={"auto"}>
                    Запускать с Windows:
                </Grid.Col>
                <Grid.Col span={"auto"}>
                    {isAutostart}
                    <Switch
                        checked={isAutostart}
                        onChange={autostartHandler}
                    />
                </Grid.Col>
            </Grid>
        </Fieldset>
    )
}