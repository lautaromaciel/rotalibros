# Architecture Decision Records

## ADR 1 – Use Angular for the Web Application

### Context
A framework is required to develop the web application. Among the technologies known by the developer are Angular and JavaScript.

React was considered due to its popularity and flexibility, but it was discarded because adopting it would require an additional learning investment.

### Decision
Use **Angular** for the web application.

### Rationale
The size of the application could make it difficult to maintain without a framework.

Additionally, recent versions of Angular have become more flexible and better suited for small and medium-sized applications while still providing a well-defined structure.

### Trade-offs
- Small initial time investment for project configuration and setup.
- Improved maintainability and application structure.
- Reduced learning curve by using a technology already known by the developer.

---

## ADR 2 – Use Node.js and Express for the Backend API

### Context
A technology must be selected to implement the backend API.

The backend technology currently known by the development team is **Node.js**, together with the **Express** framework.

### Decision
Use **Node.js + Express + TypeScript** for the backend API.

### Rationale
Using Node.js and TypeScript provides greater synergy between the frontend and backend development environments.

Since Angular also uses TypeScript and runs within the Node.js ecosystem during development, the number of technologies required across the application stack is reduced.

### Trade-offs
- Frontend and backend can use the same programming language: **TypeScript**.
- Fewer technologies need to be maintained across the stack.
- Knowledge and tooling can be reused between frontend and backend.
- The solution remains dependent on the Node.js ecosystem.

---

## ADR 3 – Use MySQL as the Relational Database

### Context
The application requires a database.

The main alternatives considered were:

- MongoDB
- Firestore
- MySQL

### Decision
Use **MySQL as a relational SQL database**.

### Rationale
The main entities of the system are strongly related to each other.

A relational database provides a clear way to define these relationships, maintain referential integrity, and organize the application's data model.

### Trade-offs
- Some of the flexibility provided by document-oriented databases is lost.
- Greater structure and consistency in the data model.
- Relationships between entities can be explicitly represented and enforced.

---

## ADR 4 – Do Not Use a Backend for Frontend (BFF)

### Context
The use of a **Backend for Frontend (BFF)** architecture was evaluated.

However, the system currently has:

- A single frontend client.
- A single backend API.
- No need to aggregate multiple APIs.
- No different clients requiring different API representations.
- No legacy APIs that need to be adapted or simplified.
- No current scaling requirement that would justify an additional intermediary layer.

### Decision
Do **not** introduce a Backend for Frontend layer.

The web application will communicate directly with the backend API.

### Rationale
A BFF would introduce an additional architectural layer without solving a current problem.

Since the project has a single client and a newly developed API, direct communication between the frontend and backend provides a simpler architecture.

### Trade-offs
- Reduced architectural complexity.
- Fewer services to develop, deploy, and maintain.
- Lower infrastructure and operational overhead.
- If multiple clients with significantly different requirements are introduced in the future, the decision may need to be reconsidered.

---

## ADR 5 – Use Client-Side Rendering for the Web Application

**Decision:** Use **Client-Side Rendering (CSR)** for the web application.

---

## ADR 6 – Use a Modular Architecture for the Web Application

**Decision:** Structure the web application using a **modular architecture**.

---

## ADR 7 – Use a Modular Monolith Architecture for the Backend API

**Decision:** Structure the backend API as a **Modular Monolith**.