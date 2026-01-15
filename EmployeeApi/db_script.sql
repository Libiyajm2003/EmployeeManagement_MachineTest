IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Employees] (
    [EmployeeId] int NOT NULL IDENTITY,
    [Name] nvarchar(100) NOT NULL,
    [Email] nvarchar(100) NOT NULL,
    [Department] nvarchar(50) NOT NULL,
    [Salary] decimal(10,2) NOT NULL,
    [CreatedOn] datetime2 NOT NULL,
    CONSTRAINT [PK_Employees] PRIMARY KEY ([EmployeeId])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20260114174011_InitialCreate', N'8.0.0');
GO

COMMIT;
GO

