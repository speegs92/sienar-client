import { useContext, useEffect, useId, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { classNames, formValidationContext, inject, useNavigate } from '@sienar/utils';
import { Button, Card, CardActions, CardContent, CardHeader } from '@ui/components';

import type { HTMLAttributes, ReactNode, SubmitEvent } from 'react';
import type { CrudService, FormContext, InjectionKey, ResultService, StatusService } from '@sienar/utils';
import type { Color } from '@ui/theme.ts';

/**
 * The props for the upsert form component
 */
export interface UpsertFormProps<T> {
	/**
	 * The type of the form
	 */
	type: 'upsert';

	/**
	 * The injection key of the CRUD service
	 */
	serviceKey: InjectionKey<CrudService<T>>;

	/**
	 * The form title when creating
	 */
	createTitle: string;

	/**
	 * The submit button text when creating
	 */
	createSubmitText?: string;

	/**
	 * The form title when updating
	 */
	updateTitle: string;

	/**
	 * The submit button text when updating
	 */
	updateSubmitText?: string;
}

/**
 * Props to use when the form only cares about the success of its action
 */
export type StatusFormProps<T> = {
	/**
	 * The type of the form
	 */
	type: 'status';

	/**
	 * The injection key of the status service
	 */
	serviceKey: InjectionKey<StatusService<T>>;

	/**
	 * The title of the status form
	 */
	title: string;

	/**
	 * The text of the form's submit button
	 */
	submitText?: string;
}

export type ResultFormProps<TResult> = {
	type: 'result';

	serviceKey: InjectionKey<ResultService<TResult>>;

	title: string;

	submitText?: string;
}

/**
 * Props to use when a form responds to a successful submission by calling a callback
 */
export type HandleSuccessFormProps<T> = {
	/**
	 * The action to take on successful submission
	 */
	handleSuccess: 'callback';

	/**
	 * The callback to call on success
	 */
	onSuccess: (result: T) => unknown;
}

/**
 * Props to use when a form responds to a successful submission by redirecting to another page
 */
export type RedirectOnSuccessFormProps = {
	/**
	 * The action to take on successful submission
	 */
	handleSuccess: 'redirect';

	/**
	 * The path to which the form should redirect on success
	 */
	successRedirectRoute: string|InjectionKey<string>

	/**
	 * The query parameters the form should use when redirecting
	 */
	successRedirectQueryParams?: object;
}

/**
 * The props of the form component
 */
export type FormProps<T> = {
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
	 * The function to call on submit. If it returns <code>true</code>, the form submission will continue. Otherwise, submission will end
	 */
	onSubmit?: (payload: T) => boolean;

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
}
	& ( UpsertFormProps<T> | StatusFormProps<T> | ResultFormProps<T>)
	& ( HandleSuccessFormProps<T> | RedirectOnSuccessFormProps)
	& Omit<HTMLAttributes<HTMLFormElement>, 'title'|'color'>;

export function Form<T>(props: FormProps<T>) {
	const {
		title,
		titleTag: TitleTag = 'h1',
		subtitle,
		subtitleTag: SubtitleTag = 'h2',
		headerIcon,
		color,
		onSubmit,
		resetText = 'Reset',
		showReset = false,
		resetOnSubmit = false,
		hideControls = false,
		information,
		additionalActions,
		children,
		onReset,
		immediate,
		type,
		handleSuccess,
		serviceKey
	} = props;

	const formId = useId();
	const params = useParams();
	const id = params['id'];
	const isCreating = !!(type === 'upsert' && !id);
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

		if (onSubmit && !onSubmit(payload as T)) {
			return;
		}

		const config = { formContext };
		let result: any;
		if (type === 'upsert') {
			const formData = mapToFormData(formContext);

			const service = inject(serviceKey);

			if (isCreating) {
				result = await service.create(formData, config);
			} else {
				result = await service.update(formData, config);
			}
		} else if (type === 'status') {
			const service = inject(serviceKey);
			result = await service(payload as T, config);
		}

		if (!result) {
			return;
		}

		if (resetOnSubmit) {
			resetButtonRef.current!.click();
		}

		if (handleSuccess === 'callback') {
			props.onSuccess(result);
		} else {
			navigate(props.successRedirectRoute, props.successRedirectQueryParams);
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

	// If editing, download existing entity and map to forms fields
	useEffect(() => {
		(async function () {
			if (!(type === 'upsert' && !isCreating)) {
				return;
			}

			const service = inject(serviceKey);
			const initial = await service.read(id!);
			if (!initial) {
				return;
			}

			for (let [k, v] of Object.entries(initial)) {
				// Let's be nice and handle IDs and concurrency stamps for the devs
				if (k === 'id' || k === 'concurrencyStamp') {
					formContext.fields[k] = {
						displayName: k,
						validator: () => true,
						value: v,
						setValue: () => {},
						validationResults: [],
						setValidationResults: ([]) => {}
					}
					continue;
				}

				// If the element doesn't exist, there's nothing to do
				if (!formContext.fields[k]) {
					continue;
				}

				// Set the value
				formContext.fields[k].setValue(v)
			}
		})();
	}, []);

	return (
		<formValidationContext.Provider value={formContext}>
			<Card color={color} style={{backgroundColor: 'var(--color-white)'}}>
				<CardHeader>
					<div>
						<TitleTag>
							{title || generateCardTitle(props, isCreating)}
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
							{generateSubmitText(props, isCreating)}
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

function generateSubmitText(
	props: UpsertFormProps<unknown>|StatusFormProps<unknown>|ResultFormProps<unknown>,
	isCreating: boolean
): string {
	const defaultText = 'Submit';

	if (props.type === 'upsert') {
		return isCreating
			? props.createSubmitText ?? defaultText
			: props.updateSubmitText ?? defaultText;
	}

	return props.submitText ?? defaultText;
}

function generateCardTitle(
	props: UpsertFormProps<unknown>|StatusFormProps<unknown>|ResultFormProps<unknown>,
	isCreating: boolean
): string {
	if (props.type === 'upsert') {
		return isCreating
			? props.createTitle
			: props.updateTitle;
	}

	return props.title;
}

function mapToFormData(context: FormContext): FormData {
	const formData = new FormData();

	for (let field in context.fields) {
		if (Array.isArray(context.fields[field].value)) {
			for (let value of context.fields[field].value) {
				formData.append(field, value);
			}
		} else {
			formData.append(field, context.fields[field].value);
		}
	}

	return formData;
}
