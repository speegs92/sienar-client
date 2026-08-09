import { classNames } from '@sienar/utils';
import { Container } from './Container.tsx';

import type { HTMLAttributes } from 'react';
import type { Color } from '@ui/theme.ts';
import type { ContainerProps } from './Container.tsx';

export interface ContentProps extends HTMLAttributes<HTMLElement> {
	/**
	 * The displayed title of the content
	 */
	title: string;

	/**
	 * The HTML tag with which to render the title
	 */
	titleTag?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6';

	/**
	 * the displayed subtitle of the content, if any
	 */
	subtitle?: string;

	/**
	 * The HTML tag with which to render the subtitle
	 */
	subtitleTag?: keyof HTMLElementTagNameMap;

	/**
	 * The max width of the content
	 */
	maxWidth?: ContainerProps['maxWidth'];

	/**
	 * The background color of the content, if any
	 */
	bgColor?: Color|null;

	/**
	 * The foreground color of the content, if any
	 */
	fgColor?: Color|null;

	/**
	 * The padding of the content, if any
	 */
	padding?: number|null;

	/**
	 * The HTML tag with which to render the content
	 */
	tag?: keyof HTMLElementTagNameMap;
}

export function Content(props: ContentProps) {
	const {
		title,
		titleTag: TitleTag = 'h1',
		subtitle,
		subtitleTag: SubtitleTag = 'h2',
		maxWidth = 'sm',
		bgColor = 'soft',
		fgColor = 'bold',
		padding = 8,
		children,
		className,
		tag: Tag = 'article'
	} = props;

	const classes = classNames(className, 'content');

	const contentClasses = classNames(
		{
			[`bg-${bgColor}`]: !!bgColor,
			[`text-${fgColor}`]: !!fgColor,
			[`p-${padding}`]: padding !== null
		}
	);

	return (
		<Tag className={classes}>
			<Container
				maxWidth={maxWidth}
			>
				<header className='text-align-center'>
					<TitleTag>
						{title}
					</TitleTag>
					{subtitle && (
						<SubtitleTag>
							{subtitle}
						</SubtitleTag>
					)}
				</header>

				<div className={contentClasses}>
					{children}
				</div>
			</Container>
		</Tag>
	)
}
