import './App.css';
import Pray from './components/Pray';

const DUMMY__INFO = [
  {
    title:"صبح",
    bound:"2"
  },
  {
    title:"ظهر",
    bound:"4"
  },
  {
    title:"عصر",
    bound:"4"
  },
  {
    title:"مغرب",
    bound:"3"
  },
  {
    title:"عشاء",
    bound:"4"
  },
];

function App() {
  return (
    <div className='container'>
      {/* <Pray title="صبح" bound='2'/> */}
      {/* <Pray data={DUMMY__INFO[0]}/> */}
      {DUMMY__INFO.map((el,index) => <Pray key={index} data={el}/>)}
    </div>
  );
}

export default App;
