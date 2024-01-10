import { create } from 'zustand';

interface EditModalStore {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const useEditModal = create<EditModalStore>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true }),
}));

export default useEditModal;