import { Button } from "@mantine/core";
import { forwardRef } from "react";
import classes from "./ListItem.module.css"
import { Icon } from "../../../../../utils/Icon";

interface Props {
	item: string;
	active: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ListItem = forwardRef<HTMLButtonElement, Props>(({ item, active, onClick }: Props, ref) => {
	return (
		<div className={active ? classes.active : ""}>
			<Button
				ref={ref}
				aria-current={active}
				w={"100%"}
				justify="flex-start"
				variant="subtle"
				color="gray"
				size="lg"
				tabIndex={-1}
				onClick={onClick}
			>
				{item}
			</Button>
		</div>
	);
});
