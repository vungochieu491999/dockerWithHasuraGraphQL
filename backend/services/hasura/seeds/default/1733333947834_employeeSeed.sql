SET check_function_bodies = false;
INSERT INTO public.employee (employeeid, firstname, lastname, email, dateofbirth, datehired, department, "position", status) VALUES (4, 'hieuvn', 'hieuvn', 'hieuvn@gmail.com', '2024-12-04', '2024-12-04', 'hieuvn', 'hieuvn', 'Active');
SELECT pg_catalog.setval('public.employee_employeeid_seq', 4, true);
