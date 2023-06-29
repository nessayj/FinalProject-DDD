import create from 'zustand';

const useStore = create((set) => ({ 
    
    showPage : '마이페이지',
    setShowPage : (page) => set({showPage : page})


}));


export default useStore;
