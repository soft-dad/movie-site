document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    var phoneInput = document.getElementById('login-email'); // 注意：ID 应更改为 'login-phone' 以匹配实际的手机号输入框
    var regex = /^\d{11}$/; // 严格要求11位数字
    var passwordInput = document.getElementById('login-password');

    // 检查手机号是否为空或不符合格式
    if (phoneInput.value.trim() === '') {
        alert('手机号、密码不能为空'); // 显示错误消息
        return; // 退出函数，不执行后续代码
    }
    if (!regex.test(phoneInput.value.trim())) {
        alert('手机号格式不正确，必须是11位数字');
        return; // 退出函数，不执行后续代码
    }

    // 检查密码是否为空
    if (passwordInput.value.trim() === '') {
        alert('密码不能为空'); // 显示错误消息
        return; // 退出函数，不执行后续代码
    }

    // 如果手机号和密码都验证通过，则重定向到首页
    alert('登录成功！欢迎来到首页！！！');
    window.location.href = 'index.html';
});
function checkPasswordStrength() {
    const password = document.getElementById('login-password').value;
    let strength = 'weak'; // 默认密码强度为弱
    let strengthMsg = '弱';

    if (password.length >= 4) { // 密码长度至少为4
        let hasNumber = /[0-9]/.test(password);
        let hasLetter = /[a-zA-Z]/.test(password);
        let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        let strengthFactors = 0;
        if (hasNumber) strengthFactors++;
        if (hasLetter) strengthFactors++;
        if (hasSpecialChar) strengthFactors++;

        if (strengthFactors >= 2 && password.length >= 10) {
            strength = 'medium'; // 中等强度
            strengthMsg = '中';
        }
        if (strengthFactors === 3 && password.length >= 12) {
            strength = 'strong'; // 强
            strengthMsg = '强';
        }
    }

    // 更新页面上的密码强度提示
    const passwordStrengthElement = document.getElementById('password-strength');
    passwordStrengthElement.textContent = strengthMsg;
    passwordStrengthElement.className = 'password-strength ' + strength;
}