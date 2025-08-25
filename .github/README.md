# GitHub Configuration

This directory contains GitHub-specific configuration files including CI/CD workflows and project automation.

## 📁 Directory Contents

### 🔄 **Workflows** (`workflows/`)

GitHub Actions workflow definitions for automated testing and quality assurance.

### 🤖 **Copilot Instructions** (`copilot-instructions.md`)

Configuration and guidance for GitHub Copilot integration with this project.

## 🚀 CI/CD Workflows

### **🚨 Sanity Tests** (`workflows/sanity.yml`)

**Purpose**: Critical functionality validation  
**Schedule**: Every 30 minutes  
**Triggers**:

- Automated: `cron: '*/30 * * * *'`
- Manual: Workflow dispatch with test type selection

**Features**:

- ⚡ Fast execution (~5-10 minutes)
- 🎯 Core functionality only (`@sanity` tests)
- 📊 30-day artifact retention
- 🔧 Manual trigger with reason tracking

### **🌙 Nightly Regression** (`workflows/nightly-regression.yml`)

**Purpose**: Comprehensive application validation  
**Schedule**: Daily at 2 AM UTC  
**Triggers**:

- Automated: `cron: '0 2 * * *'`
- Manual: Workflow dispatch with test type selection

**Features**:

- 🔍 Full test suite execution
- 🌐 Cross-browser testing
- 📊 Complete regression coverage
- ⏱️ Extended timeout (120 minutes)

### **⚡ Code Quality** (`workflows/code-quality.yml`)

**Purpose**: Code standards and quality enforcement  
**Triggers**:

- Push to main/master/develop branches
- Pull requests to main/master/develop branches

**Features**:

- 🔍 ESLint validation (zero warnings policy)
- ✨ Prettier formatting check
- 📘 TypeScript compilation validation
- 🚫 Fail-fast on quality issues

## 🎛️ Workflow Features

### **📊 Test Execution Matrix**

| **Workflow** | **Frequency**  | **Duration** | **Browser Coverage**    | **Test Coverage**    |
| ------------ | -------------- | ------------ | ----------------------- | -------------------- |
| **Sanity**   | Every 30 min   | 5-10 min     | Chrome, Firefox, Safari | `@sanity` only       |
| **Nightly**  | Daily 2 AM UTC | 30-45 min    | Chrome, Firefox, Safari | Full test suite      |
| **Quality**  | On push/PR     | 2-5 min      | N/A                     | Code validation only |

### **🎯 Manual Trigger Options**

All workflows support manual execution with customizable parameters:

```yaml
workflow_dispatch:
  inputs:
    test_type:
      description: 'Type of tests to run'
      required: true
      default: 'sanity'
      type: choice
      options:
        - sanity
        - regression
        - all
    reason:
      description: 'Reason for running tests manually'
      required: false
      default: 'Manual test run'
```

### **🔧 Environment Configuration**

Workflows use GitHub Secrets for sensitive configuration:

- `BASE_URL` - Target application URL
- Additional secrets as needed for different environments

### **📈 Artifact Management**

| **Artifact Type**   | **Retention Period** | **Contents**                      |
| ------------------- | -------------------- | --------------------------------- |
| **Test Reports**    | 30 days              | HTML reports, screenshots, videos |
| **Quality Results** | 7 days               | Linting results, compilation logs |
| **Traces**          | 30 days              | Playwright execution traces       |

## 🔄 Workflow Orchestration

### **Dependency Flow**

```
Code Push/PR
    ↓
Code Quality Check
    ↓ (on success)
[Optional] Full Test Suite
    ↓
Merge/Deploy
```

### **Scheduled Execution**

```
Every 30 minutes → Sanity Tests
Daily 2 AM UTC → Nightly Regression
```

## 🛠️ Configuration Management

### **Environment Variables**

Common environment variables across workflows:

```yaml
env:
  BASE_URL: ${{ secrets.BASE_URL }}
  TEST_TAGS: '@sanity' # or dynamic based on workflow
  NODE_VERSION: 'lts/*'
  TIMEOUT_MINUTES: 60 # or 120 for regression
```

### **Runner Configuration**

All workflows use:

- **OS**: `ubuntu-latest`
- **Node.js**: LTS version
- **Package Manager**: npm
- **Browser Installation**: `--with-deps` for full dependencies

### **Parallel Execution**

- **Sanity Tests**: Optimized for speed, moderate parallelization
- **Regression Tests**: Full parallel execution across browsers
- **Quality Checks**: Sequential for accurate reporting

## 🔧 Workflow Customization

### **Adding New Workflows**

1. Create new `.yml` file in `workflows/` directory
2. Follow existing pattern for consistency
3. Include proper triggers and environment setup
4. Add artifact collection for results
5. Update this README with workflow description

### **Modifying Existing Workflows**

1. Test changes in feature branch first
2. Validate workflow syntax
3. Ensure backwards compatibility
4. Update documentation if behavior changes

### **Environment-Specific Configuration**

For different environments (staging, production):

```yaml
strategy:
  matrix:
    environment: [staging, production]
env:
  BASE_URL: ${{ secrets[format('BASE_URL_{0}', matrix.environment)] }}
```

## 📊 Monitoring & Alerts

### **Failure Notifications**

- **GitHub Notifications**: Automatic on workflow failures
- **Email Alerts**: Configured per repository settings
- **Slack Integration**: Optional webhook configuration

### **Status Monitoring**

- **GitHub Actions Tab**: Real-time workflow status
- **README Badges**: Status indicators in main README
- **API Access**: GitHub Actions API for external monitoring

## 🎯 Best Practices

### **Workflow Design**

- ⚡ **Fast Feedback**: Sanity tests complete quickly
- 🔍 **Comprehensive Coverage**: Nightly tests catch edge cases
- 🛡️ **Quality Gates**: Block bad code from merging
- 📊 **Clear Reporting**: Detailed artifacts and logs

### **Resource Optimization**

- 🎯 **Selective Testing**: Use tags to run appropriate test subsets
- 🔄 **Caching**: npm dependencies cached for speed
- ⚖️ **Parallel Execution**: Balance speed vs resource usage
- 📈 **Monitoring**: Track execution times and optimize

### **Maintenance**

- 📅 **Regular Review**: Monthly workflow performance analysis
- 🔄 **Version Updates**: Keep actions and dependencies current
- 📊 **Metrics Tracking**: Monitor success rates and execution times
- 🔧 **Optimization**: Continuously improve performance

## 🔗 Related Documentation

- **Testing Strategy**: See `../docs/TESTING.md`
- **Development Workflow**: See `../docs/DEVELOPMENT.md`
- **Troubleshooting**: See `../docs/TROUBLESHOOTING.md`
- **GitHub Actions Docs**: https://docs.github.com/en/actions

---

**🎛️ Need to modify workflows?**  
Please test changes thoroughly and ensure they align with the overall testing strategy outlined in the documentation.
