import AsideNav from '../../components/ui/AsideNav';
import Header from '../../components/ui/Header';

export default function AdmUserManagement() {
  return (
    <div className="flex h-screen font-geist">
      <AsideNav />
      <div className="flex flex-1 flex-col min-w-0 h-full">
        <Header />
        <main className="flex-1 overflow-y-hidden">
          <p>main</p>
        </main>
      </div>
    </div>
  );
}
