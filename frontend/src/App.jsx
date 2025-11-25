import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

//Art
import CollectionListings from './components/CollectionListings'; 
import ArtLayout from './layouts/ArtLayout';
import NavArt from './components/NavArt';
import ViewAllArt from './components/ViewAllArt';
import ViewAllCollections from './components/ViewAllCollections';
import HomePageArt from './pages/HomePageArt';

//Art
import CollectionListings from './components/CollectionListings'; 
import ArtLayout from './layouts/ArtLayout';
import NavArt from './components/NavArt';
import ViewAllArt from './components/ViewAllArt';
import ViewAllCollections from './components/ViewAllCollections';
import HomePageArt from './pages/HomePageArt';

//Art
import CollectionListings from './components/CollectionListings'; 
import ArtLayout from './layouts/ArtLayout';
import NavArt from './components/NavArt';
import ViewAllArt from './components/ViewAllArt';
import ViewAllCollections from './components/ViewAllCollections';
import HomePageArt from './pages/HomePageArt';

//Art
import CollectionListings from './components/CollectionListings'; 
import ArtLayout from './layouts/ArtLayout';
import NavArt from './components/NavArt';
import ViewAllArt from './components/ViewAllArt';
import ViewAllCollections from './components/ViewAllCollections';
import HomePageArt from './pages/HomePageArt';

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
};

// Delete Job
const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
};

// Update Job
const updateJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  return;
};


const router = createBrowserRouter(
  createRoutesFromElements(

    <>
      

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    
    

<Route path="/" element={<ArtLayout />}>
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route
        path='jobs'
        element={<JobsPage />}
      />

      <Route 
        path='add-job'
        element={<AddJobPage
        addJobSubmit={addJob}/>}
      />
      <Route
        path='edit-job/:id'
        element={<EditJobPage updateJobSubmit={updateJob}/>}
        loader={jobLoader}
      />
      <Route
        path='jobs/:id'
        element={<JobPage deleteJob={ deleteJob }/>}
        loader={jobLoader}
      />
      <Route
        path='*' element={<NotFoundPage />}
      />

     
    </Route>
    

<Route path="/art" element={<ArtLayout />}>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  <Route index element={<HomePageArt />} /> 
  <Route path="collections/:id" element={<CollectionListings />} />
  <Route path="allArt" element={<ViewAllArt />} />
  <Route path="allCollections" element={<ViewAllCollections />} />
</Route>
  </>
  )
  
);

  return <RouterProvider router={router} />;
};

export default App