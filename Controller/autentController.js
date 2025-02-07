const User = require('../models');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
        }

        res.json({
            success: true,
            role: user.role, 
            isRegistered: user.isRegistered,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Erro no servidor' });
    }
};
