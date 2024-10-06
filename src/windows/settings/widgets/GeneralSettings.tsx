import { Checkbox, Fieldset, Flex, Grid, Select } from "@mantine/core"
import { Icon } from "../../../utils/Icon"

type Props = {
    // inputBar: React.ReactNode;
    // resultList: React.ReactNode;
    // resultVisible: boolean;
}

export const GeneralSettings = ({ }: Props) => {
    return (
        <Fieldset legend={<Flex gap={5} align={"center"}><Icon name="settings" width={22} height={22} />Основные настройки</Flex>} mb={"sm"}>
            <Grid columns={2} align="center">
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
                    <Checkbox />
                </Grid.Col>
            </Grid>
        </Fieldset>
    )
}