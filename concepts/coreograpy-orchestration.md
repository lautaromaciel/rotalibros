# Choreography and Orchestration

## Choreography

**Choreography does not have a central coordinator.**

Instead, microservices react to events and communicate with each other.

### Advantages
- Lower coupling
- More flexibility
- Services can evolve more independently

### Disadvantages
- The overall flow is harder to follow
- Debugging can be more difficult
- It can become harder to understand what happened across multiple services

---

## Orchestration

**Orchestration has a central coordinator that controls the execution flow.**

The orchestrator decides which service should execute next based on the responses or results of previous steps.

### Advantages
- The flow is easier to understand
- Easier to debug and monitor
- Business processes are more explicit

### Disadvantages
- More coupling with the orchestrator
- The orchestrator can become a central point of complexity