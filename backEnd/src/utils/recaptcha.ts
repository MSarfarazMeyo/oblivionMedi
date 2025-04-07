const {
  RecaptchaEnterpriseServiceClient,
} = require('@google-cloud/recaptcha-enterprise');
import path from 'path';

const client = new RecaptchaEnterpriseServiceClient({
  keyFilename: path.resolve(
    __dirname,
    '../constants/oblivion-media-lp-26f1810d39a1.json'
  ),
});

export async function verifyRecaptcha(
  token: string,
  userIp?: string,
  userAgent?: string
) {
  try {
    const projectID = process.env.GCLOUD_PROJECT_ID || ''; // Your project ID from env
    const recaptchaKey = process.env.RECAPTCHA_SITE_KEY;
    const recaptchaAction = 'submit_contact_form'; // Should match the action used in frontend

    // Create the project path
    const projectPath = client.projectPath(projectID);

    // Build the assessment request
    const request = {
      assessment: {
        event: {
          token: token,
          siteKey: recaptchaKey,
          userIpAddress: userIp,
          userAgent: userAgent,
        },
      },
      parent: projectPath,
    };

    // Make the API call
    const [response] = await client.createAssessment(request);

    console.log('reCAPTCHA API response received');

    // Check if the token is valid
    if (!response.tokenProperties?.valid) {
      console.log(
        'Token invalid reason:',
        response.tokenProperties?.invalidReason
      );
      return {
        success: false,
        score: 0,
        isHuman: false,
        error: `Invalid token: ${response.tokenProperties?.invalidReason}`,
      };
    }

    // Get the risk score
    const score = response.riskAnalysis?.score || 0;

    // Log reasons if available
    if (response.riskAnalysis?.reasons) {
      console.log('Risk reasons:', response.riskAnalysis.reasons);
    }

    // Check if the expected action was executed
    const actionMatches = response.tokenProperties?.action === recaptchaAction;
    if (!actionMatches) {
      console.log(
        'Action mismatch. Expected:',
        recaptchaAction,
        'Got:',
        response.tokenProperties?.action
      );
    }

    // You can customize this threshold based on your needs
    const isHuman = score > 0.5 && actionMatches;

    return {
      success: true,
      score: score,
      isHuman: isHuman,
      action: response.tokenProperties?.action,
    };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return {
      success: false,
      score: 0,
      error:
        error instanceof Error
          ? error.message
          : 'Unknown error during verification',
    };
  }
}
