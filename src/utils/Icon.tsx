import styles from "./Icon.module.css";

interface Props extends React.ComponentPropsWithoutRef<"svg"> {
	name: string;
	prefix?: string;
}

const Icon = (props: Props) => {
	const {
		name,
		prefix = "icon",
		...others
	} = props;

	const symbolId = `#${prefix}-${name}`;
	return (
		<svg className={styles.icon} {...others} aria-hidden="true">
			<use href={symbolId} fill="currentColor" />
		</svg>
	);
};

export { Icon };
