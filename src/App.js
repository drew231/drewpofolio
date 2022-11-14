import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import OuterCard from './components/OuterCard';
import Work from './components/work';
import Education from './components/education';
import Hobbies from './components/hobbies';

function App() {
  return (
    <>
      <Navbar />

        <div class="py-6">
          <main>
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              {/* <!-- Replace with your content -->

            <!-- Work --> */}
              <OuterCard />

              {/* <!-- Work --> */}
              <Work />

              {/* <!-- Education --> */}
              <Education />
              {/* <!-- Hobbies --> */}
              
            </div>
            {/* <!-- /End replace --> */}
            <Hobbies />
            </main>
        </div>
      
    
    </>
  );
}

export default App;
