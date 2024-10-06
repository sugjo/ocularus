import styles from "./Icon.module.css";

interface Props extends React.ComponentPropsWithoutRef<"svg"> {
	name: string;
}

const Icon = (props: Props) => {
	const {
		name,
		...others
	} = props;

	const symbolId = `__spritemap#sprite-${name}`;
	return (
		<svg className={styles.icon} {...others} aria-hidden="true">
			<use href={symbolId} fill="currentColor" />
		</svg>
	);
};

export { Icon };
