import { Button, Image } from "@mantine/core";
import { forwardRef, useEffect } from "react";
import classes from "./ListItem.module.css"
import { convertFileSrc } from "@tauri-apps/api/core";
import * as path from '@tauri-apps/api/path';

interface Props {
	item: string;
	active: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ListItem = forwardRef<HTMLButtonElement, Props>(({ item, active, onClick }: Props, ref) => {

	useEffect(() => {
		(async () => {
			console.log(await path.tempDir());
			console.log(convertFileSrc(`C:\\Users\\iluxa\\OneDrive\\Рабочий стол\\testIcon\\${item}.png`));
		})()
	}, [])

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
				leftSection={<Image src={convertFileSrc(`C:\\Users\\iluxa\\OneDrive\\Рабочий стол\\testIcon\\Icons\\${item}.png`)}/>}
			>
				{item}
			</Button>
		</div>
	);
});
