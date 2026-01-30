# CI/CD Workflows Documentation

> 🚀 **Automated Testing & Deployment Pipeline** for the ITCB Testing Framework

## 🎯 Overview

The ITCB Testing Framework uses GitHub Actions to provide a comprehensive CI/CD pipeline that ensures code quality, runs automated tests, generates reports, and notifies the team of results. The pipeline features a modular, reusable architecture with intelligent fallback mechanisms for storage quota issues.

## 🏗️ Workflow Architecture

```
MODULAR WORKFLOW ARCHITECTURE:
Developer Push/PR → Code Quality Check → Pass/Fail → Merge Allowed/Blocked

TESTING WORKFLOWS (Modular Design):
Sanity Tests → Test Runner (Generic) → Deploy Reports → Slack Notifications
nightly Tests → Test Runner (Generic) → Deploy Reports → Slack Notifications
Future Tests → Test Runner (Generic) → Deploy Reports → Slack Notifications

SUPPORTING WORKFLOWS:
Artifact Cleanup → Storage Management & Quota Prevention
```

## 📋 Core Workflows

### 1. Code Quality Check (`code-quality.yml`)

**🎯 Purpose**: Automated code quality validation for pull requests and commits

**⚙️ Triggers**:

```yaml
push: [main, master, develop]
pull_request: [main, master, develop]
```

**🔍 Quality Gates**:

- **Biome**: Combined linting and formatting with zero-warning policy
- **TypeScript**: Type checking and compilation

**⚙️ Configuration**:

```yaml
timeout: 60 minutes
browser: N/A (code quality only)
retention: 2 days (on failure)
artifact: test-results (failure cases only)
```

**🛡️ Quality Assurance**:

- Blocks merging if quality gates fail
- Provides detailed feedback on issues
- Caches dependencies for faster execution

---

### 2. Test Runner (`test-runner.yml`) - **🆕 Generic Test Execution Engine**

**🎯 Purpose**: Reusable workflow that executes any type of Playwright tests with consistent behavior

**⚙️ Trigger**: Called by specific test workflows (Sanity, nightly, Future tests)

**🐳 Docker (CI only)**: In CI, tests run **only inside Docker**:
1. **Build**: `docker compose build`
2. **Run**: `docker compose run --rm test-runner <test_command>` (e.g. `npm run test:sanity` or `npm run test:nightly`)

Locally, run `npm test` or `npm run test:sanity` / `npm run test:nightly` with **no Docker**—Playwright runs directly on the host.

**🔧 Configurable Parameters**:

```yaml
inputs:
  test_type: 'sanity' | 'nightly' | 'e2e' | 'smoke' | custom
  test_command: 'npm run test:sanity' | 'npm run test:nightly' | custom
  retention_days: 3 | 7 | custom (artifact retention)
  test_description: 'Sanity Tests' | 'nightly Tests' | custom
  cleanup_before_run: true | false (run cleanup first)
  timeout_minutes: 60 | 120 | custom
  test_tags: '@sanity' | '@nightly' | custom Playwright tags
```

**🎭 Test Execution Flow**:

1. **Optional Cleanup**: Runs artifact cleanup if enabled
2. **Checkout**: Repository checkout
3. **Build Docker image**: `docker compose build` (CI only)
4. **Run tests in Docker**: `docker compose run --rm test-runner <test_command>` (e.g. `npm run test:sanity`)
5. **Artifact Upload**: Always uploads reports (even on failure)
6. **Summary**: Provides clean test completion status

**🛠️ Reusable Design**:

- **Any Test Type**: Supports sanity, nightly, e2e, smoke, or custom tests
- **Flexible Configuration**: All parameters are customizable
- **Consistent Behavior**: Same setup, caching, and error handling for all tests
- **Future-Ready**: Adding new test types requires minimal configuration

---

### 3. Sanity Tests (`sanity.yml`)

**🎯 Purpose**: Fast feedback loop for critical functionality using the generic Test Runner

**⏰ Schedule**:

- **Automatic**: Every 2 hours (`0 */2 * * *`)
- **Manual**: On-demand via GitHub Actions UI

**🔧 Implementation**:

```yaml
jobs:
  run-sanity-tests:
    uses: ./.github/workflows/core-test-runner.yml
    with:
      test_type: 'sanity'
      test_command: 'npm run test:sanity'
      test_description: 'Sanity Tests'
      retention_days: '3'
      cleanup_before_run: 'true'
```

**🎭 Test Scope**:

- Tests tagged with `@sanity` only
- Critical user journeys and core functionality
- Optimized for speed (~5-10 minutes)

**⚙️ Configuration**:

```yaml
timeout: 60 minutes (inherited from Test Runner)
browser: All (chromium, firefox, webkit)
retention: 3 days
artifact: playwright-report-sanity-{run_number}
```

---

### 4. nightly Tests (`tests-nightly.yml`)

**🎯 Purpose**: Comprehensive daily validation using the generic Test Runner

**⏰ Schedule**:

````yaml
cron: '0 2 * * *'
- **Automatic**: Daily at 2:00 AM UTC (`0 2 * * *`)
- **Manual**: On-demand via GitHub Actions UI

**🔧 Implementation**:

```yaml
jobs:
  run-nightly-tests:
    uses: ./.github/workflows/core-test-runner.yml
    with:
      test_type: 'nightly'
      test_command: 'npm run test:nightly'
      test_description: 'nightly Tests'
      retention_days: '7'
      cleanup_before_run: 'true'
````

**🎭 Test Scope**:

- Complete Playwright test suite
- All test scenarios including edge cases
- Cross-browser compatibility validation

**⚙️ Configuration**:

```yaml
timeout: 120 minutes (inherited from Test Runner)
browser: All (chromium, firefox, webkit)
retention: 7 days
artifact: playwright-report-nightly-{run_number}
```

---

### 5. Deploy Reports (`deploy-reports.yml`)

**🎯 Purpose**: Publishes test results to GitHub Pages with enhanced flexibility

**⚙️ Trigger Logic**:

```yaml
workflow_run:
  types: [completed] # Any workflow completion
```

**🧠 Smart Detection**:

- **Universal Trigger**: Responds to ANY workflow completion
- **Intelligent Artifact Resolution**: Automatically finds test artifacts
- **Generic Support**: Works with current and future test workflows
- **Fallback Handling**: Creates helpful pages when artifacts are missing

**📊 Enhanced Process Flow**:

1. **Detect Workflow**: Identifies which workflow completed
2. **Resolve Artifacts**: Uses API to find playwright-report artifacts
3. **Extract & Organize**: Handles nested directory structures
4. **Deploy**: Publishes to GitHub Pages with proper error handling
5. **Notify**: Triggers Slack notifications with contextual information

**🌐 Output**:

- **Live Reports**: `https://itcb-2.github.io/ITCB-Testing/`
- **Automatic Detection**: Works with any `playwright-report-*` artifacts
- **Fallback Pages**: Helpful messages when reports are unavailable

**🎯 Key Improvements**:

- **No Hardcoded Names**: Works with any test workflow
- **API-Based Discovery**: Finds artifacts dynamically
- **Better Error Context**: Shows workflow names and run numbers in fallbacks

---

### 6. Slack Notifications (`slack-notifications.yml`)

**🎯 Purpose**: Team communication and status updates with enhanced context

**📱 Trigger**: When deploy workflow completes

**📢 Channel**: `#testing-updates`

**🌍 Timezone**: Israel (Asia/Jerusalem)

**🧠 Smart Context Detection**:

- **Dynamic Test Names**: Extracts actual test type from artifact names
- **Workflow Context**: Shows "Sanity Tests", "nightly Tests", etc.
- **Flexible URLs**: Uses deployment URLs with repository-based fallbacks

**💬 Enhanced Notification Content**:

```yaml
Success Message:
  - ✅ Test status with workflow-specific names
  - 🔗 Direct links to live reports
  - 📊 Workflow execution details
  - 🕐 Israel timezone timestamps

Failure Message:
  - ❌ Clear failure indicators with test context
  - 🔧 Action required notifications
  - 📋 Direct links to workflow logs
  - 🆘 Team escalation context
```

---

### 7. Artifact Cleanup (`cleanup-artifacts.yml`)

**🎯 Purpose**: Automated storage management and quota prevention

**⏰ Schedule**: Daily at 1:00 AM UTC (`0 1 * * *`) - one hour before nightly tests

**🧹 Enhanced Cleanup Strategy**:

```yaml
default_retention: 3 days
configurable_options: [1, 2, 3, 7 days]
dry_run_support: Preview before deletion
dual_policy_system: Age-based + Count-based retention
api_integration: GitHub REST API with pagination
```

**📊 Cleanup Process**:

1. **Scan** all repository artifacts with pagination support
2. **Group** artifacts by workflow type (sanity, nightly, quality)
3. **Apply Age Policy**: Delete artifacts older than retention period (default: 2 days)
4. **Apply Count Policy**: Keep only latest N artifacts per workflow type (default: 5)
5. **Delete** artifacts that violate either policy via GitHub API
6. **Report** storage saved, remaining artifacts, and recommendations

**📋 Dual Retention Policies**:

- **Age-based**: Removes artifacts older than specified days (prevents unlimited accumulation)
- **Count-based**: Keeps only the latest N artifacts per workflow type (prevents workflow spam)
- **Combined**: An artifact is deleted if it violates EITHER policy

**⚙️ Manual Options**:

- **Days to Keep**: 7, 14, 30, or 60 days
- **Max Artifacts per Workflow**: 3, 5, 10, or 20 artifacts
- **Dry Run**: Preview deletions without executing
- **Immediate Execution**: For quota emergencies

---

## 🏗️ Modular Architecture Benefits

### **🔧 Reusability**

- **Single Test Runner**: Handles all test types with consistent behavior
- **Shared Components**: Cleanup, deployment, and notifications work for all workflows
- **Easy Extension**: Adding new test types requires minimal configuration

### **🛡️ Maintainability**

- **Centralized Logic**: Test execution logic in one place
- **Consistent Updates**: Changes to test behavior apply to all workflows
- **Simplified Debugging**: Single source of truth for test execution

### **🚀 Scalability**

- **Future Test Types**: E2E, Smoke, Performance tests easily added
- **Custom Configurations**: Each test type can have unique settings
- **Parallel Execution**: Multiple test workflows can run simultaneously

### **🎯 Flexibility**

- **Optional Features**: Cleanup, custom timeouts, tags all configurable
- **Smart Defaults**: Sensible defaults with override capability
- **Context Awareness**: Workflows adapt based on their configuration

## Workflow Execution Timeline

### **Daily Schedule (UTC)**

```
01:00 - Enhanced Artifact Cleanup (dual-policy: 30-day + latest-5)
02:00 - nightly Tests + Report Deployment
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
Enhanced Artifact Cleanup (01:00 UTC)
     ↓
Code Quality Check (on PR/push) → Merge Protection
     ↓
Test Workflows → Test Runner → Deploy Reports → Slack Notifications
     ↓
Continuous Storage Management
```

## 🔧 Configuration & Secrets

### **Required Repository Secrets**

1. **`BASE_URL`**

   - **Purpose**: Target application URL
   - **Example**: `https://www.itcb.org.il`
   - **Used by**: Sanity & nightly tests

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

- ⏱️ Code quality check: ~2-5 minutes
- ⏱️ Test Runner setup: ~2-3 minutes
- ⏱️ Sanity tests: ~5-10 minutes
- ⏱️ nightly tests: ~30-45 minutes
- ⏱️ Report deployment: ~2-3 minutes
- ⏱️ Cleanup: ~1-2 minutes

## 🎯 Workflow Triggers Summary

| **Workflow**        | **Automatic**         | **Manual** | **Dependency**  |
| ------------------- | --------------------- | ---------- | --------------- |
| Artifact Cleanup    | Daily 1 AM            | ✅         | None            |
| Code Quality Check  | On push/PR            | ❌         | None            |
| Test Runner         | ❌ (Called by others) | ❌         | Test workflows  |
| Sanity Tests        | Every 2 hours         | ✅         | Test Runner     |
| nightly Tests       | Daily 2 AM            | ✅         | Test Runner     |
| Deploy Reports      | On test completion    | ✅         | Test workflows  |
| Slack Notifications | On deploy completion  | ✅         | Deploy workflow |

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

1. **Code Quality workflow fails**

   - Check Biome configuration and fix linting/formatting errors
   - Run `npm run check` locally to identify issues
   - Verify TypeScript compilation with `npm run type-check`
   - Ensure all dependencies are properly installed

2. **Workflow fails with "Environment variable not set"**

   - Check that required repository secrets are configured
   - Verify secret names match exactly (case-sensitive)

3. **Reports not deploying**

   - Ensure GitHub Pages is enabled
   - Check deploy-reports workflow logs
   - Verify test workflows completed successfully

4. **Slack notifications not working**

   - Verify `SLACK_WEBHOOK_URL` secret is set
   - Check Slack webhook URL is valid
   - Ensure channel permissions are correct

5. **Storage quota exceeded**

   - Run manual artifact cleanup workflow
   - Check cleanup workflow logs
   - Verify retention settings are appropriate

6. **New test workflow not deploying**
   - Ensure artifacts are named `playwright-report-{type}-{run_number}`
   - Check that workflow completes successfully
   - Verify deploy workflow can access the artifacts

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
