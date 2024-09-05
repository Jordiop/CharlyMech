import { create } from 'zustand';

const words = ['world!', 'developers!', 'martians!', 'robots!', 'dreamers!', 'innovators!'];

const useWordAnimationStore = create((set) => ({
	word: 'world!', // Temporary until typing animation is done
	currentWordIndex: 0,
	isForward: true,
	setWord: (newWord) => set({ word: newWord }),
	setIsForward: (backwards) => set({ backwards: backwards }),
}));

export default useWordAnimationStore;
