export default useLogin;
declare function useLogin(): {
    loginUser: (username: any, password: any) => any;
    logoutUser: (redirectPath: any) => any;
    authenticationError: any;
    error: any;
    isAuthenticated: any;
    isLoading: any;
    user: any;
};
