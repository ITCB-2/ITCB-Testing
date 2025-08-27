# GitHub Actions Workflows

## 🚀 Workflow Overview

This repository uses GitHub Actions for automated testing and report deployment:

### **Automated Workflows**

1. **Sanity Tests** (`sanity.yml`)
   - **Trigger**: Every 30 minutes + manual
   - **Purpose**: Quick smoke tests for critical functionality
   - **Reports**: Deployed to GitHub Pages

2. **Nightly Regression Tests** (`nightly-regression.yml`)
   - **Trigger**: Daily at 2 AM UTC + manual
   - **Purpose**: Comprehensive test suite
   - **Reports**: Deployed to GitHub Pages

3. **Code Quality** (`code-quality.yml`)
   - **Trigger**: Push to main, PRs + manual
   - **Purpose**: Linting, formatting, TypeScript checks
   - **Focus**: Development quality gates

4. **Deploy Reports** (`deploy-reports.yml`)
   - **Trigger**: After test workflows complete + manual
   - **Purpose**: Deploy Playwright HTML reports to GitHub Pages

5. **Slack Notifications** (`slack-notifications.yml`)
   - **Trigger**: After report deployment + manual
   - **Purpose**: Notify team about test results

## 🔐 Required Repository Secrets

Configure these **repository-level secrets** (Settings → Secrets and variables → Actions):

### **Essential Secrets**

- **`BASE_URL`**
  - Target application URL for testing
  - Example: `https://www.itcb.org.il`
  - Used by: Sanity and Nightly regression workflows

### **Optional Secrets**

- **`SLACK_WEBHOOK_URL`**
  - Slack webhook for team notifications
  - Used by: Slack notification workflow

### **Automatic Secrets**

- **`GITHUB_TOKEN`**
  - Automatically provided by GitHub
  - Used for: GitHub Pages deployment, artifact management

## ⚠️ Secret Management Guidelines

### **✅ Do This**

- Use **repository-level secrets** only
- Set up secrets in repository settings
- Use `.env` file for local development
- Keep secrets minimal and specific

### **❌ Avoid This**

- Organization-level secrets for this project
- Hardcoding secrets in workflows
- Committing secrets to version control
- Sharing secrets across repositories unnecessarily

## 🔧 Manual Workflow Triggers

All workflows support manual triggering via GitHub Actions UI:

1. Go to **Actions** tab
2. Select workflow
3. Click **Run workflow**
4. Choose options (if available)
5. Click **Run workflow**

## 📊 Report Access

- **Live Reports**: https://itcb-2.github.io/ITCB-Testing/

## 🛠 Troubleshooting

### **Common Issues**

1. **Workflow fails with "Environment variable not set"**
   - Check that required repository secrets are configured
   - Verify secret names match exactly (case-sensitive)

2. **Reports not deploying**
   - Ensure GitHub Pages is enabled
   - Check deploy-reports workflow logs
   - Verify test workflows completed successfully

3. **Slack notifications not working**
   - Verify `SLACK_WEBHOOK_URL` secret is set
   - Check Slack webhook URL is valid
   - Ensure channel permissions are correct

### **Debugging Steps**

1. Check workflow logs in Actions tab
2. Verify secrets are properly configured
3. Test workflows manually with workflow_dispatch
4. Review artifact uploads/downloads

---

For more details, see:

- [Development Guide](../docs/DEVELOPMENT.md)
- [GitHub Pages Setup](../docs/GITHUB_PAGES_SETUP.md)
- [Testing Guide](../docs/TESTING.md)
