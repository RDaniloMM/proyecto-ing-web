// Ruta por defecto
export const defaultRoute = "/";

export const apiAuthRoute = "/api/auth";
// Ruta para inicio de sesión
export const loginRoute = "/login";
// Ruta para cerrar sesión
export const logoutRoute = "/logout";
// Ruta para registror un nuevo usuario
export const registerRoute = "/register";
export const paso2Route = "/register/paso2";
export const paso3Route = "/register/paso3";

export const homeStudentRoute = "/student";
export const chatsStudentRoute = "/student/chats";
export const recursoStudentRoute = "/student/recurso";
export const coursesStudentRoute = "/student/courses";

// Rutas de autenticación
export const authRoutes = [loginRoute, registerRoute, paso2Route, paso3Route];

// Todos los usuarios pueden acceder a las rutas públicas
export const publicRoutes = ["/", "/api", homeStudentRoute, chatsStudentRoute, recursoStudentRoute, coursesStudentRoute];

// Solo los usuarios autenticados pueden acceder a las rutas y subrutas protegidas
export const protectedRoutes = ["/dashboard"];
