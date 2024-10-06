import { Button, Fieldset, Flex, Grid } from "@mantine/core"
import { Icon } from "../../../utils/Icon"

type Props = {
    // inputBar: React.ReactNode;
    // resultList: React.ReactNode;
    // resultVisible: boolean;
}

export const Update = ({ }: Props) => {
    return (
        <Fieldset legend={<Flex gap={5} align={"center"}><Icon name="settings" width={22} height={22} />Обновление</Flex>} mb={"sm"}>
            <Grid columns={2} align="center">
                <Grid.Col span={"auto"}>
                    Язык интерфейса:
                </Grid.Col>
                <Grid.Col span={"auto"}>
                    <Button variant="outline" w={"100%"}>Редактировать</Button>
                </Grid.Col>
            </Grid>
        </Fieldset>
    )
}