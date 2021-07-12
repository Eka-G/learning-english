import CardsField from '../../components/cards-field';
import AdminCard from '../../components/admin-card';
import './admin-words-page.css';

const AdminWordsPage = () => {
  return (
    <div className="page__content">
      <CardsField isAdmin>
        <AdminCard word="cry" translation="плакать" image="img/cry.jpg" audioSrc="audio/cry.mp3" isNew={false} />

        <AdminCard word="" translation="" image="" audioSrc="" isNew />
        <AdminCard word="cry" translation="плакать" image="img/cry.jpg" audioSrc="audio/cry.mp3" isNew={false} />
        <AdminCard word="cry" translation="плакать" image="img/cry.jpg" audioSrc="audio/cry.mp3" isNew={false} />
        <AdminCard word="cry" translation="плакать" image="img/cry.jpg" audioSrc="audio/cry.mp3" isNew={false} />
        <AdminCard word="cry" translation="плакать" image="img/cry.jpg" audioSrc="audio/cry.mp3" isNew={false} />
        <AdminCard word="cry" translation="плакать" image="img/cry.jpg" audioSrc="audio/cry.mp3" isNew={false} />
      </CardsField>
    </div>
  );
};

export default AdminWordsPage;
