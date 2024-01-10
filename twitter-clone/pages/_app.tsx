import Layout from '@/components/Layout/Layout/Layout';
import LoginModel from '@/components/Modals/LoginModel/LoginModel';
import RegisterModel from '@/components/Modals/RegisterModel/RegisterModel';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<RegisterModel />
			<LoginModel />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
