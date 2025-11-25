import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';


//Art
import CollectionListings from './components/CollectionListings'; 
import ArtLayout from './layouts/ArtLayout';

import ViewAllArt from './components/ViewAllArt';
import ViewAllCollections from './components/ViewAllCollections';
import HomePageArt from './pages/HomePageArt';
import NotFoundPage from './pages/NotFoundPage'

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
      

  
    

<Route path="/" element={<ArtLayout />}>
  <Route index element={<HomePageArt />} /> 
  <Route path="collections/:id" element={<CollectionListings />} />
  <Route path="allArt" element={<ViewAllArt />} />
  <Route path="allCollections" element={<ViewAllCollections />} />
  <Route path="*" element={<NotFoundPage />} />
</Route>
  </>
  )
  
);

  return <RouterProvider router={router} />;
};

export default App