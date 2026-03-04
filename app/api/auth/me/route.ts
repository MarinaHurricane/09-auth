import { NextResponse } from 'next/server';
import { api } from '../../api'; 
import { ApiError } from '@/lib/api/api';
import { cookies } from 'next/headers';


export async function GET() {
  const cookieStore = await cookies();


  try {
    const { data } = await api.get('/auth/me', {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });


    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as ApiError).response?.data?.error ?? (error as ApiError).message,
      },
      { status: (error as ApiError).status }
    )
  }
}



// export async function GET() {
//   return NextResponse.json({ hit: true });
// }