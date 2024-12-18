-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- -- Create Employee Table
-- CREATE TABLE Employee (
--     EmployeeID SERIAL PRIMARY KEY,               -- Unique employee identifier with auto-increment (SERIAL in PostgreSQL)
--     FirstName VARCHAR(100) NOT NULL,              -- Employee's first name
--     LastName VARCHAR(100) NOT NULL,               -- Employee's last name
--     Email VARCHAR(100) UNIQUE NOT NULL,           -- Employee's email (must be unique)
--     DateOfBirth DATE NOT NULL,                    -- Employee's date of birth
--     DateHired DATE NOT NULL,                      -- Date when the employee was hired
--     Department VARCHAR(100) NOT NULL,             -- Employee's department
--     Position VARCHAR(100) NOT NULL,               -- Employee's position/job title
--     Status VARCHAR(10) CHECK (Status IN ('Active', 'Inactive')) DEFAULT 'Active'  -- Employment status (Active or Inactive)
-- );
--
-- -- Create Attendance Table
-- CREATE TABLE Attendance (
--     AttendanceID SERIAL PRIMARY KEY,             -- Unique attendance record identifier (auto-increment using SERIAL)
--     EmployeeID INT NOT NULL,                     -- Foreign key reference to Employee table
--     AttendanceDate DATE NOT NULL,                -- Date of the attendance record
--     Status VARCHAR(10) CHECK (Status IN ('Present', 'Absent', 'Late')) NOT NULL,  -- Attendance status
--     CheckInTime TIME,                            -- Time the employee checked in
--     CheckOutTime TIME,                           -- Time the employee checked out
--     HoursWorked DECIMAL(5, 2)                    -- Total hours worked (e.g., 8.50 hours)
-- );
--
-- -- Add Foreign Key Constraint
-- ALTER TABLE Attendance
--     ADD CONSTRAINT Employee_Attendance
--         FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID) ON DELETE CASCADE;
