import { Button, Fieldset, Flex, Grid } from "@mantine/core"
import { Icon } from "../../../utils/Icon"

type Props = {
    // inputBar: React.ReactNode;
    // resultList: React.ReactNode;
    // resultVisible: boolean;
}

export const ResetAndRestore = ({ }: Props) => {
    return (
        <Fieldset legend={<Flex gap={5} align={"center"}><Icon name="warning" width={22} height={22} />Сброс и восстановление</Flex>} mb={"sm"}>
            <Grid columns={2} align="center">
                <Grid.Col span={"auto"}>
                    Сброс конфигурации:
                </Grid.Col>
                <Grid.Col span={"auto"}>
                    <Button variant="outline" color="red" w={"100%"}>Сбросить</Button>
                </Grid.Col>
            </Grid>
            <Grid columns={2} align="center">
                <Grid.Col span={"auto"}>
                    Экспорт конфигурации:
                </Grid.Col>
                <Grid.Col span={"auto"}>
                    <Button variant="outline" w={"100%"}>Экспортировать</Button>
                </Grid.Col>
            </Grid>
            <Grid columns={2} align="center">
                <Grid.Col span={"auto"}>
                    Импорт конфигурации:
                </Grid.Col>
                <Grid.Col span={"auto"}>
                    <Button variant="outline" w={"100%"}>Импортировать</Button>
                </Grid.Col>
            </Grid>
        </Fieldset>
    )
}