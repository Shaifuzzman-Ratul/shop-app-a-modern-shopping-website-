import { login } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        const result = await login(email, password);

        if (result.success) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json(
                { error: result.error },
                { status: 401 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}