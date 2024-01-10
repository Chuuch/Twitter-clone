import Input from "@/components/Input/Input";
import Modal from "@/components/Modals/Modal/Modal";
import useLoginModal from "@/hooks/useLoginModal"
import useRegisterModal from "@/hooks/useRegisterModal";
import { use, useCallback, useState } from "react";

interface RegisterModelProps {

}

const RegisterModel: React.FC<RegisterModelProps> = ({

}) => {
    const loginModel = useLoginModal();
    const registerModel = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback( async () => {
        try {
            setIsLoading(true);
            registerModel.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    },[registerModel]);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }
        registerModel.onClose();
        loginModel.onOpen();
    },[isLoading, registerModel, loginModel]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}/>
            <Input 
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}/>
            <Input 
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={isLoading}/>
            <Input 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}/>
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>
                Already have an account?{' '}
                <span
                onClick={onToggle}
                className='text-white cursor-pointer hover:underline'>
                    Sign in
                </span>
            </p>
        </div>
    );

  return (
    <Modal 
        disabled={isLoading}
        isOpen={registerModel.isOpen}
        title="Create an account"
        actionLabel="Register"
        onClose={registerModel.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}/>
  )
}

export default RegisterModel