import create from 'zustand';

const useStore = create(set => ({ 
    //  로그인 정보
    isLogin : false,
    // 로그인 상태변경 함수
    setLoginStatus: (status) => set({ isLogin: status }),

    // Access토큰 가져오기
    token : '',
    setToken: (newToken) => set({ token: newToken })


}));

export default useStore;

export function getToken() {
    const store = useStore.getState();
    return store.token;
  }
