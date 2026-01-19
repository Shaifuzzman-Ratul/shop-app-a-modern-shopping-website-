import { cookies } from 'next/headers';

// Mock credentials
const MOCK_USER = {
    email: 'admin@example.com',
    password: 'password123'
};

export async function login(email, password) {
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
        const cookieStore = await cookies();
        cookieStore.set('auth-token', 'authenticated', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7 // 7 days
        });
        return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('auth-token');
}

export async function isAuthenticated() {
    const cookieStore = await cookies();
    return cookieStore.has('auth-token');
}