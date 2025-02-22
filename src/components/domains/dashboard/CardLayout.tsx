import { ReactNode } from 'react';

interface CardLayoutProps {
	children: ReactNode;
}

export default function CardLayout({ children }: CardLayoutProps) {
	return (
		<div className='container rounded-[0.6rem] border-[0.1rem] border-gray-D bg-white px-[2rem] py-[2rem]'>
			{children}
		</div>
	);
}
