import Hero from '../components/Jobs/Hero';
import HomeCards from '../components/Jobs/HomeCards';
import JobListings from '../components/Jobs/JobListings';
import ViewAllJobs from '../components/Jobs/ViewAllJobs'


const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true}/>
      <ViewAllJobs />
    </>
  )
}
export default HomePage