import	React, {ReactElement}		from	'react';

function	Icon (props: React.SVGProps<SVGSVGElement>): ReactElement {
	const defaultProps = {
		width: 24,
		height: 24
	};

	props = {...defaultProps, ...props};

	return (
		<svg {...props} viewBox={'0 0 72 72'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
			<circle cx={'36'} cy={'36'} r={'36'} fill={'currentcolor'}/>
			<path fill-rule={'evenodd'} clip-rule={'evenodd'} d={'M20.9853 14.136L18.1527 17.0221L25.0645 24.0631L31.9763 31.1042V37.6583V44.2124H36.004H40.0318V37.6583V31.1042L46.9268 24.0802L53.8218 17.0563L50.9716 14.1552L48.1214 11.2542L42.1 17.3717C38.7882 20.7364 36.0457 23.4892 36.0056 23.4892C35.9654 23.4892 33.2191 20.7354 29.9027 17.3696C26.5862 14.0038 23.8604 11.25 23.8453 11.25C23.8302 11.25 22.5431 12.5487 20.9853 14.136ZM17.792 31.0518C16.8905 32.9907 16.3684 34.6614 16.0322 36.6832C15.0709 42.4635 16.5904 48.4162 20.2084 53.0441C20.8053 53.8078 22.5619 55.5964 23.3064 56.1988C26.6577 58.9102 30.4732 60.4125 34.7529 60.7054C37.313 60.8807 39.8726 60.5387 42.387 59.6858C49.6544 57.2201 54.9013 50.8561 56.0361 43.1308C56.4728 40.158 56.2371 36.9781 55.3628 34.0454C55.0152 32.8793 54.3108 31.1324 53.9427 30.5231L53.8019 30.2901L50.7374 33.4091C48.2656 35.9249 47.6804 36.555 47.7118 36.6672C47.9646 37.569 48.0988 38.5066 48.1348 39.6227C48.2045 41.7856 47.8686 43.534 47.0325 45.3598C45.4072 48.9095 42.2362 51.4428 38.3592 52.2891C37.6861 52.436 37.4387 52.4527 35.9699 52.4506C34.5285 52.4485 34.2454 52.4292 33.6147 52.2904C29.7709 51.4442 26.7478 49.0491 25.0423 45.4989C24.2714 43.8943 23.9225 42.4094 23.8698 40.5096C23.8317 39.1359 23.9062 38.305 24.1642 37.2237L24.3301 36.5283L21.2756 33.4163C19.5957 31.7046 18.2027 30.3042 18.1804 30.3042C18.1579 30.3042 17.9831 30.6406 17.792 31.0518Z'} className={'text-neutral-0'} fill={'currentcolor'}/>
		</svg>

	);
}

export default Icon;
