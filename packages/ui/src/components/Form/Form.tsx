import { useContext, useEffect, useId, useRef } from 'react';
import { classNames, formValidationContext, type RequestResult, sendRequest, useNavigate, type ValidationResult } from '@sienar/utils';
import { Button, Card, CardActions, CardContent, CardHeader } from '@ui/components';

import type { HTMLAttributes, ReactNode, SubmitEvent } from 'react';
import type { HttpMethod } from '@sienar/utils';
import type { Color } from '@ui/theme.ts';

/**
 * The props of the form component
 */
export type FormProps = {
	/**
	 * The title text of the form. If omitted, it is determined programmatically if possible
	 */
	title?: string;

	/**
	 * The HTML tag with which to render the title
	 */
	titleTag?: keyof HTMLElementTagNameMap;

	/**
	 * The subtitle text of the form, if any
	 */
	subtitle?: string;

	/**
	 * The HTML tag with which to render the subtitle
	 */
	subtitleTag?: keyof HTMLElementTagNameMap;

	/**
	 * The theme color of the form, if any
	 */
	color?: Color;

	/**
	 * The icon to display in the form header, if any
	 */
	headerIcon?: ReactNode;

	/**
	 * The function to call before submit. If it returns <code>true</code>, the form submission will continue. Otherwise, submission will end
	 */
	beforeSubmit?: <T>(payload: T) => boolean;

	/**
	 * The endpoint to which the form should submit its data
	 */
	endpoint: string;

	/**
	 * The HTTP method with which the form should submit its data
	 */
	method: HttpMethod;

	/**
	 * The submit button text
	 */
	submitText?: string;

	/**
	 * The function to call on reset
	 */
	onReset?: () => any;

	/**
	 * The reset button text
	 */
	resetText?: string;

	/**
	 * Whether to show the reset button on the form
	 */
	showReset?: boolean;

	/**
	 * Whether to reset the form on submit
	 */
	resetOnSubmit?: boolean;

	/**
	 * Whether to hide the form controls
	 */
	hideControls?: boolean;

	/**
	 * A string or React node to show to users at the top of the form, generally to provide information or instructions
	 */
	information?: ReactNode;

	/**
	 * Additional buttons or links to show in the card actions area
	 */
	additionalActions?: ReactNode;

	/**
	 * Whether the form should immediately submit upon rendering
	 */
	immediate?: boolean;

	/**
	 * The function to call or the path to which to navigate on a successful form submission
	 */
	onSuccess?: string|((result: RequestResult<any>) => any);
} & Omit<HTMLAttributes<HTMLFormElement>, 'title'|'color'>;

export function Form(props: FormProps) {
	const {
		title,
		titleTag: TitleTag = 'h1',
		subtitle,
		subtitleTag: SubtitleTag = 'h2',
		headerIcon,
		color,
		beforeSubmit,
		endpoint,
		method,
		submitText = 'Submit',
		resetText = 'Reset',
		showReset = false,
		resetOnSubmit = false,
		hideControls = false,
		information,
		additionalActions,
		children,
		onReset,
		immediate,
		onSuccess
	} = props;

	const formId = useId();
	const formRef = useRef<HTMLFormElement>(null);
	const submitButtonRef = useRef<HTMLButtonElement>(null);
	const resetButtonRef = useRef<HTMLButtonElement>(null);
	const formContext = useContext(formValidationContext);
	const navigate = useNavigate();

	const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		formContext.hasInteracted = true;

		let valid = true;
		for (let field in formContext.fields) {
			if (!formContext.fields[field].validator()) {
				valid = false;
			}
		}

		if (!valid) {
			return;
		}

		const payload: Record<string, any> = {};
		for (let field in formContext.fields) {
			payload[field] = formContext.fields[field].value;
		}
		console.log(payload);

		if (beforeSubmit && !beforeSubmit(payload)) {
			return;
		}

		const result = await sendRequest<any>(
			endpoint,
			method,
			{
				body: JSON.stringify(payload),
				requestOptions: {
					headers: {
						"Content-Type": "application/json"
					}
				},
				onUnprocessable: e => {
					for (let errored in e.errors) {
						const validationErrors: ValidationResult[] = e.errors[errored].map(e => {
							return {
								valid: false,
								message: e
							};
						});

						// TODO: consider notifying of errors which don't have a matching field?
						formContext.fields[errored]?.setValidationResults(validationErrors);
					}
				}
			}
		);

		if (!result || !result.wasSuccessful) {
			return;
		}

		if (resetOnSubmit) {
			resetButtonRef.current!.click();
		}

		if (typeof onSuccess === 'function') {
			onSuccess(result);
		} else if (typeof onSuccess === 'string') {
			navigate(onSuccess);
		}
	};

	const handleReset = async () => {
		formContext.hasInteracted = false;
		await onReset?.();
	}

	useEffect(() => {
		if (immediate) {
			submitButtonRef.current!.click();
		}
	}, []);

	// This effect does nothing on load, but when the component unmounts,
	// it resets hasInteracted. Without this, revisiting a submitted forms
	// may cause validation to run on load, because
	// a) React caches components for reuse
	// b) the existing formContext.hasInteracted will therefore be true
	useEffect(() => {
		return () => {
			formContext.hasInteracted = false;
		};
	}, []);

	return (
		<formValidationContext.Provider value={formContext}>
			<Card color={color}>
				<CardHeader>
					<div>
						<TitleTag>
							{title}
						</TitleTag>
						{subtitle && (
							<SubtitleTag>
								{subtitle}
							</SubtitleTag>
						)}
					</div>

					{headerIcon}
				</CardHeader>

				{information && (
					<CardContent>
						{information}
					</CardContent>
				)}

				<CardContent>
					<form
						id={formId}
						ref={formRef}
						onSubmit={handleSubmit}
						onReset={handleReset}
					>
						{children}
					</form>
				</CardContent>

				{!hideControls && (
					<CardActions>
						<Button
							form={formId}

ref={submitButtonRef}
							color={color}
							type='submit'
							variant='solid'
						>
							{submitText}
						</Button>

						<Button
							className={classNames({ 'd-none': !showReset })}
							// form={formId}
							ref={resetButtonRef}
							color='secondary'
							// type='reset'
							// variant='outlined'
						>
							{resetText}
						</Button>
						{additionalActions}
					</CardActions>
				)}
			</Card>
		</formValidationContext.Provider>
	);
}
