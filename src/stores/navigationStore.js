import { create } from 'zustand';

const useNavigationStore = create((set) => ({
	page: 'home',
	setPage: (newPage) => set({ page: newPage }),
}));

export default useNavigationStore;