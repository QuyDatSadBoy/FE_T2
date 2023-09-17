function Login() {
    const isLogin = true;
    return (
        <>
            {isLogin ? (
                <div>
                    Thông tin người dùng , nút Logout
                </div>
            ) : (
                <div>
                    nút đăng nhập đăng ký
                </div>
            )}
            {isLogin && (<div>Avatar</div>)}
        </>
    );
}

export default Login;