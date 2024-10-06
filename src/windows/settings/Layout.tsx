import { Tabs } from "@mantine/core"
import { Icon } from "../../utils/Icon"

type Props = {
    pages: {
        name: string,
        title: string,
        icon: string,
        page: React.ReactNode,
        disabled?: boolean
    }[];
    defaultValue: string;
}

export const Layout = ({ pages, defaultValue }: Props) => {

    const TabsList = pages.map(({ icon, name, title, disabled }) => {
        return (
            <Tabs.Tab
                key={name}
                leftSection={<Icon name={icon} width={24} height={24} />}
                value={name}
                disabled={disabled}
            >
                {title}
            </Tabs.Tab>
        )
    });

    const TabsPanel = pages.map(({ name, page }) => {
        return (
            <Tabs.Panel key={name} value={name} p={"sm"}>
                {page}
            </Tabs.Panel>
        )
    });

    return (
        <Tabs defaultValue={defaultValue}>
            <Tabs.List grow>
                {TabsList}
            </Tabs.List>

            {TabsPanel}
        </Tabs>
    )
}