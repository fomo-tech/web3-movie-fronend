// routes.ts
export const ROUTES = {
  home: "/",
  signin: "/signin",
  signup: "/signup",
  profile: "/profile",
} as const;

export const publicRoutes: string[] = [
  ROUTES.home,
  ROUTES.signin,
  ROUTES.signup,
];

export const protectedRoutes: string[] = [
  ROUTES.profile,
];

export const allRoutes: string[] = [...publicRoutes, ...protectedRoutes];