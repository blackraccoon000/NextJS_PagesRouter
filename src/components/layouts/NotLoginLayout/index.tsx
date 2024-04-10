import {NotLoginFooter} from "@/components/parts/NotLoginFooter";
import {NotLoginHeader} from "@/components/parts/NotLoginHeader";

export const NotLoginLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <NotLoginHeader />
      {children}
      <NotLoginFooter />
    </main>
  );
};
