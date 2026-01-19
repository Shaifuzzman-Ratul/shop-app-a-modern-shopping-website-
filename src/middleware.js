import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Check if the route should be protected
    const protectedRoutes = ['/dashboard'];
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    if (isProtectedRoute) {
        const authToken = request.cookies.get('auth-token');

        if (!authToken) {
            // Redirect to login if not authenticated
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*']
};