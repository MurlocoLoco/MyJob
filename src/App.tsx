import Form from './components/Form';
import styles from "./App.module.css"
import List from './components/List';


const App = () => {
  return (
    <div className={styles.main}>
      <Form></Form>
      <List></List>
    </div>
  );
}

export default App;
