export const LinerFontStyles = {
	background: 'linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	backgroundClip: 'text',
	textFillColor: 'transparent',
};

export const linearBorder = {
	border: '1px solid transparent',
	borderRadius: '24px',
	position: 'relative',
	backgroundColor: '#000238',
	backgroundClip: 'padding-box',
	'::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		zIndex: -1,
		margin: '-1px',
		borderRadius: 'inherit',
		background: 'linear-gradient(to right, #CE42FF, #248CC7)',
	},
};
