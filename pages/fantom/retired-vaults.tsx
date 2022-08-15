import	React, {ReactElement}							from	'react';
import	Link							from	'next/link';
import	Vaults							from	'components/Vaults';
import	HeadIconSleep					from	'components/icons/HeadIconSleep';
import	useLocalization					from	'contexts/useLocalization';
import	{listVaultsWithStrategies}		from	'pages/api/vaults';
import {TVaultWithStrats} 	from 'types/index';
import	{parseMarkdown}					from	'utils';

const	chainExplorer = 'http://ftmscan.com';

function	Index({vaults}: {vaults: TVaultWithStrats[]}): ReactElement {
	const	{common} = useLocalization();

	return (
		<section className={'p-4 w-full bg-white dark:bg-black rounded-sm'}>
			<div className={'w-full'}>
				<div className={'flex flex-col'}>
					<div className={'mb-8'}>
						<HeadIconSleep className={'text-yearn-blue dark:text-white'} />
					</div>
					<h1 className={'mb-8 text-4xl font-bold text-dark-blue-1 dark:text-white whitespace-pre-line md:text-6xl'}>
						{common['page-ftm-retired-title']}
					</h1>
					<div className={'mb-8 w-full max-w-full'}>
						<p
							className={'inline text-gray-blue-1 dark:text-gray-3 whitespace-pre-line'}
							dangerouslySetInnerHTML={{__html: parseMarkdown(common['page-ftm-retired-description'])}} />
					</div>
				</div>
			</div>
			<div className={'w-full'}>
				{vaults.map((vault): ReactElement => <Vaults key={vault.address} vault={vault} chainExplorer={chainExplorer} isRetired />)}
			</div>
			<div className={'w-full'}>
				<div className={'self-center mt-8 md:self-auto'}>
					<Link href={'/'}>
						<button className={'button-large button-filled'}>
							{common['page-ftm-retired-next-button']}
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getStaticProps(): Promise<any>{
	const	strategiesRaw = await listVaultsWithStrategies({network: 250, isRetired: true});
	const	vaults = JSON.parse(strategiesRaw);
	return {props: {vaults}, revalidate: 60 * 60};
}

export default Index;
