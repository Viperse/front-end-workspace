import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
// Link는 새로고침 되지 않고 바로 링크 이동 NavLink는 눌렀을 때 class에 active 추가됨
import { useState } from 'react';
import "./App.css";


const Home = ({list, deleteBeverage}) => {

  const Delete = (e) => {
    deleteBeverage(e.target.id);
  };

  return (
    <table border="1" style={{borderCollapse : 'collapse'}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>음료명</th>
          <th>설명</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.desc}</td>
            <td><button onClick={Delete} id={item.id}>삭제</button></td>
          </tr>
        ))}
      </tbody>
  </table>
  );
}

const Create = ({ addBeverage }) => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    addBeverage(title, desc);
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">음료명 : </label>
        <input type="text" id="title" name="title" placeholder='음료명 입력'/>
      </div>
      <div>
        <label htmlFor="desc">설명 : </label>
        <input type="text" id="desc" name="desc" placeholder='설명 입력'/>
      </div>
      <button type="submit">추가</button>
    </form>
  );
}

const App = () => {
  const [id, setId] = useState(3);
  const [beverages, setBeverages] = useState([
    {id : 1, 
    title : '여수 윤슬 헤이즐넛 콜드브루', 
    desc : '윤슬을 형상화한 헤이즐넛 콜드브루'
    },
    {
      id : 2,
      title : '아이스 오렌지 판타지 유스베리 티',
      desc : '상큼한 오렌지와 유스베리, 얼그레이 티의 조화'
    },
  ]);

  const addBeverage = (title, desc) => {

    const newBeverage = {
      id,
      title,
      desc
    }

    setBeverages([...beverages, newBeverage]); // ... 세 개를 붙이면 기존 배열의 복제가 가능함
    setId(id + 1);
    
  }

  const deleteBeverage = (id) => {
    const newList = beverages.filter((item) => item.id !== parseInt(id));
    setBeverages(newList);
  };

  return (
    <BrowserRouter>
      <h1>Cafe</h1>
      <ul>
        <li><NavLink to="/">목록</NavLink></li>
        <li><NavLink to="/create">추가</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home list={beverages} deleteBeverage={deleteBeverage}/>} />
        <Route path="/create" element={<Create addBeverage={addBeverage} />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
