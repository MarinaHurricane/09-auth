// import type { ReactNode } from "react";

// export default function AuthLayout({ children }: { children: ReactNode }) {
//   return <>{children}</>;
// }

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const refreshPage = async() => {
    router.refresh();
    setLoading(false);
    };
    refreshPage();
  }, [router]);

  return <>{loading ? <div>Loading...</div> : children}</>;
}