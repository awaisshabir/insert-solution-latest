# EmailJS Setup Guide

This guide will help you configure EmailJS to enable contact form email functionality.

## 📧 What is EmailJS?

EmailJS allows you to send emails directly from client-side JavaScript without a backend server. It's free for up to 200 emails per month.

## 🚀 Setup Steps

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** in the left sidebar
3. Click **Add New Service**
4. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook/Office365**
   - **Yahoo**
   - Or any other SMTP service
5. Click **Connect Account** and follow the authentication steps
6. **Copy the Service ID** - you'll need this later

### Step 3: Create Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Message:
{{message}}

---
This message was sent from the Insert Solution website contact form.
```

4. Template variables to use:
   - `{{from_name}}` - Contact person's name
   - `{{from_email}}` - Contact person's email
   - `{{phone}}` - Contact person's phone
   - `{{company}}` - Company name
   - `{{message}}` - Message content
   - `{{to_name}}` - Recipient name (your company)

5. Set the **To Email** to your company email (e.g., info@insertsolution.com)
6. Click **Save**
7. **Copy the Template ID** - you'll need this later

### Step 4: Get Your Public Key

1. Go to **Account** → **General** in the left sidebar
2. Find your **Public Key** in the API Keys section
3. **Copy the Public Key**

### Step 5: Configure Your Project

1. Create a `.env` file in your project root (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. Add your EmailJS credentials to `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
   ```

3. **Important**: Add `.env` to your `.gitignore` to keep credentials private:
   ```
   .env
   ```

### Step 6: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open the website in your browser
3. Navigate to the Contact section
4. Fill out the form and submit
5. Check your email inbox - you should receive the form submission

## 🔒 Security Best Practices

### 1. Environment Variables
- Never commit `.env` files to Git
- Use `.env.example` for documentation only
- Keep your Public Key private

### 2. Email Protection
- Enable **reCAPTCHA** in EmailJS dashboard (Account → Security)
- Set up email rate limiting
- Monitor your EmailJS usage dashboard

### 3. Production Deployment

For production (Netlify, Vercel, etc.):

1. Add environment variables in your hosting platform:
   - Netlify: Site Settings → Environment Variables
   - Vercel: Project Settings → Environment Variables
   
2. Add these variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. Rebuild and redeploy your site

## 📊 EmailJS Free Tier Limits

- **200 emails/month** - Free forever
- No credit card required
- Upgrade available if you need more

## 🐛 Troubleshooting

### Form submission fails with "ServiceID not found"
- Double-check your Service ID in `.env`
- Ensure the email service is connected in EmailJS dashboard
- Restart your dev server after changing `.env` values

### Emails not arriving
- Check spam/junk folder
- Verify email service is properly connected
- Check EmailJS dashboard for error logs
- Ensure template variables match exactly

### Environment variables not working
- Variable names must start with `VITE_`
- Restart dev server after changing `.env`
- Check for typos in variable names

### Rate limit errors
- Free tier allows 200 emails/month
- Upgrade plan if you exceed limit
- Enable reCAPTCHA to prevent spam

## 🎨 Customization

### Change Email Template

1. Go to EmailJS dashboard → Email Templates
2. Select your template
3. Modify the subject line or body
4. Add HTML formatting if desired
5. Save changes

### Add Auto-Reply

1. Create a second template for auto-replies
2. Set recipient to `{{from_email}}`
3. Create a thank you message
4. Update `Contact.tsx` to send two emails (optional)

### Add File Attachments

1. Upgrade to EmailJS paid plan (required for attachments)
2. Use `emailjs.sendForm()` instead of `emailjs.send()`
3. Add file input to your form

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS Templates](https://www.emailjs.com/docs/user-guide/creating-email-template/)

## 💡 Alternative Solutions

If you need more than 200 emails/month or advanced features:

1. **Formspree** - $10/month for 1000 emails
2. **Web3Forms** - Free, unlimited emails
3. **Backend API** - Full control with Node.js/Express
4. **Netlify Forms** - Free with Netlify hosting

## ✅ Setup Checklist

- [ ] Created EmailJS account
- [ ] Connected email service (Gmail, etc.)
- [ ] Created email template with proper variables
- [ ] Copied Service ID, Template ID, and Public Key
- [ ] Created `.env` file with credentials
- [ ] Added `.env` to `.gitignore`
- [ ] Tested contact form locally
- [ ] Received test email successfully
- [ ] Enabled reCAPTCHA (recommended)
- [ ] Added environment variables to hosting platform
- [ ] Tested in production

---

**Need Help?** Contact EmailJS support or check their documentation.
