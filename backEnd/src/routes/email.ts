import { Request, Response } from 'express';
import { sendEmail } from '../utils/email';
import { verifyRecaptcha } from '../utils/recaptcha';
import express from 'express';

const router = express.Router();

router.post('/send', async (req: Request, res: Response) => {
  try {
    const recaptchaToken = req.body.recaptchaToken;

    if (!recaptchaToken) {
      res.status(400).json({
        success: false,
        error: 'reCAPTCHA verification failed: No token provided',
      });
      return; // Use return without returning the response
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);

    if (!isValidRecaptcha) {
      res.status(400).json({
        success: false,
        error: 'reCAPTCHA verification failed: Invalid token',
      });
      return; // Use return without returning the response
    }

    await sendEmail({
      name: req.body.name,
      email: req.body.email,
      selection: req.body.selection,
      message: req.body.message,
      ip: req.body.ip,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

export default router;
