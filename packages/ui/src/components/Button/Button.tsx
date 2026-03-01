import { classNames } from '@sienar/utils';
import { ButtonBase } from './ButtonBase.tsx';
import { createThemedClassNames } from '@ui/theme.ts';
import type { Themeable } from '@ui/theme.ts';
import type { ButtonBaseProps } from './ButtonBase.tsx';

/**
 * The props of the button component
 */
export interface ButtonProps extends ButtonBaseProps, Themeable {}

export function Button(props: ButtonProps) {
	const {
		color = 'default',
		variant = 'solid',
		icon,
		className,
		...rest
	} = props;

	const classes = classNames(
		className,
		createThemedClassNames(color, variant, 'button'),
		{
			'button--icon': !!icon
		}
	);

	return (
		<ButtonBase
			className={classes}
			icon={icon}
			{...rest}
		/>
	);
}
