import {LoggedInFooter} from "@/components/parts/LoggedInFooter";
import {LoggedInHeader} from "@/components/parts/LoggedInHeader";

export const LoggedInLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <LoggedInHeader />
      {children}
      <LoggedInFooter />
    </main>
  );
};
