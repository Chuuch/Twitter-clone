import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { toast } from 'react-hot-toast';


const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            await signIn('credentials', {
                email,
                password
            });

            toast.success('Logged in');

            loginModal.onClose();
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    },[loginModal, email, password]);

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    },[registerModal, loginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}/>
            <Input 
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}/>
        </div>
    );

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>
                First time using Twitter?{' '}
                <span
                onClick={onToggle}
                className='text-white cursor-pointer hover:underline'>
                    Create an account
                </span>
            </p>
        </div>
    );

  return (
    <Modal 
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Sign in"
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}/>
  )
}

export default LoginModal