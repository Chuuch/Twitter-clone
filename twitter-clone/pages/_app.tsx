import Layout from '@/components/Layout/Layout/Layout';
import LoginModel from '@/components/Modals/LoginModel/LoginModel';
import RegisterModel from '@/components/Modals/RegisterModel/RegisterModel';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
	return (
			<SessionProvider session={pageProps.session}>
				<Toaster />
				<RegisterModel />
				<LoginModel />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
	);
}
