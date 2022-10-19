import Form from './components/Form';
import styles from "./App.module.css"
import List from './components/List';
import ProgressBar from './components/ProgressBar';


const App = () => {
  return (
    <div className={styles.main}>
      <div>
        <Form></Form>
      </div>
      <div>
        <ProgressBar></ProgressBar>
        <List></List>
      </div>
    </div>
  );
}

export default App;
