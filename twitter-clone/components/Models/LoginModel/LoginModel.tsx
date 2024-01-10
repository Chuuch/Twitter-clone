import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react";

interface LoginModelProps {

}

const LoginModel: React.FC<LoginModelProps> = ({

}) => {
    const loginModel = useLoginModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback( async () => {
        try {
            setIsLoading(true);

            // TODO: Add Log in

            loginModel.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    },[loginModel]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}/>
            <Input 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}/>
        </div>
    )

  return (
    <Modal 
        disabled={isLoading}
        isOpen={loginModel.isOpen}
        title="Login"
        actionLabel="Sign in"
        onClose={loginModel.onClose}
        onSubmit={onSubmit}
        body={bodyContent}/>
  )
}

export default LoginModel