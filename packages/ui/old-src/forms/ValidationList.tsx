import { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Done from '@mui/icons-material/Done';
import Error from '@mui/icons-material/Error';
import Feedback from '@mui/icons-material/Feedback';
import { formValidationContext } from '@sienar/utils';

import type { ValidationResult } from '@sienar/utils';

export type ValidationListProps = {
	validations: ValidationResult[]
	hideNonErrors?: boolean
	hideIfAllValid?: boolean
	allValidMessage?: string
}

export default function ValidationList(props: ValidationListProps) {
	const {
		validations,
		hideNonErrors = false,
		hideIfAllValid = false,
		allValidMessage = 'All requirements met'
	} = props;

	const context = useContext(formValidationContext);

	let filtered = validations;

	if (hideNonErrors) {
		filtered = validations.filter(v => !v.valid);
	}
	else if (hideIfAllValid) {
		if (validations.every(v => v.valid)) {
			filtered = context.hasInteracted && validations.length > 0
				?  [{ valid: true, message: allValidMessage }]
				: [];
		} else {
			filtered = validations;
		}
	}

	return filtered.length > 0 && (
		<List
			sx={{ pt: 0, pl: 2 }}
			dense
		>
			{filtered.map(e => {
				const validationColor = e.valid === true
					? 'success.main'
					: e.valid === false ? 'error.main' : 'inherit';

				const validationIcon = e.valid === true
					? <Done/>
					: e.valid === false ? <Error/> : <Feedback/>

				return (
					<ListItem
						key={e.message}
						sx={{color: validationColor}}
						disablePadding
					>
						<ListItemIcon
							sx={{ color: 'inherit' }}
						>
							{validationIcon}
						</ListItemIcon>
						<ListItemText
							primary={e.message}
							sx={{ color: 'inherit' }}
						/>
					</ListItem>
				)
			})}
		</List>
	) || null;
}