graph TB
    subgraph "Client Layer"
        A[Portfolio Website<br/>Landing Page + Contact Form]
        B[Admin Dashboard<br/>React + Tailwind]
    end
    
    subgraph "API Gateway"
        C[Express.js Server<br/>Port 5000]
        D[CORS Middleware]
        E[JWT Auth Middleware]
    end
    
    subgraph "Business Logic Layer"
        F[Auth Controller<br/>Login/Password Change]
        G[Client Controller<br/>CRUD Operations]
        H[Project Controller<br/>Project Management]
        I[Activity Controller<br/>Timeline Tracking]
        J[Dashboard Controller<br/>Statistics & Analytics]
    end
    
    subgraph "Data Access Layer"
        K[Mongoose ODM]
        L[Admin Model]
        M[Client Model]
        N[Project Model]
        O[Activity Model]
    end
    
    subgraph "Database"
        P[(MongoDB<br/>business_dashboard)]
    end
    
    subgraph "External Services"
        Q[Email Service<br/>Optional]
        R[Payment Gateway<br/>Optional]
    end
    
    A -->|POST /api/clients/contact| C
    B -->|API Calls with JWT| C
    C --> D
    D --> E
    E --> F
    E --> G
    E --> H
    E --> I
    E --> J
    
    F --> K
    G --> K
    H --> K
    I --> K
    J --> K
    
    K --> L
    K --> M
    K --> N
    K --> O
    
    L --> P
    M --> P
    N --> P
    O --> P
    
    G -.-> Q
    H -.-> R
    
    style A fill:#06b6d4,stroke:#0891b2,color:#fff
    style B fill:#3b82f6,stroke:#2563eb,color:#fff
    style C fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style P fill:#10b981,stroke:#059669,color:#fff