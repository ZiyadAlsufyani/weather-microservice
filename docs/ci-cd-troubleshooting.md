# CI/CD Pipeline Troubleshooting Guide

This guide provides solutions for common dependency installation failures in GitHub Actions CI/CD pipelines.

## Common Issues and Solutions

### 1. Node.js Version Mismatches

**Symptoms:**
- Errors about incompatible Node.js versions
- Unexpected behavior in dependencies

**Solution:**
- Ensure the same Node.js version is used across all environments
- Use the `engines` field in package.json to specify required versions
- Use `.nvmrc` or similar to enforce version consistency

### 2. Package Lock File Issues

**Symptoms:**
- Different dependencies being installed in different environments
- "Cannot find module" errors

**Solution:**
- Always commit package-lock.json to your repository
- Use `npm ci` instead of `npm install` in CI/CD pipelines
- Periodically run `npm dedupe` to resolve dependency conflicts

### 3. Network Timeouts

**Symptoms:**
- Random failures during dependency installation
- Timeout errors

**Solution:**
- Use `--prefer-offline` flag with npm to use cached packages when possible
- Implement retry logic for network operations
- Use a package registry proxy or mirror for more reliable access

### 4. Memory Limitations

**Symptoms:**
- "JavaScript heap out of memory" errors
- Process termination during installation

**Solution:**
- Increase Node.js memory limit with `NODE_OPTIONS="--max_old_space_size=4096"`
- Split large operations into smaller chunks
- Use a runner with more memory if available

### 5. Cache Corruption

**Symptoms:**
- Inconsistent behavior between clean and cached builds
- Unexpected errors after successful installations

**Solution:**
- Periodically clear npm cache with `npm cache clean --force`
- Use cache versioning in GitHub Actions
- Implement cache validation steps

## Debugging Steps

If you encounter dependency installation failures:

1. Run the troubleshooting workflow with debug mode enabled
2. Check the logs for specific error messages
3. Verify package.json and package-lock.json are valid and committed
4. Try clearing the npm cache and GitHub Actions cache
5. Check for network connectivity issues to npm registry

## Preventive Measures

To prevent dependency installation failures:

1. Regularly update dependencies with `npm update`
2. Run security audits with `npm audit`
3. Use dependency locking and version pinning
4. Implement comprehensive testing for dependency changes
5. Monitor dependency health with tools like Dependabot
