import { TransactionalEmailsApi, SendSmtpEmail } from '@getbrevo/brevo';

export async function sendEmail(data: { name: string; email: string; message: string }) {
  const apiInstance = new TransactionalEmailsApi();
  apiInstance.setApiKey(process.env.BREVO_API_KEY || '');

  const sendSmtpEmail = new SendSmtpEmail();
  sendSmtpEmail.subject = 'Nouveau message depuis le formulaire de contact';
  sendSmtpEmail.htmlContent = `
    <html><body>
    <h1>Nouveau message</h1>
    <p>Nom: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Message: ${data.message}</p>
    </body></html>
  `;
  sendSmtpEmail.sender = { name: 'Votre Site', email: 'noreply@votresite.com' };
  sendSmtpEmail.to = [{ email: 'demetleo@hotmail.fr', name: 'Léo DEMET' }];

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
}
