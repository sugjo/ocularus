import { Center } from "@mantine/core";

export const ListEmpty = () => {
	return (
		<Center
			component="div"
			variant="subtle"
			color="gray"
			p="sm"
			fz="md"
			fw="bold"
			style={{userSelect: "none"}}
		>
			Ничего не найдено...
		</Center>
	);
};
