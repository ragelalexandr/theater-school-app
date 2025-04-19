import HeaderBlock from './components/TopHeader';
import AboutBlock from './components/AboutUs';
import ProcessBlock from './components/OurCreativeProcess';
import TeamBlock from './components/OurTeam';
import OurTeachers from './components/OurTeachers';
import WhyUsBlock from './components/WhyUs';
import OurCoursesBlock from './components/OurCourses';
import StudentParticipation from './components/StudentParticipation';
import TheatricalProductions from './components/TheatricalProductions';
import OurTour from './components/OurTour';
import OurContacts from './components/OurContacts';


export default function Home() {
  return (
    <main>
      <HeaderBlock />
      <AboutBlock />
      <ProcessBlock />
      <TeamBlock />
      <OurTeachers />
      <WhyUsBlock />
      <OurCoursesBlock />
      <StudentParticipation />
      <TheatricalProductions />
      <OurTour />
      <OurContacts />
    </main>
  );
}
