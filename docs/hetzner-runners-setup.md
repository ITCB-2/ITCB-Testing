# Self-Hosted GitHub Actions Runner on Hetzner Cloud Setup Guide

## Why is the Setup So Simple?

You might be wondering: **"Why do I just need to copy and paste a snippet into my .yml file?"**

The beauty of GitHub Actions lies in its simplicity and modularity. The `Cyclenerd/hcloud-github-runner` action handles all the complex infrastructure management behind the scenes:

- **Automatic VM Creation**: Spins up Hetzner Cloud servers on-demand
- **Runner Registration**: Automatically registers runners with your GitHub repository
- **Cleanup**: Destroys resources after job completion to minimize costs
- **Security**: Handles SSH keys, networking, and access controls
- **Monitoring**: Provides job status and resource usage tracking

This "one-line setup" approach is what makes GitHub Actions so powerful - complex infrastructure operations are abstracted into reusable, configurable actions.

## What You Get

### Cost Savings

- **GitHub-hosted runners**: ~$0.008/minute (Ubuntu)
- **Hetzner Cloud (CPX11)**: ~$0.0013/minute (60% cost reduction)
- **Hetzner Cloud (CPX21)**: ~$0.0026/minute (67% more CPU power for 30% less cost)

### Performance Benefits

- Dedicated resources (no sharing with other users)
- Faster start times for cached dependencies
- Customizable server specifications
- EU-based infrastructure (GDPR compliant)

## Prerequisites

Before you start, you need to set up the following secrets in your GitHub repository:

### 1. GitHub Personal Access Token (PAT)

Create a fine-grained personal access token with the following permissions:

**Repository permissions:**

- `Administration`: Read and Write (required for runner management)
- `Metadata`: Read (required for basic repository access)

**Steps to create:**

1. Go to [GitHub Settings > Developer settings > Personal access tokens > Fine-grained tokens](https://github.com/settings/personal-access-tokens/new)
2. Select your repository
3. Set expiration (recommend 90 days)
4. Grant the permissions listed above
5. Generate token and copy it

### 2. Hetzner Cloud API Token

Create an API token with read/write permissions:

**Steps to create:**

1. Go to [Hetzner Cloud Console](https://console.hetzner-cloud.com/)
2. Select your project
3. Navigate to Security > API Tokens
4. Generate new token with Read & Write permissions
5. Copy the token

### 3. Add Secrets to GitHub Repository

Add these secrets to your repository:

1. Go to your repository settings
2. Navigate to Secrets and variables > Actions
3. Add the following repository secrets:
   - `PERSONAL_ACCESS_TOKEN`: Your GitHub fine-grained PAT
   - `HCLOUD_TOKEN`: Your Hetzner Cloud API token

## Implementation

### Basic Usage

The simplest implementation is indeed just adding this to your workflow:

```yaml
- name: Self-Hosted GitHub Actions Runner on Hetzner Cloud
  uses: Cyclenerd/hcloud-github-runner@v1.2.0
  with:
    github_token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
    hcloud_token: ${{ secrets.HCLOUD_TOKEN }}
```

### Advanced Configuration

For production use, you'll want to customize the configuration:

```yaml
- name: Self-Hosted GitHub Actions Runner on Hetzner Cloud
  uses: Cyclenerd/hcloud-github-runner@v1.2.0
  with:
    github_token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
    hcloud_token: ${{ secrets.HCLOUD_TOKEN }}
    # Server configuration
    server_type: cpx21 # 3 vCPU, 4GB RAM (vs cpx11: 2 vCPU, 2GB RAM)
    server_location: nbg1 # Nuremberg datacenter
    server_image: ubuntu-22.04 # OS image
    # Runner configuration
    runner_name_prefix: 'hetzner-playwright-'
    runner_labels: 'hetzner,playwright,linux'
    # Cleanup
    server_keep_alive_minutes: 5 # Keep server alive for 5 minutes after job completion
```

## Complete Workflow Examples

### 1. Playwright Tests with Hetzner Runners

```yaml
name: Playwright Tests on Hetzner Cloud

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
  workflow_dispatch:

jobs:
  setup-runner:
    runs-on: ubuntu-latest
    outputs:
      runner-name: ${{ steps.runner.outputs.runner-name }}
    steps:
      - name: Create Hetzner Cloud Runner
        id: runner
        uses: Cyclenerd/hcloud-github-runner@v1.2.0
        with:
          github_token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
          hcloud_token: ${{ secrets.HCLOUD_TOKEN }}
          server_type: cpx21
          server_location: nbg1
          runner_name_prefix: 'playwright-'
          runner_labels: 'hetzner,playwright'

  test:
    needs: setup-runner
    runs-on: ${{ needs.setup-runner.outputs.runner-name }}
    timeout-minutes: 60
    env:
      BASE_URL: ${{ secrets.BASE_URL }}
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        run: npx playwright test

      - uses: actions/upload-artifact@v4
        if: ${{ !cancelled() }}
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

### 2. Simple Test Workflow

```yaml
name: Test Hetzner Runner

on:
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Setup Hetzner Cloud Runner
        uses: Cyclenerd/hcloud-github-runner@v1.2.0
        with:
          github_token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
          hcloud_token: ${{ secrets.HCLOUD_TOKEN }}
          server_type: cpx11
          runner_labels: 'test,hetzner'

      - name: Simple test
        run: |
          echo "✅ Hetzner Cloud runner is working!"
          echo "Runner info:"
          uname -a
          nproc
          free -h
          df -h
```

## Security Considerations

### Token Permissions

- Use fine-grained PATs with minimal required permissions
- Set token expiration dates and rotate regularly
- Monitor token usage in GitHub settings

### Server Security

- Servers are automatically destroyed after job completion
- Each job gets a fresh, isolated environment
- Network access is limited to what's needed for the job

### Cost Management

- Set `server_keep_alive_minutes` to minimize costs
- Monitor usage in Hetzner Cloud console
- Consider using smaller server types for simple jobs

## Monitoring and Troubleshooting

### Check Runner Status

1. Go to your repository settings
2. Navigate to Actions > Runners
3. Look for runners with your configured prefix

### Monitor Costs

1. Check Hetzner Cloud console for usage
2. Review GitHub Actions usage in repository insights
3. Set up billing alerts in Hetzner Cloud

### Common Issues

**Runner not appearing:**

- Verify GitHub token permissions
- Check Hetzner Cloud token validity
- Ensure secrets are correctly named

**Job timeouts:**

- Increase `timeout-minutes` in workflow
- Consider using larger server types for resource-intensive jobs

**Cost concerns:**

- Reduce `server_keep_alive_minutes`
- Use appropriate server types for your workload
- Monitor actual vs expected usage

## Why This Approach Works

The "simple copy-paste" approach works because:

1. **Abstraction**: Complex infrastructure is hidden behind a simple interface
2. **Best Practices**: The action implements security and cost optimization automatically
3. **Flexibility**: You can still customize when needed
4. **Reliability**: Proven action used by many projects
5. **Maintenance**: No need to manage infrastructure yourself

This is the power of the GitHub Actions ecosystem - making complex operations simple and accessible to all developers.
