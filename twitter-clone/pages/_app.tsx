import Layout from '@/components/Layout/Layout/Layout';
import LoginModal from '@/components/Modals/LoginModal/LoginModal';
import RegisterModal from '@/components/Modals/RegisterModal/RegisterModal';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import EditModal from '@/components/Modals/EditModal/EditModal';

export default function App({ Component, pageProps }: AppProps) {
	return (
			<SessionProvider session={pageProps.session}>
				<Toaster />
				<RegisterModal />
				<LoginModal />
				<EditModal />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
	);
}
