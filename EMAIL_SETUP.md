# EmailJS Setup Guide

## Quick Setup to Receive Form Submissions

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook"
4. Connect your email: `hitayushdange@gmail.com`
5. Copy the **Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Career Guidance Request from {{from_name}}

**Body:**
```
New Career Guidance Request

Name: {{from_name}}
Age: {{age}}
Email: {{from_email}}
Phone: {{phone}}
Education: {{education}}

Interests: {{interests}}
Current Situation: {{current_situation}}
Career Goals: {{goals}}

---
This request was submitted through your Careerly AI website.
```

4. Save and copy the **Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (looks like: `user_xxxxxxxxxxxxxxxx`)

### Step 5: Update Code
Replace these placeholders in `src/App.jsx`:

```javascript
// Line 18: Replace YOUR_PUBLIC_KEY
emailjs.init("user_xxxxxxxxxxxxxxxx");

// Line 58: Replace YOUR_SERVICE_ID  
'YOUR_SERVICE_ID' → 'service_xxxxxxx'

// Line 59: Replace YOUR_TEMPLATE_ID
'YOUR_TEMPLATE_ID' → 'template_xxxxxxx'
```

### Step 6: Test
1. Fill out the form on your website
2. Submit and check your email
3. You should receive the form data immediately!

## Free Plan Limits
- 200 emails per month
- Perfect for starting out

## Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- Support: support@emailjs.com

That's it! Your form will now send real emails to your inbox. 🎉 