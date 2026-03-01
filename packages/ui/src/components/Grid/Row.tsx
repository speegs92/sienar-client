import { classNames } from '@sienar/utils';
import type { HTMLAttributes } from 'react';

/**
 * The props for the row component
 */
export type RowProps = {
	/**
	 * The HTML tag with which to render the row
	 */
	tag?: keyof HTMLElementTagNameMap;
} & HTMLAttributes<HTMLElement>;

export default function Row(props: RowProps) {
	const {
		tag:Tag = 'div',
		className,
		...rest
	} = props;

	const classes = classNames(className, 'row');

	return <Tag className={classes} {...rest} />;
}