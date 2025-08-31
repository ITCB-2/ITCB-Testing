# CI/CD Workflows Documentation

> 🚀 **Automated Testing & Deployment Pipeline** for the ITCB Testing Framework

## 🎯 Overview

The ITCB Testing Framework uses GitHub Actions to provide a comprehensive CI/CD pipeline that ensures code quality, runs automated tests, generates reports, and notifies the team of results. The pipeline is designed for resilience, with intelligent fallback mechanisms for storage quota issues.

## 🏗️ Workflow Architecture

```mermaid
graph TD
    A[📋 Sanity Tests<br/>Every 2 hours] --> E[📊 Deploy Reports]
    B[🌙 Regression Tests<br/>Daily 2 AM UTC] --> E
    C[🔧 Manual Triggers] --> E
    E --> F[📱 Slack Notifications]
    D[🧹 Artifact Cleanup<br/>Daily 2 AM UTC] --> G[💾 Storage Management]

    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style E fill:#fff3e0
    style F fill:#e8f5e8
    style D fill:#fce4ec
```

## 📋 Core Workflows

### 1. Sanity Tests (`sanity.yml`)

**🎯 Purpose**: Fast feedback loop for critical functionality

**⏰ Schedule**:

- **Automatic**: Every 2 hours (`0 */2 * * *`)
- **Manual**: On-demand via GitHub Actions UI

**🎭 Test Scope**:

- Tests tagged with `@sanity` only
- Critical user journeys and core functionality
- Optimized for speed (~5-10 minutes)

**⚙️ Configuration**:

```yaml
timeout: 60 minutes
browser: All (chromium, firefox, webkit)
retention: 3 days
artifact: sanity-playwright-report-{run_number}
```

**🛡️ Resilience Features**:

- Storage quota fallback with `continue-on-error`
- Intelligent error reporting
- Automatic retry logic for critical tests

---

### 2. Regression Tests (`nightly-regression.yml`)

**🎯 Purpose**: Comprehensive daily validation

**⏰ Schedule**:

- **Automatic**: Daily at 2:00 AM UTC (`0 2 * * *`)
- **Manual**: On-demand via GitHub Actions UI

**🎭 Test Scope**:

- Complete Playwright test suite
- All test scenarios including edge cases
- Cross-browser compatibility validation

**⚙️ Configuration**:

```yaml
timeout: 120 minutes
browser: All (chromium, firefox, webkit)
retention: 7 days
artifact: regression-playwright-report-{run_number}
```

**📊 Extended Coverage**:

- Full regression testing
- Performance validation
- Visual regression testing

---

### 3. Deploy Reports (`deploy-reports.yml`)

**🎯 Purpose**: Publishes test results to GitHub Pages

**⚙️ Trigger Logic**:

```yaml
workflow_run:
  workflows: ['Sanity Tests', 'Regression Tests']
  types: [completed]
```

**📊 Process Flow**:

1. **Wait** for test workflow completion
2. **Download** latest test artifacts
3. **Extract** HTML reports and assets
4. **Organize** reports by workflow and timestamp
5. **Deploy** to GitHub Pages
6. **Trigger** Slack notifications

**🌐 Output**:

- **Live Reports**: `https://itcb-2.github.io/ITCB-Testing/`
- **Latest**: `/latest/{workflow-name}/`
- **Historical**: `/reports/{workflow-name}/{timestamp}/`

**🧹 Maintenance**:

- Keeps last 10 reports per workflow
- Automatic cleanup of old reports
- Organized directory structure

---

### 4. Slack Notifications (`slack-notifications.yml`)

**🎯 Purpose**: Team communication and status updates

**📱 Trigger**: When deploy workflow completes

**📢 Channel**: `#testing-updates`

**🌍 Timezone**: Israel (Asia/Jerusalem)

**💬 Notification Content**:

```yaml
Success Message:
  - ✅ Test status with contextual emoji
  - 🔗 Direct links to live reports
  - 📊 Workflow execution details
  - 🕐 Israel timezone timestamps

Failure Message:
  - ❌ Clear failure indicators
  - 🔧 Action required notifications
  - 📋 Direct links to workflow logs
  - 🆘 Team escalation context
```

**🎨 Smart Messaging**:

- **Success**: Celebratory tone with report links
- **Failure**: Action-oriented with debugging links
- **Context**: Workflow name, trigger type, timestamps

---

### 5. Artifact Cleanup (`cleanup-artifacts.yml`)

**🎯 Purpose**: Automated storage management and quota prevention

**⏰ Schedule**: Daily at 2:00 AM UTC (`0 2 * * *`)

**🧹 Cleanup Strategy**:

```yaml
default_retention: 3 days
configurable_options: [1, 2, 3, 7 days]
dry_run_support: Preview before deletion
api_integration: GitHub REST API
```

**📊 Cleanup Process**:

1. **Scan** all repository artifacts
2. **Calculate** storage usage
3. **Identify** artifacts older than retention period
4. **Delete** expired artifacts via GitHub API
5. **Report** storage saved and remaining artifacts

**⚙️ Manual Options**:

- **Days to Keep**: 1, 2, 3, or 7 days
- **Dry Run**: Preview deletions without executing
- **Immediate Execution**: For quota emergencies

## 🛡️ Resilience & Fallback Strategies

### Storage Quota Management

**🚨 Problem**: GitHub has storage quotas that can block CI pipelines

**✅ Solution**: Multi-tier fallback approach

#### **Tier 1: Graceful Degradation**

```yaml
- name: Upload artifacts (with quota fallback)
  continue-on-error: true
  id: upload-artifacts
```

- Tests continue even if upload fails
- Provides helpful error context
- Maintains CI pipeline availability

#### **Tier 2: Preventive Maintenance**

```yaml
# Daily cleanup at 2 AM UTC
schedule:
  - cron: '0 2 * * *'
```

- Automated artifact cleanup
- Configurable retention periods
- Proactive storage management

#### **Tier 3: Emergency Response**

```yaml
# Manual cleanup with custom settings
workflow_dispatch:
  inputs:
    days_to_keep: ['1', '2', '3', '7']
    dry_run: ['true', 'false']
```

- Immediate manual cleanup
- Preview mode for safety
- Flexible retention policies

### Test Execution Resilience

**🔄 Intelligent Retry Logic**:

```yaml
CI Environment:
  @sanity tests: 2 retries (critical functionality)
  @regression tests: 2 retries (stability assurance)
  General tests: 0 retries (fast feedback)

Local Development:
  All tests: 0 retries (immediate feedback)
```

**⚡ Fast Failure Detection**:

- Immediate local feedback
- CI retries only for tagged critical tests
- Balanced speed vs. reliability

## 📊 Workflow Execution Timeline

### **Daily Schedule (UTC)**

```
02:00 - Regression Tests + Artifact Cleanup
04:00 - Sanity Tests
06:00 - Sanity Tests
08:00 - Sanity Tests
10:00 - Sanity Tests
12:00 - Sanity Tests
14:00 - Sanity Tests
16:00 - Sanity Tests
18:00 - Sanity Tests
20:00 - Sanity Tests
22:00 - Sanity Tests
00:00 - Sanity Tests
```

### **Workflow Dependencies**

```
Test Workflows → Deploy Reports → Slack Notifications
     ↓
Artifact Cleanup (storage management)
```

## 🔧 Configuration & Secrets

### **Required Repository Secrets**

1. **`BASE_URL`**
   - **Purpose**: Target application URL
   - **Example**: `https://www.itcb.org.il`
   - **Used by**: Sanity & Regression tests

2. **`SLACK_WEBHOOK_URL`** _(Optional)_
   - **Purpose**: Team notifications
   - **Format**: Slack webhook URL
   - **Used by**: Slack notifications workflow

### **Workflow Permissions**

```yaml
permissions:
  contents: read # Repository access
  pages: write # GitHub Pages deployment
  id-token: write # OIDC token access
  actions: read # Workflow run access
```

## 📈 Monitoring & Metrics

### **Success Indicators**

- ✅ Test execution completion
- ✅ Artifact upload success
- ✅ GitHub Pages deployment
- ✅ Slack notification delivery

### **Failure Detection**

- ❌ Test failures with detailed reports
- ❌ Storage quota exceeded warnings
- ❌ Deployment failures with rollback
- ❌ Network connectivity issues

### **Performance Metrics**

- ⏱️ Sanity tests: ~5-10 minutes
- ⏱️ Regression tests: ~30-45 minutes
- ⏱️ Report deployment: ~2-3 minutes
- ⏱️ Cleanup: ~1-2 minutes

## 🎯 Workflow Triggers Summary

| **Workflow**        | **Automatic**        | **Manual** | **Dependency**  |
| ------------------- | -------------------- | ---------- | --------------- |
| Sanity Tests        | Every 2 hours        | ✅         | None            |
| Regression Tests    | Daily 2 AM           | ✅         | None            |
| Deploy Reports      | On test completion   | ✅         | Test workflows  |
| Slack Notifications | On deploy completion | ✅         | Deploy workflow |
| Artifact Cleanup    | Daily 2 AM           | ✅         | None            |

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

4. **Storage quota exceeded**
   - Run manual artifact cleanup workflow
   - Check cleanup workflow logs
   - Verify retention settings are appropriate

### **Debugging Steps**

1. Check workflow logs in Actions tab
2. Verify secrets are properly configured
3. Test workflows manually with workflow_dispatch
4. Review artifact uploads/downloads
5. Monitor storage usage in repository settings

## 🔗 Related Documentation

- **🏗️ Architecture**: [Architecture Guide](../docs/ARCHITECTURE.md)
- **🛠️ Development**: [Development Guide](../docs/DEVELOPMENT.md)
- **🧪 Testing**: [Testing Guide](../docs/TESTING.md)
- **🔄 Retry Logic**: [Retry Configuration](../docs/RETRY_CONFIGURATION.md)
- **🔧 Troubleshooting**: [Troubleshooting Guide](../docs/TROUBLESHOOTING.md)

---

**💙 Automated with care for the ITCB Testing Team**

🚀 **CI/CD Pipeline Status**: [View Live Workflows](https://github.com/ITCB-2/ITCB-Testing/actions)
