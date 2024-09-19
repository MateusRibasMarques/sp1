import styles from './CreateEvento.module.css';

function CreateEvento() {
  return (
    <>
      <main className={styles.main}>
        <div
          className={styles.eventBlock}
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-4b46a572b786)' }}
        >
          <div className={styles.eventInfo}>
            <p className={styles.eventTitle}>Workshop de Planejamento de Eventos</p>
          </div>
        </div>

        <div
          className={styles.eventBlock}
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565120130290-c7b5bc33a9ce)' }}
        >
          <div className={styles.eventInfo}>
            <p className={styles.eventTitle}>Feira de Criadores de Eventos</p>
          </div>
        </div>

        <div
          className={styles.eventBlock}
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1515169067868-5387ec356754)' }}
        >
          <div className={styles.eventInfo}>
            <p className={styles.eventTitle}>Palestra: Como Engajar o Público</p>
          </div>
        </div>

        <div
          className={styles.eventBlock}
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533560904424-2db51bfb2b9e)' }}
        >
          <div className={styles.eventInfo}>
            <p className={styles.eventTitle}>Tendências de Eventos em 2024</p>
          </div>
        </div>

        <div
          className={styles.eventBlock}
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573164574572-cb89e39749e5)' }}
        >
          <div className={styles.eventInfo}>
            <p className={styles.eventTitle}>Masterclass de Gestão de Eventos</p>
          </div>
        </div>

        <div
          className={styles.eventBlock}
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517630800677-932d836ab29d)' }}
        >
          <div className={styles.eventInfo}>
            <p className={styles.eventTitle}>Como Criar Eventos Sustentáveis</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default CreateEvento;
