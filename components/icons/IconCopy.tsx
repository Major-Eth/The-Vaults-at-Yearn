import	React, {ReactElement}		from	'react';

function	Icon (props: React.SVGProps<SVGSVGElement>): ReactElement {
	const defaultProps = {
		width: 40,
		height: 40
	};

	props = {...defaultProps, ...props};

	return (
		<svg {...props} viewBox={'0 0 16 16'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
			<path d={'M6.8 3.72223C6.8 2.70979 7.60597 1.88889 8.6 1.88889H11C11.994 1.88889 12.8 2.70979 12.8 3.72223V8.61112C12.8 9.62355 11.994 10.4444 11 10.4444V11.6667C12.6568 11.6667 14 10.2986 14 8.61112V3.72223C14 2.03478 12.6568 0.666672 11 0.666672H8.6C6.94323 0.666672 5.6 2.03478 5.6 3.72223H6.8Z'} fill={'currentcolor'}/>
			<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M5 4.33334C3.34323 4.33334 2 5.70144 2 7.38889V12.2778C2 13.9652 3.34323 15.3333 5 15.3333H7.4C9.05677 15.3333 10.4 13.9652 10.4 12.2778V7.38889C10.4 5.70144 9.05677 4.33334 7.4 4.33334H5ZM3.2 7.38889C3.2 6.37646 4.00597 5.55556 5 5.55556H7.4C8.39403 5.55556 9.2 6.37646 9.2 7.38889V12.2778C9.2 13.2902 8.39403 14.1111 7.4 14.1111H5C4.00597 14.1111 3.2 13.2902 3.2 12.2778V7.38889Z'} fill={'currentcolor'}/>
		</svg>
	);
}

export default Icon;
