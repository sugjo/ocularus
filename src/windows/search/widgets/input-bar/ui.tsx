import { Input } from "@mantine/core"
import { forwardRef } from "react";
import { Icon } from "../../../../utils/Icon";

type Props = {
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBar = forwardRef<HTMLInputElement, Props>(({ changeHandler }: Props, ref) => {
    return (
        <Input
            className="search-bar"
            ref={ref}
            w={"50%"}
            size="xl"
            radius="md"
            placeholder={"Поиск"}
            aria-autocomplete="none"
            onChange={changeHandler}
            data-autofocus
            rightSection={<Icon name="search" style={{ width: 32, height: 32, opacity: .7 }} />}
        />
    )
})