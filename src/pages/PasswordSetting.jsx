import React, { useState } from 'react';
import '../styles/PasswordSetting.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import navlogo from "../assets/nav.png"
const PasswordSetting = () => {
    const [password, setPassword] = useState('');
    console.log(password,"password");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
        }
        else if (!passwordPattern.test(password)) {
            toast.error('Password must be between 8 and 20 characters, and include at least one uppercase letter, one lowercase letter, and one number');
        }
        else {
            toast.success('Password set successfully');
        }
    };

    return (
        <div className="body">
              <div className="logo-container">
                <img src={navlogo} alt="Logo" className="nav-logo" />
            </div>
            <div className="set-password-container">
                <h1>パスワード設定</h1>
                <p>パスワードを入力後「設定」ボタンを押してサービスの利用を開始してください。</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>パスワード</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="半角英字・小文字・数字を含む8文字以上の文字列"
                            />
                            <span
                                className="toggle-visibility"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'hide' : '👁️'}
                            </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>パスワード確認入力</label>
                        <div className="input-group">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <span
                                className="toggle-visibility"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? 'hide' : '👁️'}
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="submit-btn">設定</button>
                </form>
                <ToastContainer />
            </div>
        </div>

    );
};

export default PasswordSetting;
