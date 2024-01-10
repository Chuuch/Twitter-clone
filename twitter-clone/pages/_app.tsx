import Layout from '@/components/Layout/Layout';
import LoginModel from '@/components/Models/LoginModel/LoginModel';
import RegisterModel from '@/components/Models/RegisterModel/RegisterModel';
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
