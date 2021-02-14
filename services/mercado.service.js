const mercadoP = require('mercadopago');

mercadoP.configure({
    access_token: process.env.TOKEN,
    integrator_id: process.env.INTEGRATOR_ID
});

const createPreference = async (preference) => {
    try {
        const response = await mercadoP.preferences.create(preference);
        console.log(response.body.id);
        return response.body.init_point
    } catch (error) {
        console.log(error);
        throw error
    }
};

module.exports = {
    createPreference
}