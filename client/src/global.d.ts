declare module '*.scss' {
	type ClassNames = Record<string, string>;
	const classNames: ClassNames;
	export = classNames;
}

declare module '*.png' {
	const value: never;
	export default value;
}
declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
