// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  // Here you would typically send an email or save to a database
  // For this example, we'll just log the data and return a success response
  console.log("Contact form submission:", { name, email, message });

  // Simulate an API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({
    success: true,
    message: "Message received! We'll get back to you soon.",
  });
}
