-- 1. Create the database (if it doesn't exist)
IF DB_ID('EmployeeDb') IS NULL
BEGIN
    CREATE DATABASE EmployeeDb;
END;
GO

-- 2. Use the database
USE EmployeeDb;
GO

-- 3. Drop Employees table if it exists (optional)
IF OBJECT_ID('Employees', 'U') IS NOT NULL
    DROP TABLE Employees;
GO

-- 4. Create Employees table
CREATE TABLE Employees (
    EmployeeId INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Department NVARCHAR(50) NOT NULL,
    Salary DECIMAL(10,2) NOT NULL,
    CreatedOn DATETIME DEFAULT GETDATE()
);
GO

-- 5. Insert sample data
INSERT INTO Employees (Name, Email, Department, Salary)
VALUES
('Libiya J M', 'libiyajm@gmail.com', 'Dotnet Developer', 25000.00),
('Akhil Kumar', 'akhil.kumar@example.com', 'QA Engineer', 20000.00),
('Sara Thomas', 'sara.thomas@example.com', 'HR', 22000.00);
GO

-- 6. Verify the table
SELECT * FROM Employees;
