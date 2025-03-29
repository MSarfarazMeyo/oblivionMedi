import axios from 'axios';

export const verifyRecaptcha = async (token: string): Promise<boolean> => {
    try {
        const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe';

        const response = await axios.post(
            'https://www.google.com/recaptcha/api/siteverify',
            null,
            {
                params: {
                    secret: RECAPTCHA_SECRET_KEY,
                    response: token
                }
            }
        );



        return response.data.success === true;
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return false;
    }
};