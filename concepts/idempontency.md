# Idempotency and Safe Retries

## Idempotency

**Idempotency is the property of an operation that leaves the system in the same state even if the operation is executed multiple times.**

For example, executing the same operation once or several times should produce the same final result.

## Safe Retries

A **safe retry** is a way to safely retry an operation that is not naturally idempotent.

A common approach is to use an **idempotency key**.

The client sends a unique key with the request, and the server uses that key to detect whether the same request has already been processed.

If the request is repeated with the same idempotency key, the server avoids executing the operation again and can return the previous result.