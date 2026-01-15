# Employee Management System - Full-Stack CRUD Application

A full-stack Employee Management System built with **Next.js**, **Material UI**, **ASP.NET Core**, and **SQL Server**.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14.2.1 (React)
- **UI Library:** Material UI (MUI) 5.15.15
- **HTTP Client:** Axios 1.6.8
- **Styling:** Emotion (CSS-in-JS)

### Backend
- **Framework:** ASP.NET Core Web API (.NET 8.0)
- **Database:** SQL Server (LocalDB)
- **ORM:** Entity Framework Core 8.0.0
- **API Documentation:** Swagger/OpenAPI

---

## 📋 Features

- ✅ **Create** new employees with validation
- ✅ **Read** and display employees in a Material UI table
- ✅ **Update** existing employee information
- ✅ **Delete** employees with confirmation
- ✅ Real-time notifications for all operations
- ✅ Responsive design with Material UI
- ✅ Form validation on both client and server
- ✅ RESTful API with proper HTTP status codes
- ✅ CORS enabled for cross-origin requests

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- .NET 8.0 SDK
- SQL Server or SQL Server LocalDB
- Visual Studio Code or Visual Studio (optional)

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd EmployeeApi
   ```

2. **Restore NuGet packages:**
   ```bash
   dotnet restore
   ```

3. **Update database connection string (if needed):**
   - Open `appsettings.json`
   - Modify the `ConnectionStrings.DefaultConnection` if using a different SQL Server instance

4. **Apply database migrations:**
   ```bash
   dotnet ef database update
   ```

5. **Run the backend API:**
   ```bash
   dotnet run
   ```
   
   The API will start at: `http://localhost:5252`
   
   Swagger UI available at: `http://localhost:5252/swagger`

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd employee-ui
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify API endpoint (if needed):**
   - Open `src/services/employeeApi.js`
   - Ensure `API_URL` matches your backend URL: `http://localhost:5252/api/employees`

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   The application will start at: `http://localhost:3000`

---

## 📁 Project Structure

```
.
├── EmployeeApi/                      # ASP.NET Core Web API
│   ├── Controllers/
│   │   └── EmployeesController.cs    # CRUD API endpoints
│   ├── Data/
│   │   └── AppDbContext.cs           # EF Core DbContext
│   ├── Models/
│   │   └── Employee.cs               # Employee entity model
│   ├── Migrations/                   # EF Core migrations
│   ├── Program.cs                    # Application entry point
│   ├── appsettings.json             # Configuration
│   └── EmployeeApi.csproj           # Project file
│
└── employee-ui/                      # Next.js Frontend
    ├── src/
    │   ├── app/
    │   │   ├── page.js              # Main application page
    │   │   ├── layout.js            # Root layout
    │   │   └── globals.css          # Global styles
    │   ├── components/
    │   │   ├── EmployeeTable.js     # MUI table component
    │   │   └── EmployeeDialog.js    # Add/Edit dialog
    │   └── services/
    │       └── employeeApi.js       # Axios API services
    ├── package.json                  # Dependencies
    └── next.config.mjs              # Next.js configuration
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get employee by ID |
| POST | `/api/employees` | Create new employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |

### Sample Request Body (POST/PUT)
```json
{
  "name": "Libiya",
  "email": "libiya.jm@example.com",
  "department": "Engineering",
  "salary": 75000.00
}
```

---

## 💾 Database Schema

### Employees Table
| Column | Type | Constraints |
|--------|------|-------------|
| EmployeeId | INT | Primary Key, Identity |
| Name | NVARCHAR(100) | Required |
| Email | NVARCHAR(100) | Required, Email Format |
| Department | NVARCHAR(50) | - |
| Salary | DECIMAL(10,2) | - |
| CreatedOn | DATETIME | Auto-generated |

---

## 🎨 UI Components

### Main Features
1. **Employee Table:**
   - Displays all employees in a Material UI DataGrid
   - Shows Name, Email, Department, Salary
   - Edit and Delete action buttons

2. **Add/Edit Dialog:**
   - Modal dialog for adding/editing employees
   - Form validation
   - Material UI TextFields
   - Save/Cancel actions

3. **Notifications:**
   - Success/Error messages using MUI Snackbar
   - Auto-dismiss after 6 seconds

---

## 🧪 Testing the Application

1. **Start both Backend and Frontend** as described above

2. **Test CRUD Operations:**
   - Click "Add Employee" to create a new record
   - Fill in the form and click "Create"
   - Click the Edit icon to modify an employee
   - Click the Delete icon to remove an employee (with confirmation)

3. **API Testing (Optional):**
   - Use Swagger UI: `http://localhost:5252/swagger`
   - Or use tools like Postman/Insomnia

---

## 🔧 Technologies Deep Dive

### Frontend Technologies
- **Next.js:** React framework with server-side rendering
- **Material UI:** Comprehensive component library
- **Axios:** Promise-based HTTP client
- **React Hooks:** useState, useEffect for state management

### Backend Technologies
- **ASP.NET Core:** Modern, cross-platform framework
- **Entity Framework Core:** Object-Relational Mapper (ORM)
- **LINQ:** Query data using C# syntax
- **Data Annotations:** Model validation

---

## 📝 Notes

- The backend uses **Entity Framework Core** with Code-First approach
- Migrations are included to set up the database schema
- CORS is enabled to allow the Next.js frontend to communicate with the API
- All API endpoints follow RESTful conventions
- The frontend uses React hooks for state management
- Material UI provides a consistent, professional look

---

## 🤝 Collaboration

This project was created as part of a machine test assessment.

**GitHub Collaborator:** [Bidhin-Gopan](https://github.com/Bidhin-Gopan)

---

## 🐛 Troubleshooting

### Common Issues

**1. Database Connection Error:**
- Ensure SQL Server/LocalDB is running
- Verify connection string in `appsettings.json`
- Run migrations: `dotnet ef database update`

**2. CORS Error:**
- Verify CORS is enabled in `Program.cs`
- Check that the frontend API URL matches the backend URL

**3. Port Already in Use:**
- Backend: Change port in `Properties/launchSettings.json`
- Frontend: Next.js will automatically use next available port

**4. npm install fails:**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then reinstall

---

## 📄 License

This project is created for assessment purposes.

---

**Created by:** [Your Name]  
**Date:** January 2026  
**Assessment:** Full-Stack CRUD Application Machine Test
