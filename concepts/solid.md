# SOLID Principles

## S — Single Responsibility Principle

**A class should have only one reason to change.**

This helps **limit the area affected by changes**.

## O — Open/Closed Principle

**A class should be open for extension but closed for modification.**

This avoids constantly modifying old code while making it easy to add new functionality.

## L — Liskov Substitution Principle

**A subclass should be able to replace its base class without breaking the program.**

This helps us write predictable code. If I know I can use the parent class, I should also be able to replace it with a child class without breaking the program.

## I — Interface Segregation Principle

**No client should depend on methods it does not use.**

This makes maintenance easier and helps avoid side effects when modifying an interface.

## D — Dependency Inversion Principle

**High-level modules should not depend on low-level modules.**

This makes it easier to change implementations and **reduces coupling**.