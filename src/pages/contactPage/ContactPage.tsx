import ContactCard from '../../components/contactCard/contactCard';
import Header from '../../components/header/header';

function ContactPage() {
  const teacherData = {
    infoAboutTeacher: 'Hello, everyone! My name is Oana Pop and I am a teacher at the Faculty of Mathematics and Computer Science. Here are some personal information that might interest you:',
    contact: "oana.pop@ubbcluj.ro"
  };

  return (
    <div className="App">
      <Header />
      <ContactCard teacher={teacherData} />
    </div>
  );
}

export default ContactPage;
