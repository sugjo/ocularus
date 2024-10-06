import { getVersion } from "@tauri-apps/api/app"
import { useEffect, useState } from "react"
import { Icon } from "../../../utils/Icon";
import { Box, Center, Flex, Space, Text } from "@mantine/core";

type Props = {
    // inputBar: React.ReactNode;
    // resultList: React.ReactNode;
    // resultVisible: boolean;
}

export const About = ({ }: Props) => {

    const [version, setVersion] = useState("");

    useEffect(() => {
        (async () => {
            setVersion(await getVersion());
        })()
    }, [])

    return (
        <Center h={"100%"}>
            <Space>
                <Flex align={"center"} pos={"relative"}>
                    <Icon color="#C9C9C9" name="dev_proj_icon" width={80} height={80} style={{ marginTop: "10px" }} /> <Text fz={80}>cularus</Text>
                    <Box ta={"end"} pos={"absolute"} bottom={0} right={0}>version {version}</Box>
                </Flex>
                <Box ta={"center"} fz={20}>Copyright © 2023-2024 Sugjo</Box>
            </Space>
        </Center>
    )
}