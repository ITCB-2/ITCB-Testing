# ITCB Testing - Playwright Reports Setup

## GitHub Pages Configuration for Automated Report Hosting

This repository is configured to automatically deploy Playwright HTML reports to GitHub Pages whenever CI workflows complete.

### 🚀 What's Configured

1. **Automated Deployment**: Reports are automatically deployed after:
   - Sanity Tests (every 30 minutes)
   - Nightly Regression Tests (daily at 2 AM UTC)

2. **Report Access**:
   - **Live Reports**: https://itcb-2.github.io/ITCB-Testing/
   - **Latest Report**: https://itcb-2.github.io/ITCB-Testing/latest/
   - **Archive**: Historical reports stored under `/archives/`

**Note**: Code Quality workflows focus on development standards (linting, formatting, TypeScript) and do not generate HTML reports.

### 📋 Setup Requirements

To enable this functionality, the repository administrator needs to:

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
   - Ensure the repository has GitHub Pages enabled

2. **Required Permissions**:
   - The workflows have the necessary permissions configured
   - `GITHUB_TOKEN` automatically has the required access

3. **Repository Secrets**:
   - Ensure `BASE_URL` repository secret is configured for test execution
   - Go to repository Settings → Secrets and variables → Actions
   - Add `BASE_URL` as a repository secret (not organization-level)

### 🔧 Workflow Files Created/Modified

1. **New File**: `.github/workflows/deploy-reports.yml`
   - Handles automatic deployment to GitHub Pages
   - Triggers after test workflows complete
   - Creates a beautiful report index page

2. **Modified Files**:
   - `sanity.yml` - Enhanced with report deployment links
   - `nightly-regression.yml` - Enhanced with report deployment links
   - `code-quality.yml` - Maintained as development-focused quality gate

### 📊 Report Features

- **Beautiful Landing Page**: Clean, responsive interface for browsing reports
- **Two Report Types**: Sanity and Regression test reports for stakeholder review
- **Archive System**: Historical reports with timestamps
- **Direct Links**: Easy access to latest and archived reports
- **Automatic Updates**: Reports update automatically after each test run
- **Stakeholder Focus**: HTML reports designed for managers and decision makers

### 🛠 Manual Deployment

You can also manually trigger report deployment:

1. Go to Actions → "Deploy Playwright Reports to GitHub Pages"
2. Click "Run workflow"
3. Select which test workflow's reports to deploy (sanity or regression)
4. Click "Run workflow"

### 📱 Accessing Reports

Once deployed, reports will be available at:

- Main page: `https://itcb-2.github.io/ITCB-Testing/`
- Latest report: `https://itcb-2.github.io/ITCB-Testing/latest/`

### 🔍 Troubleshooting

If reports aren't appearing:

1. Check that GitHub Pages is enabled in repository settings
2. Verify that the workflows completed successfully
3. Ensure artifacts were uploaded properly
4. Check the "Deploy Playwright Reports" workflow logs

### 📁 File Structure

```
├── .github/workflows/
│   ├── deploy-reports.yml      # New: GitHub Pages deployment
│   ├── sanity.yml             # Modified: Added report deployment
│   ├── nightly-regression.yml # Modified: Added report deployment
│   └── code-quality.yml       # Modified: Added test execution
└── docs/
    └── GITHUB_PAGES_SETUP.md  # This file
```

---

**Note**: The first deployment may take a few minutes to become available after enabling GitHub Pages.
