import { NextResponse } from "next/server";

export default function HeaderPage() {
  const handleRequest = (req) => {
    const authorizationHeader = req.headers.authorization || "";
    const modifiedHeader = `Bearer ${authorizationHeader}`;

    return new NextResponse(null, {
      headers: {
        Authorization: modifiedHeader,
      },
    });
  };

  return null;
}

export { handleRequest };
