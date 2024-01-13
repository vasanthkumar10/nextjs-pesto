"use client";

import Counter from "@/components/Counter";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const handleBtn = () => {
    // router.forward();
    // router.back()
    router.push("/");
  };

  return (
    <>
      <h1>About page</h1>
      <Counter />
      <button onClick={handleBtn}>Go to home page</button>
    </>
  );
}

// always use page.tsx

// ReactServerComponents -> 1. Server Side Components, 2. Client Side Components
