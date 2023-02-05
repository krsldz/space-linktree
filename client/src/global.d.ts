declare module '*.scss' {
	type ClassNames = Record<string, string>;
	const classNames: ClassNames;
	export = classNames;
}

declare module '*.png' {
	const value: never;
	export default value;
}
