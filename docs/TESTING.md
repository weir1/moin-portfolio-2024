# Testing Strategy & Guidelines

## Why Test?
1. **Quality Assurance**
   - Catch bugs early
   - Ensure functionality
   - Maintain code quality
   - Document expected behavior

2. **Types of Testing**
   - Unit Testing (70% of tests)
   - Integration Testing (20% of tests)
   - E2E Testing (10% of tests)

## When to Test?
1. **Unit Tests**
   - When writing new components
   - When creating utility functions
   - When implementing hooks
   - When fixing bugs

2. **Integration Tests**
   - When connecting multiple components
   - When implementing API calls
   - When setting up form submissions
   - When adding authentication flows

3. **E2E Tests**
   - When completing major features
   - When implementing critical user journeys
   - Before major releases
   - When testing performance

## How to Test?

### Unit Testing (Using Jest & React Testing Library)
```typescript
// Example Component Test
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    screen.getByText('Click me').click()
    expect(onClick).toHaveBeenCalled()
  })
})
```

### Integration Testing
```typescript
// Example Integration Test
describe('Contact Form', () => {
  it('submits form data correctly', async () => {
    render(<ContactForm />)
    
    await userEvent.type(screen.getByLabelText('Email'), 'test@example.com')
    await userEvent.type(screen.getByLabelText('Message'), 'Hello')
    await userEvent.click(screen.getByText('Submit'))

    expect(await screen.findByText('Message sent!')).toBeInTheDocument()
  })
})
```

### E2E Testing (Using Cypress)
```typescript
// Example E2E Test
describe('Portfolio Navigation', () => {
  it('navigates through main sections', () => {
    cy.visit('/')
    cy.get('[data-testid="nav-projects"]').click()
    cy.url().should('include', '/projects')
    cy.get('[data-testid="project-list"]').should('be.visible')
  })
})
```

## Test Coverage Requirements
1. **Components**
   - Minimum 80% coverage
   - Test all props
   - Test user interactions
   - Test error states

2. **Utils**
   - Minimum 90% coverage
   - Test edge cases
   - Test error handling
   - Test type validation

3. **API**
   - Minimum 85% coverage
   - Test success responses
   - Test error responses
   - Test data validation

## Best Practices
1. **Naming Conventions**
   - `ComponentName.test.tsx` for component tests
   - `utilName.test.ts` for utility tests
   - `feature.spec.ts` for E2E tests

2. **Test Organization**
   - Group related tests in describe blocks
   - Use clear test descriptions
   - Follow AAA pattern (Arrange, Act, Assert)

3. **Testing Priorities**
   - Critical user paths
   - Business logic
   - Error handling
   - Edge cases

## Testing Tools Setup
```json
// package.json test scripts
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "cypress run",
    "test:e2e:open": "cypress open"
  }
}
```

## CI/CD Integration
1. **Pre-commit Hooks**
   - Run unit tests
   - Check test coverage
   - Lint test files

2. **GitHub Actions**
   - Run all tests on PR
   - Generate coverage report
   - Block merge if tests fail

## Debugging Tests
1. **Common Issues**
   - Async timing problems
   - DOM updates not reflected
   - Test isolation issues

2. **Solutions**
   - Use `act()` for state updates
   - Implement proper cleanup
   - Use debug utilities

## Performance Testing
1. **Metrics to Test**
   - Load time
   - Time to Interactive
   - First Contentful Paint
   - Core Web Vitals

2. **Tools**
   - Lighthouse CI
   - WebPageTest
   - Chrome DevTools
