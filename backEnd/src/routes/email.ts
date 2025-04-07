import { Request, Response } from 'express';
import { sendEmail } from '../utils/email';
import { verifyRecaptcha } from '../utils/recaptcha';
import express from 'express';

const router = express.Router();

router.post('/send', async (req: Request, res: Response) => {
  try {
    const recaptchaToken = req.body.recaptchaToken;
    const userIp = req.body.ip || req.ip;
    const userAgent = req.headers['user-agent'] || '';

    console.log('req.body', req.body);

    if (!recaptchaToken) {
      res.status(400).json({
        success: false,
        error: 'reCAPTCHA verification failed: No token provided',
      });
      return; // Use return without returning the response
    }

    const recaptchaResult = await verifyRecaptcha(
      recaptchaToken,
      userIp,
      userAgent
    );
    console.log('recaptchaResult', recaptchaResult);

    if (!recaptchaResult.success || !recaptchaResult.isHuman) {
      res.status(400).json({
        success: false,
        error: 'reCAPTCHA verification failed: Possible bot activity detected',
        details: recaptchaResult.error || `Score: ${recaptchaResult.score}`,
      });
      return;
    }

    await sendEmail({
      name: req.body.name,
      email: req.body.email,
      selection: req.body.product,
      message: req.body.message,
      ip: req.body.ip,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

export default router;
