import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { api } from "../../api";
import type { ApiError } from "../../api";

export async function PATCH(req: Request) {
  const cookieStore = cookies();
  const body = await req.json();

  try {
    const { data } = await api.patch("users/me", body, {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;

    return NextResponse.json(
      { error: err.response?.data?.error ?? err.message },
      { status: err.response?.status ?? 500 }
    );
  }
}