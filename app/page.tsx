import Navbar from "./components/navbar";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Navbar />
      <div className="flex-grow p-8 ">
        <h1 className="text-purple-400">Homepage</h1>
        
      </div>
      <Footer />
    </div>
  );
}
