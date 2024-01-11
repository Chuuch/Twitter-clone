import Input from "@/components/Input/Input";
import Modal from "@/components/Modals/Modal/Modal";
import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react";
import RegisterModel from "../RegisterModel/RegisterModel";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";

interface LoginModelProps {

}

const LoginModel: React.FC<LoginModelProps> = ({

}) => {
    const loginModel = useLoginModal();
    const registerModel = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback( async () => {
        try {
            setIsLoading(true);

            await signIn('credentials', {
                email,
                password
            });

            loginModel.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    },[loginModel, email, password]);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }
        loginModel.onClose();
        registerModel.onOpen();
    },[isLoading, registerModel, loginModel])

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
        isOpen={loginModel.isOpen}
        title="Login"
        actionLabel="Sign in"
        onClose={loginModel.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}/>
  )
}

export default LoginModel