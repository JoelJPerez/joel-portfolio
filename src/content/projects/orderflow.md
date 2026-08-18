---
title: "OrderFlow"
status: "in-development"
featured: true
order: 1
stack:
  - ".NET 8"
  - "CQRS · MediatR"
  - "PostgreSQL"
  - "EF Core"
  - "React 18"
  - "Redux Toolkit"
  - "Docker"
  - "AWS"
  - "JWT"
  - "FluentValidation"
github: "https://github.com/JoelJPerez/OrderFlow"
image: "/projects/orderflow.png"
en:
  tagline: "B2B multi-tenant order management SaaS with Clean Architecture and CQRS."
  challenge: "B2B distributors need a single platform where multiple companies manage products, inventory, and orders — with hard guarantees that one tenant can never see another tenant's data."
  solution: "A multi-tenant SaaS built on .NET 8 with Clean Architecture and CQRS via MediatR. Tenant isolation is enforced at the data layer with EF Core global query filters applied by convention to every tenant-scoped entity, so isolation is automatic rather than something each query must remember. Inventory models on-hand and reserved quantities from day one, and the request pipeline includes FluentValidation behaviors and global exception handling. A React 18 + Redux Toolkit frontend and AWS deployment with CI/CD are next on the roadmap."
  highlights:
    - "Convention-based tenant isolation with EF Core global query filters"
    - "Clean Architecture with feature-folder organization"
    - "Reproducible dev environment via committed docker-compose"
es:
  tagline: "SaaS B2B multi-tenant de gestión de pedidos con Clean Architecture y CQRS."
  challenge: "Los distribuidores B2B necesitan una sola plataforma donde múltiples empresas gestionen productos, inventario y pedidos — con garantías estrictas de que un tenant nunca pueda ver los datos de otro."
  solution: "Un SaaS multi-tenant construido sobre .NET 8 con Clean Architecture y CQRS vía MediatR. El aislamiento de tenants se aplica en la capa de datos con global query filters de EF Core aplicados por convención a cada entidad con alcance de tenant, de modo que el aislamiento es automático y no algo que cada consulta deba recordar. El modelo de inventario distingue cantidades disponibles y reservadas desde el día uno, y el pipeline de peticiones incluye behaviors de FluentValidation y manejo global de excepciones. Un frontend en React 18 + Redux Toolkit y el despliegue en AWS con CI/CD son los siguientes pasos del roadmap."
  highlights:
    - "Aislamiento de tenants por convención con global query filters de EF Core"
    - "Clean Architecture con organización por feature folders"
    - "Entorno de desarrollo reproducible vía docker-compose versionado"
---

OrderFlow is the flagship project of this portfolio: an order management SaaS designed the way a real B2B product would be — multi-tenant from the first migration, not as an afterthought.
